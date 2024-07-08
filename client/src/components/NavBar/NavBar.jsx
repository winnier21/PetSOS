import "./NavBar.scss";
import call from "../../assets/icons/emergency_call.svg";
import navigation from "../../assets/icons/navigation.svg";


function NavBar() {
  return (
    <nav className="navbar">
      <section className="navbar__section">
        <div className="navbar__item">
          <img className="navbar__call" alt="emergency call" src={call} />
          <h3 className="navbar__text">Emergency Call</h3>
          </div>
          <div className="navbar__item">
          <img className="navbar__navigation" alt="navigation" src={navigation} />
          <h3 className="navbar__text">Navigation</h3>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
