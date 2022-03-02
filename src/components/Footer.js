import React from 'react';

const Footer = () => {
    return (
        <div className="wrapper">
        <footer>
        <div className="footerWrapper">
            
            <div className="icons">
                <a href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/" target="_blank" rel="noreferrer" className="linkedin">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
            
                    <a href="#1" className="facebook">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>

                    <a href="https://github.com/FemiAdesola" target="_blank" rel="noreferrer" className="github">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
               
                <p>Femi Adesola &copy; {new Date().getFullYear()} </p>
                </div>
                
        </footer>
    </div>
    );
};

export default Footer;