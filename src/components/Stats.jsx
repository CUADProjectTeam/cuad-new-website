import React from 'react';
import './Stats.css';

const Stats = ({ stats, align, text }) => {
    return <div className={`stats-container ${align}-stats`}>
        {stats.map((stat, index) => (
            <div key={index} className="stat-item">
                <h1 className={text}>{stat.value}</h1>
                <p className={text}>{stat.label}</p>
            </div>
        ))}
    </div>
}

export default Stats