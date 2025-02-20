import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-white text-center mt-4'>
            <div className='container fluid'>
                <p><small>Copyright &copy; My Webside {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
}

export default Footer;
