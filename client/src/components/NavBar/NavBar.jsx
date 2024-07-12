import "./NavBar.scss";
import call from "../../assets/icons/emergency_call.png";
import navigation from "../../assets/icons/navigation.svg";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <section className="navbar__section">
      <Link to="/">
        <div className="navbar__item">
          <img className="navbar__call" alt="emergency call" src={call} />
          <h3 className="navbar__text">Emergency Call</h3>
          </div>
          </Link>
          <Link to="/navigation">
          <div className="navbar__item">
          <img className="navbar__navigation" alt="navigation" src={navigation} />
          <h3 className="navbar__text">Navigation</h3>
        </div>
        </Link>
      </section>
    </nav>
  );
}

export default NavBar;
