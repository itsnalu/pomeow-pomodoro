import './MotivationalSign.css'

function MotivationalSign({ activeMode, isRunning, justFinished }) {
    const getMessage = () => {
        if (justFinished) return "Time to get back to work~"
        if (!isRunning && activeMode === 'pomodoro') return "You can do it!!"
        if (activeMode === 'pomodoro') return "Time to work~"
        return "Time to relax~"
    }

    return (
        <div className="sign-container">
            <div className="sign-rope sign-rope-left"></div>
            <div className="sign-rope sign-rope-right"></div>
            <div className="sign-board">
                <div className="sign-hole sign-hole-left"></div>
                <div className="sign-hole sign-hole-right"></div>
                <span className="sign-text">{getMessage()}</span>
            </div>
        </div>
    )
}

export default MotivationalSign