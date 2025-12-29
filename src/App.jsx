import './App.css'
import Header from './components/Header/Header'
import { TimerCard } from './features/Timer'
import { FishCounter } from './components/FishCounter'
import { MotivationalSign } from './components/MotivationalSign'
import usePomodoro from './hooks/usePomodoro'
import { BackgroundDecorations } from './components/BackgroundDecorations'

function App() {
  const {
    minutes, seconds, isRunning, activeMode, pomodoroCount,
    start, pause, reset, changeMode, modeMinutes
  } = usePomodoro()

  return (
    <div className="app">
      <BackgroundDecorations />
      <div className="app-header-row">
        <Header />
        
        <FishCounter count={pomodoroCount+1} />

        <MotivationalSign
          activeMode={activeMode}
          isRunning={isRunning} />

      </div>

      <div className="app-main">
        <TimerCard
          minutes={minutes}
          seconds={seconds}
          isRunning={isRunning}
          activeMode={activeMode}
          start={start}
          pause={pause}
          reset={reset}
          changeMode={changeMode}
          modeMinutes={modeMinutes}
        />
      </div>

    </div>
  )
}

export default App
