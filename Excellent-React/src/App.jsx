import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Specialties from './Pages/LandingPage/Specialties';
// import HospitalHeroSection from './Components/heroSection';
import LandingPage from './Pages/LandingPage/LandingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
