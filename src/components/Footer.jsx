import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h1>Cornell University Autonomous Drone</h1>
                <h5>This organization is a registered student organization of Cornell University.</h5>
                <p>For Questions & Sponsorship Inquiries:</p>
                <p>Contact <a className='email-link' href="mailto:cuautodrone@gmail.com">cuautodrone@gmail.com</a></p>
            </div>
            <div className="footer-right">
                <strong>Thank you for visiting!</strong>
                <p>Check out more information about CUAD below:</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/cu-auto-drone/">
                        <img src="src/components/images/FooterLinkedInIcon.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/cuautodrone">
                        <img src="src/components/images/FooterInstagramIcon.png" alt="Instagram" />
                    </a>
                    <a href="https://github.com/cuautodrone">
                        <img src="src/components/images/FooterGithubIcon.png" alt="GitHub" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
