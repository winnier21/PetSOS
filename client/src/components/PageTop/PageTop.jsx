import logo from "../../assets/icons/logo.png";
import SwipeButton from "../button/SwipeButton/SwipeButton";
import vectorIcon from "../../assets/icons/vector.svg";
import "./PageTop.scss";

function PageTop() {
  return (
    <main className="pagetop">
      <section>
        <img className="pagetop-logo" alt="logo" src={logo}></img>
      </section>
      <section className="pagetop-section">
        <h1>STEP 1</h1>
        <h3>Stay Clam. Do not Wait, Act now</h3>
        <SwipeButton />
      </section>
      <article className="pagetop-container">
      <img className="pagetop-vector" alt="vector icon" src={vectorIcon}></img>
      <h3 className="pagetop-text">This app will automatically dial the next closest clinic if this call fails. </h3>
      </article>
    </main>
    
  );
}
export default PageTop;
