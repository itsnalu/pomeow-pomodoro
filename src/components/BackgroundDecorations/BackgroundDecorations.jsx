import './BackgroundDecorations.css'
import PurpleStar from '../../assets/decorations/purple-star.svg'
import PurpleLeftFish from '../../assets/decorations/purple-left-fish.svg'
import PurpleRightFish from '../../assets/decorations/purple-right-fish.svg'

function BackgroundDecorations() {
    return (
        <div className="decorations">
            <img src={PurpleStar} className="deco star-left-1" alt="" />
            <img src={PurpleStar} className="deco star-left-2" alt="" />
            <img src={PurpleStar} className="deco star-left-3" alt="" />
            <img src={PurpleLeftFish} className="deco fish-left" alt="" />
            
            <img src={PurpleStar} className="deco star-right-1" alt="" />
            <img src={PurpleStar} className="deco star-right-2" alt="" />
            <img src={PurpleStar} className="deco star-right-3" alt="" />
            <img src={PurpleRightFish} className="deco fish-right-1" alt="" />
            <img src={PurpleRightFish} className="deco fish-right-2" alt="" />
        </div>
    )
}

export default BackgroundDecorations