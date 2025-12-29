import './ProgressBar.css'

function ProgressBar({ progress }) {
    const percentage = Math.min(progress * 100, 100)
    
    return (
        <div className="progress-container">
            <div 
                className="progress-fill" 
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}

export default ProgressBar