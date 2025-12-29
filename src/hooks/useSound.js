function useSound(soundFile) {
    const play = () => {
        const audio = new Audio(soundFile)
        audio.volume = 1
        audio.play().catch(error => {
            console.log('Audio blocked:', error)
        })
    }
    
    return { play }
}

export default useSound