import React, { useEffect, useState } from 'react';
import './Nav.css';
const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY>100) {
            handleShow(true);
            
        }else {
            handleShow(false);
        }
    });
    }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img className='nav__logo' src="/images/Netflix-transparent.png" alt="Netflix Logo" />
        <img className='nav__avatar' src="/images/netflix-user.png" alt="Netflix User Logo" />
    </div>
  )
}

export default Nav