import type { Question } from "../types/Questions";

type QuizQuestionProps = {
  currentQuestion: Question;
  handleAnswer: (index: number) => void;
  isAnswered: boolean;
  selectedAnswer: number | null;
};

const QuizQuestion = ({
  currentQuestion,
  handleAnswer,
  isAnswered,
  selectedAnswer,
}: QuizQuestionProps) => {
  const getAnswerMark = (index: number): string => {
    if (index === currentQuestion.correctIndex) {
      return "〇";
    }

    if (index === selectedAnswer) {
      return "×";
    }

    return "";
  };

  const getOptionClass = (index: number): string => {
    if (!isAnswered) {
      return "option-button";
    }

    if (index === currentQuestion.correctIndex) {
      return "option-button is-correct";
    }

    if (index === selectedAnswer) {
      return "option-button is-incorrect";
    }

    return "option-button";
  };

  return (
    <section className="quiz-question" aria-labelledby="question-text">
      <h2 id="question-text">{currentQuestion.text}</h2>

      <ul className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <li key={index} className="quiz-option">
            <button
              type="button"
              className={getOptionClass(index)}
              disabled={isAnswered}
              onClick={() => handleAnswer(index)}
            >
              <span className="option-label">
                {["A", "B", "C", "D"][index]}
              </span>
              <span className="option-text">{option}</span>
              {isAnswered && (
                <span className="option-result">{getAnswerMark(index)}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuizQuestion;
