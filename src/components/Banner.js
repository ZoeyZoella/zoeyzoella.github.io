import React from 'react'
import instagram from 'bootstrap-icons/icons/instagram.svg';
import spotify from 'bootstrap-icons/icons/spotify.svg';
import github from 'bootstrap-icons/icons/github.svg';
import ImageLink from './ImageLink';

const Banner = () => {
    return (
        <div className="banner">
            <div className="hoverable">
                <h1>Hi! I'm&nbsp;</h1>
                <h1 className="stretchy">Zhao Yang</h1>
                <h1>,</h1>
            </div>
            <h2>an aspiring game developer and music artist.</h2>
            <ul className="horizontal-list social-list">
                <li>
                    <ImageLink url="https://github.com/ZoeyZoella" src={github} className="social-icon" />
                </li>
                <li>
                    <ImageLink url="https://www.instagram.com/rina_zhaowayama/" src={instagram} className="social-icon" />
                </li>
                <li>
                    <ImageLink url="https://open.spotify.com/artist/2xGtCi320crKhuapkKjvgg?si=cypRchplSWeW8yqVV8yebg" src={spotify} className="social-icon" />
                </li>
                <li>
                    <ImageLink url="https://www.instagram.com/rina_zhaowayama/" src={instagram} className="social-icon" />
                </li>
            </ul>
        </div>
    )
}

export default Banner