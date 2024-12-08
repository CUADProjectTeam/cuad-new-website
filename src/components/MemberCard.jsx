// MemberCard.js
import React from 'react';

const MemberCard = ({ image, name, team }) => {
  return (
    <div className="member-card">
      <img src={image} alt={name} className="member-image" />
      <p className="member-name">{name}</p>
      <p className="member-team">{team}</p>
    </div>
  );
};

export default MemberCard;