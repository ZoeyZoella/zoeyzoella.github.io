import React from 'react'

const ImageLink = ({ url, src, className }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <img src={src} className={className} alt="" />
        </a>
    )
}

export default ImageLink