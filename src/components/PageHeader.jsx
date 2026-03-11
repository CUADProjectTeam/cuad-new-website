import React from 'react';
import './PageHeader.css';

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage,
  showLogo = false,
  darkOverlay = true 
}) => {
  return (
    <div className="page-header" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      {backgroundImage && darkOverlay && <div className="page-header-overlay"></div>}
      <div className="page-header-content">
        {showLogo && <img className="page-header-logo" src="images/CUAD.svg" alt="CUAD" />}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
