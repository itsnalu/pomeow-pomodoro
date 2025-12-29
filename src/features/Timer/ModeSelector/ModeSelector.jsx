import './ModeSelector.css'

function ModeSelector({ activeMode, onModeChange }) {
    const modes = [
        { id: 'pomodoro', label: 'Pomodoro', minutes: 25 },
        { id: 'shortBreak', label: 'Short Break', minutes: 5 },
        { id: 'longBreak', label: 'Long Break', minutes: 15 }
    ]

    return (
        <div className="mode-selector">
            {modes.map(mode => (
                <button
                    key={mode.id}
                    className={activeMode === mode.id ? 'active' : ''}
                    onClick={() => onModeChange(mode.id)}
                >
                    {mode.label}
                </button>
            ))}
        </div>
    )
}

export default ModeSelector
