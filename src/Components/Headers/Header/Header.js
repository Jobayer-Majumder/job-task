import React from 'react';
import HeaderSlogan from '../HeaderSlogan/HeaderSlogan';
import Navbar from '../Navbar/Navbar';
import banner from '../../../images/headerBanner.png';

const headerStyle = {
    height: '700px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};

const Header = () => {
    return (
        <header className='bg-dark' style={headerStyle}>
            <Navbar />
            <HeaderSlogan />
        </header>
    );
};

export default Header;