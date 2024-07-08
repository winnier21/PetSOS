import NavBar from "../../client/src/components/NavBar/NavBar";
import "./App.scss";
import PageTop from "../../client/src/components/PageTop/PageTop";
import NavigationPage from './pages/HomePage/HomePage';
import HomePage from './pages/NavigationPage/NavigationPage';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <PageTop />
      <NavBar />
      <BrowserRouter>
      <Router>
      <Route path="/" component={HomePage} />
      <Route path="/navigation" component={NavigationPage} />
      </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
 