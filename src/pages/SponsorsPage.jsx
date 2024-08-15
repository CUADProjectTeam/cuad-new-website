import React from 'react';
import './SponsorsPage.css';

const sponsors = {
    "platinum": ["./images/onshape_logo.webp"],
    "gold": [],
    "silver": [],
    "bronze": [],
}

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
                <p>Thank you to the donors of CUAD! Drone parts are expensive and fragile. Your generous donations allow us to design the most technologically advanced UAVs possible. Components often cost hundreds of dollars and dozens are required to keep our drones in the air. Big ticket items like our CNC cost upwards of $6,000. Only through the generosity of our donors can we provide our members with hands-on experience in the cutting edge of technology.</p>
                <a href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&bledit=1&dids=5482" target='_blank' rel="noreferrer">
                    <button>Donate Now!</button>
                </a>
            </div>
        </div>
        <div className='sponsor-body'>
            <div className='sponsor-text'>
                <h1>Sponsorships</h1>
                <p>We want to thank our corporate sponsors of CUAD. Your support plays a pivotal role in fueling our engineering process to push the boundaries of UAV technology. It is through your funding that we can access the essential materials like carbon fiber, motors, and ESCs required to realize the full potential of our drone designs.</p>
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
        <section className='sponsor-logos'>
            <h2>Thank you to our...</h2>
            {Object.entries(sponsors).map(([title, values]) => {
                return <>
                    {values.length != 0 &&
                        <div>
                            <h3>{`${title} sponsor${values.length == 1 ? "" : "s"}`}</h3>
                            <div className='logos'>
                                {values.map((img) => {
                                    return <img className='sponsor-logo' src={img} />
                                })}
                            </div>
                        </div>
                    }
                </>
            })

            }

        </section>
    </>)
}

export default SponsorsPage