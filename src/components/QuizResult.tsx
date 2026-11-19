import type { AnswerRecord } from "../types/AnswerRecords";
import questions from "../data/questions";

type QuizResultProps = {
  totalQuestions: number;
  correctCount: number;
  onRestart: () => void;
  answerRecords: AnswerRecord[];
};

const QuizResult = ({
  totalQuestions,
  correctCount,
  onRestart,
  answerRecords,
}: QuizResultProps) => {
  return (
    <section className="quiz-result">
      <h2 className="quiz-result-title">クイズ終了</h2>

      <p className="quiz-result-score">
        {totalQuestions}問中 {correctCount}問正解
      </p>

      <h3 className="quiz-result-heading">問題ごとの回答結果</h3>

      <ul className="quiz-result-list">
        {answerRecords.map((answerRecord, index) => {
          const question = questions.find(
            (q) => q.id === answerRecord.questionId,
          );

          if (!question) return null;

          const correctIndex = question.correctIndex;
          const correctOption = question.options[correctIndex];
          const selectedIndex = answerRecord.selectedIndex;

          return (
            <li key={answerRecord.questionId} className="quiz-result-item">
              <div className="quiz-result-item-header">
                <span className="quiz-result-number">問題{index + 1}</span>

                <span
                  className={`quiz-result-judgment ${
                    answerRecord.isCorrect ? "is-correct" : "is-incorrect"
                  }`}
                >
                  {answerRecord.isCorrect ? "〇 正解" : "× 不正解"}
                </span>
              </div>

              <p className="quiz-result-question">{question.text}</p>

              <p className="quiz-result-answer">
                <span className="quiz-result-answer-label">あなたの回答：</span>
                <span className="quiz-result-answer-value">
                  {["A", "B", "C", "D"][selectedIndex]}.{" "}
                  {question.options[selectedIndex]}
                </span>
              </p>

              <p className="quiz-result-answer">
                <span className="quiz-result-answer-label">正しい答え：</span>
                <span className="quiz-result-answer-value">
                  {["A", "B", "C", "D"][correctIndex]}. {correctOption}
                </span>
              </p>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="next-question-button"
        onClick={onRestart}
      >
        もう一度挑戦
      </button>
    </section>
  );
};

export default QuizResult;
