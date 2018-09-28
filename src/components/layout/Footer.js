import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p className="App-intro">
                &copy;
                    <code> LHT </code> { (new Date()).getFullYear() }
            </p>
        </footer>
    )
}

export default Footer;