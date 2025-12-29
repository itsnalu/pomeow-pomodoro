import './TimeDisplay.css'

function TimeDisplay({ minutes, seconds }) {
    const formatNumber = (num) => String(num).padStart(2, '0')

    return (
        <div className="time-display">
            {formatNumber(minutes)}:{formatNumber(seconds)}
        </div>
    )
}

export default TimeDisplay
