import React from 'react';
import './SponsorsPage.css';

const SponsorsPage = () => {
    return (<>
        <div className='sponsor-header'>
            <img src="./src/components/images/sponsors-header.webp" />
            <h1>Supporting...</h1>
        </div>
        <div className='sponsor-body'>
            <div className='logo'>
                <img src="./src/components/images/flippy2.webp" />
            </div>
            <div className='donate-text'>
                <img className="cuad" src="src/components/images/CUAD.svg" alt="CUAD" />
                <p>We want to give a thanks to the sponsors of CUAD. Your generous support plays a pivotal role in fueling our engineer process for the drones entering the International Aerial Robotics Competition. It is through your funding that we are able to access the essential materials and resources required to realize the full potential of our drone designs.</p>
                <button>Donate Now!</button>
            </div>
        </div>
        <div className='sponsor-body'>
            <div className='sponsor-text'>
                <h1>Sponsorships</h1>
                <p>We want to give a thanks to the sponsors of CUAD. Your generous support plays a pivotal role in fueling our engineer process for the drones entering the International Aerial Robotics Competition. It is through your funding that we are able to access the essential materials and resources required to realize the full potential of our drone designs.</p>
                <p>If you are interested in sponsoring CUAD, we invite you to explore our sponsorship packet below to learn more about our organization here at Cornell and the sponsorship process.</p>
                <p>Contact us at <a className='link' href="mailto:cuautodrone@gmail.com" target="_blank" rel="noreferrer">cuautodrone@gmail.com</a> for further questions.</p>
                <button>Download Sponsorship Packet</button>
            </div>
            <div className='sponsor-pdf'>
                <img src="./src/components/images/sponsor-front.webp" className='sponsor-doc front' />
                <img src="./src/components/images/sponsor-back.webp" className='sponsor-doc back' />
            </div>
        </div>
        <section>

        </section>
    </>)
}

export default SponsorsPage