import NavBar from "../../client/src/components/NavBar/NavBar";
import "./App.scss";
import PageTop from "../../client/src/components/PageTop/PageTop";
import NavigationPage from './pages/HomePage/HomePage';
import HomePage from './pages/NavigationPage/NavigationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <PageTop />
        <NavBar />
        <Routes>
        <Route path="/navigation" element={<HomePage />} />
        <Route path="/" element={<NavigationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
