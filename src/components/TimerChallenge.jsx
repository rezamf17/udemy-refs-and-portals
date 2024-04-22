import { useState } from 'react'

export default function TimerChallange({title, targetTime}){
		const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
				setTimerStarted(true)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time is up!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1? "s" : ""}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challange
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
							{timerStarted ? 'Time is running...' : 'Timer Inactivate'}
						</p>
        </section>
    )
}