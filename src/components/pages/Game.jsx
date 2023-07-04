import AbOne from '../games/AbOne'
import AbSec from '../games/AbSec'
import BannerSec from '../secBanner/BannerSec'
import './Pages.css'

function About() {
    return (
        <div className='about-container' id='game'>
            <AbOne/>
            <BannerSec/>
            <AbSec/>
        </div>
    )
}

export default About