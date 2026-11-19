type QuizFeedbackProps = {
  isAnswered: boolean;
  isCorrect: boolean;
  onNextQuestion: () => void;
  explanation: string;
};

const QuizFeedback = ({
  isAnswered,
  isCorrect,
  onNextQuestion,
  explanation,
}: QuizFeedbackProps) => {
  return (
    <section className="quiz-feedback" aria-live="polite">
      <p
        className={`feedback-message ${!isAnswered ? "" : isCorrect ? "is-correct" : "is-incorrect"}`}
      >
        {!isAnswered ? "" : isCorrect ? "正解です。" : "不正解です。"}
      </p>
      <p className="feedback-message feedback-explanation">
        {!isAnswered ? "" : explanation}
      </p>
      <button
        type="button"
        className="next-question-button"
        disabled={!isAnswered}
        onClick={onNextQuestion}
      >
        次の問題へ
      </button>
    </section>
  );
};

export default QuizFeedback;
