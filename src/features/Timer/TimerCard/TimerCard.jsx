import ModeSelector from '../ModeSelector/ModeSelector'
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import ControlButtons from '../ControlButtons/ControlButtons'
import ProgressBar from '../ProgressBar/ProgressBar'
import { Cat } from '../../../components/Cat'
import './TimerCard.css'

function TimerCard({
    minutes, seconds, isRunning, activeMode,
    start, pause, reset, changeMode, modeMinutes
}) {

    const totalSeconds = modeMinutes[activeMode] * 60
    const remainingSeconds = minutes * 60 + seconds
    const progress = 1 - (remainingSeconds / totalSeconds)

    return (
        <div className="timer-card">
            <ModeSelector
                activeMode={activeMode}
                onModeChange={changeMode}
            />

            <ProgressBar progress={progress} />

            <TimeDisplay
                minutes={minutes}
                seconds={seconds}
            />

            <ControlButtons
                isRunning={isRunning}
                onStart={start}
                onPause={pause}
                onReset={reset}
            />

            <Cat />

            <footer className="timer-footer">
                Made with 💜 by{' '}
                <a href="https://www.linkedin.com/in/analumoreirar" target="_blank" rel="noopener noreferrer">
                    Ana Rodrigues
                </a>
            </footer>
        </div>
    )
}

export default TimerCard