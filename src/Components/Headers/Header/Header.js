import React from 'react';
import HeaderSlogan from '../HeaderSlogan/HeaderSlogan';
import Navbar from '../Navbar/Navbar';
import banner from '../../../images/headerBanner.png';
import CustomerSatisfaction from '../CustomerSatisfaction/CustomerSatisfaction';

const Header = () => {
    return (
        <header className='bg-dark' style={{height: '862px', backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Navbar />
            <HeaderSlogan />
            <CustomerSatisfaction />
        </header>
    );
};

export default Header;