type QuizStatusProps = {
  currentProgress: number;
  correctCount: number;
  totalQuestions: number;
};

const QuizStatus = ({
  currentProgress,
  correctCount,
  totalQuestions,
}: QuizStatusProps) => {
  return (
    <header className="quiz-status">
      <div className="quiz-status-info">
        <p className="quiz-progress-text">
          問題 {currentProgress + 1} / {totalQuestions}
        </p>
        <p className="quiz-score">正解数 {correctCount}</p>
      </div>

      <progress
        className="quiz-progress-bar"
        value={currentProgress + 1}
        max={totalQuestions}
        aria-label="問題の進捗"
      />
    </header>
  );
};

export default QuizStatus;
