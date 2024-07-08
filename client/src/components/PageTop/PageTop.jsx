import logo from "../../assets/icons/logo.png";
import SwipeButton from "../button/SwipeButton/SwipeButton";
import "./PageTop.scss";

function PageTop() {
  return (
    <main className="pagetop">
      <section>
        <img className="pagetop-logo" alt="logo" src={logo}></img>
      </section>
      <section className="pagetop-section">
        <h1>STEP 1</h1>
        <h3 className="pagetop-text">Stay Clam. Don't Wait, act now</h3>
        <SwipeButton />
      </section>
    </main>
  );
}
export default PageTop;
