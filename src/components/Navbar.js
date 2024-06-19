import React, { useState,useEffect }  from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../assets/css/meyawo.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAffixed, setIsAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = window.scrollY;
      if (offsetTop > 20) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`custom-navbar ${isAffixed ? 'affix' : 'affix-top'}`} data-spy="affix" data-offset-top="20">
      <div className="container">
        <div className="logo" onClick={scrollToTop}>Home</div>
        <ul className={`nav ${isActive ? 'show' : ''}`}>
          <li className="item">
            <Link className="link" to="home" smooth={true} duration={1000}>Home</Link>
          </li>
          <li className="item">
            <Link className="link" to="about" smooth={true} duration={1000}>About</Link>
          </li>
          <li className="item">
            <Link className="link" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
          </li>
          <li className="item">
            <Link className="link" to="contact" smooth={true} duration={1000}>Contact</Link>
          </li>
        </ul>
        <div onClick={handleToggle} className={`hamburger hamburger--elastic  ${isActive ? 'is-active' : ''}`}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
