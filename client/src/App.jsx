import NavBar from "../../client/src/components/NavBar/NavBar";
import "./App.scss";
import HomePage from './pages/HomePage/HomePage';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        {/* <PageTop /> */}
        
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
