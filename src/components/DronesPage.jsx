import React from 'react';
import './DronesPage.css';
import Drone from './Drone'
const drones = {
    'Greasy': {
        description: "WNWNWNKWNDKND,WKFKWNKF OLDQMD LQDMLQMDMD LMDQLM LMDQMDLM QDMLQMDLM MDQLMD D; QSML ;QS, [SQ [Q ,LMQLMD LMD D LQDL LDML,SQ, LLM LQD DLQDLMDL L,DLQMD LMLDLMDQMD LM Q KW LQM LQM S QSLL Q,LLMDQ DMLMDLDQM QLMDLMDLM LQMDLM LQMDLD LLQM;M QL;L WLM",
        stats: [
            { value: '30', label: 'Prop Size' },
            { value: '1.24', label: 'Weight' },
            { value: '02', label: 'Thrust' }
        ],
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    },
    'Buttery': {
        description: "WNWNWNKWNDKND,WKFKWNKF OLDQMD LQDMLQMDMD LMDQLM LMDQMDLM QDMLQMDLM MDQLMD D; QSML ;QS, [SQ [Q ,LMQLMD LMD D LQDL LDML,SQ, LLM LQD DLQDLMDL L,DLQMD LMLDLMDQMD LM Q KW LQM LQM S QSLL Q,LLMDQ DMLMDLDQM QLMDLMDLM LQMDLM LQMDLD LLQM;M QL;L WLM",
        stats: [
            { value: '30', label: 'Prop Size' },
            { value: '1.24', label: 'Weight' },
            { value: '02', label: 'Thrust' }
        ],
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    },
    'Flippy': {
        description: "WNWNWNKWNDKND,WKFKWNKF OLDQMD LQDMLQMDMD LMDQLM LMDQMDLM QDMLQMDLM MDQLMD D; QSML ;QS, [SQ [Q ,LMQLMD LMD D LQDL LDML,SQ, LLM LQD DLQDLMDL L,DLQMD LMLDLMDQMD LM Q KW LQM LQM S QSLL Q,LLMDQ DMLMDLDQM QLMDLMDLM LQMDLM LQMDLD LLQM;M QL;L WLM",
        stats: [
            { value: '30', label: 'Prop Size' },
            { value: '1.24', label: 'Weight' },
            { value: '02', label: 'Thrust' }
        ],
        images: ['./src/components/images/AboutPageDrone.png', './src/components/images/FooterGithubIcon.png']
    }
}

const DronesPage = () => {
    console.log(
        Object.entries(drones).map(([_k, _v], index) => {
            { index != 0 && <div key={`${index}-line`} className='line'></div> }
            <div key={`${index}-dot`} className='dot'></div>
        })
    )
    return (
        <div className='active-drones'>
            <ul className='dot-lines'>
                {Object.entries(drones).map(([_k, _v], index) => {
                    return <>
                        <div key={`${index}-dot`} className='dot'></div>
                        <div key={`${index}-line`} className='line'></div>
                    </>
                })}
                <div key={`small-dot`} className='dot small'></div>
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
    )
}

export default DronesPage;
