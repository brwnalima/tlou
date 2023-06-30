import React from 'react'
import Video from '../Trailer/Trailer'

function About() {
    return (
        <div className='about-container'>

            <div className="wrapper">
                <div className="wrapperItens">
                    <h2></h2>
                    <p></p>
                </div>
                <div className="wrapperItens">
                    <div className="video-area">
                        <Video
        src={"https://www.youtube.com/embed/aGBPysEgDb0"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About