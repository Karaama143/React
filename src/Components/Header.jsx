// import { useState } from "react";
import {Link} from 'react-router-dom';
import "../style.css";
const Header = () => {
   

    return (
        <div className="menu">
            <Link to="/" className='logo'>Design With Saed</Link>
            <div className='links'>
                <Link to="/">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
};

export default Header;