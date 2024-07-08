import NavBar from "../../client/src/components/NavBar/NavBar";
import "./App.scss";
import SwipeButton from "../../client/src/components/button/SwipeButton/SwipeButton";
import PageTop from "../../client/src/components/PageTop/PageTop";

function App() {
  return (
    <>
      <PageTop />
      <SwipeButton />
      <NavBar />
    </>
  );
}

export default App;
 