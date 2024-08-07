import React from 'react';
import './SponsorsPage.css';

const SponsorsPage = () => {
    return (<>
        <div className='sponsor-header'>
            <img src="./src/components/images/sponsors-header.png" />
            <h1>Sponsors</h1>
        </div>
        <div className='sponsor-body'>
            <div className='sponsor-text'>
                <h1>Thank You!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis aut expedita dicta, perspiciatis voluptate temporibus minus error reiciendis nam numquam consequatur quod corrupti debitis pariatur atque cum! Corporis, neque!</p>
            </div>
            <div className='sponsor-pdf'>
                <img src="./src/components/images/sponsor-front.png" className='sponsor-doc front' />
                <img src="./src/components/images/sponsor-back.png" className='sponsor-doc back' />
            </div>
        </div>
        <section>

        </section>
    </>)
}

export default SponsorsPage