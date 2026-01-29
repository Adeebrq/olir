import './App.css'
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
// import Specialties from './Pages/LandingPage/Specialties';
// import HospitalHeroSection from './Components/heroSection';
import LandingPage from './Pages/LandingPage/LandingPage';
import ComingSoon from './Pages/ComingSoon';
import Footer from './Components/Footer';
import Header from './Components/Header';

function AppContent() {
  const location = useLocation();
  const isComingSoonPage = location.pathname === '/comingsoon';

  return (
    <div className="relative">
      {!isComingSoonPage && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
      {!isComingSoonPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
