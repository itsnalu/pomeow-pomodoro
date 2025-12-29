import { useState, useEffect } from 'react'
import catMeow from '../assets/sounds/cat-meow.mp3'

function usePomodoro() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [activeMode, setActiveMode] = useState('pomodoro')
    const [pomodoroCount, setPomodoroCount] = useState(0)

    const modeMinutes = {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15
    }

    const playMeow = () => {
        const audio = new Audio(catMeow)
        audio.volume = 1
        audio.play().catch(error => {
            console.log('Audio play failed:', error)
        })
    }

    const handleTimerComplete = () => {
        playMeow()
        setIsRunning(false)

        if (activeMode === 'pomodoro') {
            const newCount = pomodoroCount + 1
            setPomodoroCount(newCount)
            if (newCount >= 4) {
                setActiveMode('longBreak')
                setMinutes(modeMinutes.longBreak)
                setSeconds(0)
                setPomodoroCount(0)
            } else {
                setActiveMode('shortBreak')
                setMinutes(modeMinutes.shortBreak)
                setSeconds(0)
            }
        } else {
            setActiveMode('pomodoro')
            setMinutes(modeMinutes.pomodoro)
            setSeconds(0)
        }
    }

    useEffect(() => {
        let interval = null

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } else if (minutes > 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                } else {
                    handleTimerComplete()
                }
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isRunning, minutes, seconds])

    const start = () => setIsRunning(true)
    const pause = () => setIsRunning(false)

    const reset = () => {
        setIsRunning(false)
        setMinutes(modeMinutes[activeMode])
        setSeconds(0)
    }
    const changeMode = (newMode) => {
        setActiveMode(newMode)
        setMinutes(modeMinutes[newMode])
        setSeconds(0)
        setIsRunning(false)
    }

    return {
        minutes, seconds, isRunning, activeMode, pomodoroCount,
        start, pause, reset, changeMode, modeMinutes
    }
}

export default usePomodoro