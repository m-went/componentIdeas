import './HamburgerMenu.css';
import { useState } from 'react';

function HamburgerMenu(props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setIsBurgerOpen((b) => !b);
  };

  const mobileNavbar = (
    <nav className="hamburgerMenu__mobileNavbar">
      <ul className="hamburgerMenu__mobileNavList">
        <a className="hamburgerMenu__mobileNavLink" href="/">
          <li>Home</li>
        </a>
        <a className="hamburgerMenu__mobileNavLink" href="/">
          <li>About me</li>
        </a>
        <a className="hamburgerMenu__mobileNavLink" href="/">
          <li>Skills</li>
        </a>
        <a className="hamburgerMenu__mobileNavLink" href="/">
          <li>Projects</li>
        </a>
        <a className="hamburgerMenu__mobileNavLink" href="/">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
  return (
    <div className="hamburgerMenu" onClick={toggleBurger}>
      <div className="hamburgerMenu__icon">
        <div className={`hamburgerMenu__line  ${isBurgerOpen ? 'hamburgerMenu__openLine--top' : ''}`}></div>
        <div className={`hamburgerMenu__line  ${isBurgerOpen ? 'hamburgerMenu__openLine--mid' : ''}`}></div>
        <div className={`hamburgerMenu__line  ${isBurgerOpen ? 'hamburgerMenu__openLine--bot' : ''}`}></div>
      </div>
      {isBurgerOpen ? mobileNavbar : null}
    </div>
  );
}

export default HamburgerMenu;
