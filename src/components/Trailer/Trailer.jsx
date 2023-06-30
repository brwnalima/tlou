import React from 'react'

function Video({ src }) {
    return (
        <iframe width="420" height="315"
            src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
    )
}

export default Video