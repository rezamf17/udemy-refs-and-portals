import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {

	const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
				dialog.current.showModal();
			},
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <p>You Lost</p>}
      {!userLost && <p>You Won, your score is {score}</p>}
      <p>
        Target Time Was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stoped The Timer with <strong>{formattedTimeRemaining} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
