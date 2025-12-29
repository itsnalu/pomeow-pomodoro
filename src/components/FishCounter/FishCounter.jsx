import './FishCounter.css'
import yellowFish from '../../assets/decorations/yellow-fish.svg'

function FishCounter({ count }) {
    return (
        <div className="fish-counter">
            <h2 className="fish-title">Feed the cat!</h2>
            <div className="fish-display">
                <span className="fish-text">Fish: {count} 
                <img src={yellowFish} alt="fish" className="fish-icon" />
                </span>
            </div>
        </div>
    )
}

export default FishCounter