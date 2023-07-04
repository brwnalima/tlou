import React from 'react'
import './Trailer.css'

function Video({ src }) {
    return (
        <div className="iframe-video">
            <iframe
                src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video