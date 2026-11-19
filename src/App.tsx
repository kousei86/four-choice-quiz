import type { Question } from "./types/Questions.ts";
import type { AnswerRecord } from "./types/AnswerRecords.ts";

import questions from "./data/questions";
import QuizStatus from "./components/QuizStatus";
import QuizQuestion from "./components/QuizQuestion";
import QuizFeedback from "./components/QuizFeedback";
import QuizResult from "./components/QuizResult";
import "./App.css";

import { useState } from "react";

const App = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);

  // 現在の問題を取り出す
  const currentQuestion: Question = questions[currentProgress];

  // 回答したか
  const isAnswered = selectedAnswer !== null;

  // 正解したか
  const isCorrect =
    isAnswered && selectedAnswer === currentQuestion.correctIndex;

  // 回答時の操作
  const handleAnswer = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    if (currentQuestion.correctIndex === index) {
      setCorrectCount((prev) => prev + 1);
    }

    setAnswerRecords((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedIndex: index,
        isCorrect: currentQuestion.correctIndex === index,
      },
    ]);
  };

  // 次の問題へ
  const nextQuestion = () => {
    if (!isAnswered) return;

    if (currentProgress === questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentProgress((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const restartQuiz = () => {
    setCurrentProgress(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setIsFinished(false);
    setAnswerRecords([]);
  };

  return (
    <main className="quiz-app">
      <QuizStatus
        currentProgress={currentProgress}
        correctCount={correctCount}
        totalQuestions={questions.length}
      />
      {isFinished ? (
        <QuizResult
          totalQuestions={questions.length}
          correctCount={correctCount}
          onRestart={restartQuiz}
          answerRecords={answerRecords}
        />
      ) : (
        <>
          <QuizQuestion
            currentQuestion={currentQuestion}
            handleAnswer={handleAnswer}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer}
          />
          <QuizFeedback
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onNextQuestion={nextQuestion}
            explanation={currentQuestion.explanation}
          />
        </>
      )}
    </main>
  );
};

export default App;
