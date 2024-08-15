import React from 'react';
import './SponsorsPage.css';

const SponsorsPage = () => {
    return (<>
        <div className='sponsor-header'>
            <img src="./images/sponsors-header.webp" />
            <h1>Supporting...</h1>
        </div>
        <div className='sponsor-body'>
            <div className='sponsor-drone'>
                <img src="./images/flippy2.webp" />
            </div>
            <div className='donate-text'>
                <img className="cuad" src="images/CUAD.svg" alt="CUAD" />
                <p>We want to give a thanks to the sponsors of CUAD. Your generous support plays a pivotal role in fueling our engineer process for the drones entering the International Aerial Robotics Competition. It is through your funding that we are able to access the essential materials and resources required to realize the full potential of our drone designs.</p>
                <a href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&bledit=1&dids=5482" target='_blank' rel="noreferrer">
                    <button>Donate Now!</button>
                </a>
            </div>
        </div>
        <div className='sponsor-body'>
            <div className='sponsor-text'>
                <h1>Sponsorships</h1>
                <p>We want to give a thanks to the sponsors of CUAD. Your generous support plays a pivotal role in fueling our engineer process for the drones entering the International Aerial Robotics Competition. It is through your funding that we are able to access the essential materials and resources required to realize the full potential of our drone designs.</p>
                <p>If you are interested in sponsoring CUAD, we invite you to explore our sponsorship packet below to learn more about our organization here at Cornell and the sponsorship process.</p>
                <p>Contact us at <a className='link' href="mailto:cuautodrone@gmail.com" target="_blank" rel="noreferrer">cuautodrone@gmail.com</a> for further questions.</p>
                <a download="2023-2024 SPONSORSHIP PACKET" href="2023-2024_SPONSORSHIP_PACKET.pdf">
                    <button >Download Sponsorship Packet</button>
                </a>
            </div>
            <div className='sponsor-pdf'>
                <img src="./images/sponsor-front.webp" className='sponsor-doc front' />
                <img src="./images/sponsor-back.webp" className='sponsor-doc back' />
            </div>
        </div>
        <section>

        </section>
    </>)
}

export default SponsorsPage