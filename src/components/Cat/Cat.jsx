import Lottie from 'lottie-react'
import catAnimation from '../../assets/animations/cat-animation.json'
import './Cat.css'

function Cat() {
    return (
        <div className="cat-container">
            <Lottie 
                animationData={catAnimation}
                loop={true}
                className="cat-animation"
            />
        </div>
    )
}

export default Cat