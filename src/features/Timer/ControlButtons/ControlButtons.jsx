import StartIcon from '../../../assets/icons/start-icon.svg'
import PauseIcon from '../../../assets/icons/pause-icon.svg'
import ResetIcon from '../../../assets/icons/reset-icon.svg'
import './ControlButtons.css'

function ControlButtons({ isRunning, onStart, onPause, onReset }) {
    return (
        <div className="control-buttons">
            {isRunning ? (
                <>
                    <button className="control-btn" onClick={onPause}>
                        <img src={PauseIcon} alt="pause" className="btn-icon" />
                        PAUSE
                    </button>
                    <button className="control-btn" onClick={onReset}>
                        <img src={ResetIcon} alt="reset" className="btn-icon" />
                        RESET
                    </button>
                </>
            ) : (
                <button className="control-btn" onClick={onStart}>
                    <img src={StartIcon} alt="start" className="btn-icon" />
                    START
                </button>
            )}
        </div>
    )
}

export default ControlButtons
