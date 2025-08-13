import React, { Fragment } from 'react';
import './DronesPage.css';
import Drone, { DeadDrone } from '../components/Drone'

const drones = {
    'EY009': {
            description: "EY009 is our carrier drone and our largest and most capable platform. It is built entirely from in-house milled carbon fiber on our CNC machine, large carbon fiber tubes, and secured with custom aluminum clamps. The design also includes 3D printed components that mount electronics and form removable legs. These legs provide a massive 3 foot lift, allowing the drone to carry payloads of up to 150 lbs. EY009 has universal mounting points for a variety of payloads and has already successfully deployed Dart, our test drone. We have many future drops and missions planned for this versatile platform.",
            stats: [
                { value: '30', label: 'Prop Size (in)' },
                { value: '13', label: 'Weight (kg)' },
                { value: '70', label: 'Thrust (kg)' }
            ],
            images: ['./images/carrier0.JPG', './images/carrier1.jpg', './images/carrier2.JPG', './images/carrier3.png']
        },

    'Buttery': {
        description: "Buttery is the successor to Greasy and our most autonomously capable drone. Designed as a testbed, it enables quick mounting of a diverse set of components. It is equipped with a full Ardupilot autonomy stack, retractable grabber, Raspberry Pi, camera, and Coral TPU making it capable of onboard computer vision and navigation. Configured for full autonomy, Buttery is designed to complete our self-designed challenge where we must navigate obstacles and retrieve a small cube before returning home.",
        stats: [
            { value: '15', label: 'Prop Size (in)' },
            { value: '4.9', label: 'Weight (kg)' },
            { value: '15.1', label: 'Thrust (kg)' }
        ],
        images: ['./images/buttery.webp', './images/buttery2.webp', './images/buttery1.webp']
    },

    'Dale': {
        description: "Dale is our drop test drone. He was built quickly from CNC milled carbon fiber with a 3D printed shell to replicate the shape of Lawndart, our fast \"graveyard\" drone featured lower on the page. After a successful drop test from our large carrier drone EY009, he has been retired to training use. His low sensitivity makes him perfect for new members to learn how to fly drones.",
        stats: [
            { value: '7', label: 'Prop Size (in)' },
            { value: '1.2', label: 'Weight (kg)' },
            { value: '14', label: 'Thrust (kg)' }
        ],
        images: ['./images/dale.jpg']
    },
    'Camera Drone': {
            description: "Camera Drone is our fast filming FPV drone, designed for speed and exceptional maneuverability. It features an Avatar Pro FPV camera along with a Runcam 5 for high-quality footage, making it perfect for capturing drops from EY009. Built from CNC milled carbon fiber plates with 3D printed mounts, it is by far our most well-built, reliable, and fast fpv drone.",
            stats: [
                { value: '7', label: 'Prop Size (in)' },
                { value: '1.5', label: 'Weight (kg)' },
                { value: '15', label: 'Thrust (kg)' }
            ],
            images: ['./images/camera0.png', './images/camera1.png']
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
    'Lawndart v1': {
        description: "Lawndart v1 was our first attempt at building a record-breaking drone. After many failed flights, crashes, and rebuilds, it reached its final flight following a high-speed impact. Unfortunately, we were unable to capture much speed data, but the project taught us a great deal about the aerodynamic concept and gave us a clear direction for future versions. It was built from CNC milled carbon fiber, outsourced milled aluminum, and various 3D printed components.",
        date: '04.24.2025',
        images: ['./images/dart0.JPG', './images/dart1.PNG', './images/dart2.JPG', './images/dart3.PNG', './images/dart4.JPG']
    },
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
