import './App.css'
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
// import Specialties from './Pages/LandingPage/Specialties';
// import HospitalHeroSection from './Components/heroSection';
import LandingPage from './Pages/LandingPage/LandingPage';
import ComingSoon from './Pages/ComingSoon';
import HealthPackages from './Pages/HealthPackages';
import AboutUs from './Pages/AboutUs';
import BookAppointmentPage from './Pages/BookAppointmentPage';
import BlogsPage from './Pages/BlogsPage';
import BlogDetailPage from './Pages/BlogDetailPage';
import Department from './Pages/Department';
import DepartmentDetail from './Pages/DepartmentDetail';
import DoctorsPage from './Pages/DoctorsPage';
import DoctorProfile from './Pages/DoctorProfile';
import EventsPage from './Pages/EventsPage';
import InsurancePage from './Pages/InsurancePage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ScrollingBanner from './Components/heroCarousel';
import ScrollToTop from './Components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isComingSoonPage = location.pathname === '/comingsoon';

  return (
    <div className="relative">
      <ScrollToTop />
      {!isComingSoonPage && <ScrollingBanner />}
      {!isComingSoonPage && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/department" element={<Department />} />
        <Route path="/department/:slug" element={<DepartmentDetail />} />
        <Route path="/bookappointment" element={<BookAppointmentPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:slug" element={<DoctorProfile />} />
        <Route path="/HealthPackages" element={<HealthPackages />} />
        <Route path="/news" element={<ComingSoon />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
      </Routes>
      {!isComingSoonPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#363636',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
