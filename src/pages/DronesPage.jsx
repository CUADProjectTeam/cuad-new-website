import React, { Fragment } from 'react';
import './DronesPage.css';
import Drone, { DeadDrone } from '../components/Drone'

const drones = {
    'Buttery': {
        description: "Buttery is the successor to Greasy and our latest and most capable drone. Designed as a testbed, it enables quick mounting of a diverse set of components. It is equipped with a full Ardupilot autonomy stack, retractable grabber, Raspberry Pi, camera, and Coral TPU making it capable of onboard computer vision and navigation. Configured for full autonomy, Buttery is designed to complete our self-designed challenge where we must navigate obstacles and retrieve a small cube before returning home.",
        stats: [
            { value: '15', label: 'Prop Size (in)' },
            { value: '4.9', label: 'Weight (kg)' },
            { value: '15.1', label: 'Thrust (kg)' }
        ],
        images: ['./images/buttery.webp', './images/buttery2.webp', './images/buttery1.webp']
    },
    'Flippy': {
        description: "Flippy is our trainer drone and the most acrobatic in our lineup. With a carbon-fiber-infused 3D printed frame, this quad is our most crash-resistant and perfect for teaching new members how to fly. It also demonstrates that a tough and smooth flying frame can be 3D printed, with the right design. It is built with freestyle quad components and equipped with an FPV camera for easy high-speed control.",
        stats: [
            { value: '5', label: 'Prop Size (in)' },
            { value: '0.9', label: 'Weight (kg)' },
            { value: '7.8', label: 'Thrust (kg)' }
        ],
        images: ['./images/flippy2.webp', './images/flippy1.webp', './images/flippy.webp']
    }
}

const deadDrones = {
    'Brenda': {
        description: "Brenda was a drone made from old parts designed to test docking mechanisms. She has prop guards to make it easier to get near objects and a custom-designed grabber to attach to a mast when the pilot flips a switch. Brenda… retired just moments after completing her mission.",
        date: '05.18.2024',
        images: ['./images/rip_brenda.webp', './images/brenda3.webp', './images/brenda2.webp', './images/brenda1.webp']
    },
    'Greasy': {
        description: "Greasy was our first custom-designed large drone. It suffered from electrical problems, motor alignment issues, and insufficient frame stiffness. Greasy struggled to get consistent stable flight but taught us a ton about designing frames for large drones, finding good components, wiring, and debugging.",
        date: '04.09.2024',
        images: ['./images/greasy0.webp', './images/greasy1.webp', './images/greasy2.webp']
    },
}

const DronesPage = () => {
    return (
        <>
            <div className='title-card'>
                <img src='./images/drone-title.webp' />
                <div className='title-text'>
                    <img src='./images/CUAD.svg' />
                    <h1>Drones</h1>
                </div>
            </div>
            <div className='active-drones'>
                <ul className='dot-lines'>
                    {Object.entries(drones).map(([], index) => {
                        return <Fragment key={index}>
                            <div key={`${index}-dot`} className='dot'></div>
                            <div key={`${index}-line`} className='line'></div>
                        </Fragment>
                    })}
                    <div key="small-dot" className='dot small'></div>
                </ul>
                <ul className='drones'>
                    {Object.entries(drones).map(([title, values]) => {
                        return (
                            <Drone
                                key={title}
                                title={title}
                                description={values.description}
                                stats={values.stats}
                                images={values.images}
                            />)
                    })}
                </ul>
            </div>
            <div>
                <h1 id='graveyard'>Drone Graveyard</h1>
                <ul className='dead-drones'>
                    {Object.entries(deadDrones).map(([title, values]) => {
                        return (
                            <DeadDrone
                                key={title}
                                title={title}
                                description={values.description}
                                date={values.date}
                                images={values.images}
                            />)
                    })}
                </ul>
            </div>
        </>
    )
}

export default DronesPage;
