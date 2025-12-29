import './Header.css'
import PawIcon from '../../assets/icons/paw-icon.svg'

function Header() {

    return (
        <div className="header">
            <h1 className='header-title'>
                Pome<img src={PawIcon} alt="patinha" className="paw-icon" />w
            </h1>

        </div>
    )
}

export default Header