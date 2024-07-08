import logo from "../../assets/icons/logo.png";
import "./PageTop.scss";

function PageTop() {
  return (
    <main>
      <section>
        <img className="pagetop__logo" alt="logo" src={logo}></img>
      </section>
    </main>
  );
}
export default PageTop;
