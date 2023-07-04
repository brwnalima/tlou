import ScrollToTop from '../scroll/ScrollTop';
import './BannerSec.css'
import { Fade } from "react-awesome-reveal";

function BannerSec() {
    return (
        <div className="banner-wrapper">
            <div className='bannerContainer'>
                <Fade duration={3000}><img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/curated%20list/TGA/2022/TGA22_Nominees_PLP_HeroKeyArt_2400x1200_v3" className="cardImgUm" /></Fade>
                <Fade duration={3000}><img src="https://pictureshop.com/wp-content/uploads/2022/03/bafta-FILMA-AWARDS.png" className="cardImgDois" /></Fade>
            </div>
            <div className="scroll"><ScrollToTop/></div>
        </div>
    )
}

export default BannerSec