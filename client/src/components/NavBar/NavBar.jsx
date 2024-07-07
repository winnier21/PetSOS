import "./NavBar.scss";
import logo from "../../assets/icons/logo.png";
import call from "../../assets/icons/emergency_call2.svg";
import navigation from "../../assets/icons/navigation.svg";
// import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" alt="logo" src={logo} />
      <section className="navbar__section">
        <div className="navbar__item">
          <img className="navbar__call" alt="emergency call" src={call} />
          <h3>Emergency Call</h3>
        </div>
        <div className="navbar__item">
          <img className="navbar__navigation" alt="navigation" src={navigation} />
          <h3>Navigation</h3>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
