import React from 'react';
import brandLogo from '../../../images/image 52.png';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={brandLogo} alt="" />
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        
                        <div className="navbar-nav ms-auto nunito-font">
                            <a className="nav-link"href="/"><BiSearch/> Search</a>
                            <a className="nav-link"href="/">Account</a>
                            <a className="nav-link" href="/">Help</a>
                            <a className="nav-link" href="/"><FiShoppingBag /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;