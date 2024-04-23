import { forwardRef } from "react"

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>
                Target Time Was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You Stoped The Timer with <strong>X seconds left</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal