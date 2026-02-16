import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Landing Pages
import LandingPage from '../Pages/LandingPage/LandingPage';
import ComingSoon from '../Pages/ComingSoon';
import HealthPackages from '../Pages/HealthPackages';
import AboutUs from '../Pages/AboutUs';
import BookAppointmentPage from '../Pages/BookAppointmentPage';
import BlogsPage from '../Pages/BlogsPage';
import BlogDetailPage from '../Pages/BlogDetailPage';
import Department from '../Pages/Department';
import DepartmentDetail from '../Pages/DepartmentDetail';
import DoctorsPage from '../Pages/DoctorsPage';
import DoctorProfile from '../Pages/DoctorProfile';
import EventsPage from '../Pages/EventsPage';
import EventDetailPage from '../Pages/EventDetailPage';
import InsurancePage from '../Pages/InsurancePage';
import NewsPage from '../Pages/NewsPage';
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage';
import TermsOfServicePage from '../Pages/TermsOfServicePage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
          <Route path="/comingsoon" element={<PageWrapper><ComingSoon /></PageWrapper>} />
          <Route path="/aboutus" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/department" element={<PageWrapper><Department /></PageWrapper>} />
          <Route path="/department/:slug" element={<PageWrapper><DepartmentDetail /></PageWrapper>} />
          <Route path="/bookappointment" element={<PageWrapper><BookAppointmentPage /></PageWrapper>} />
          <Route path="/blogs" element={<PageWrapper><BlogsPage /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogDetailPage /></PageWrapper>} />
          <Route path="/doctors" element={<PageWrapper><DoctorsPage /></PageWrapper>} />
          <Route path="/doctors/:slug" element={<PageWrapper><DoctorProfile /></PageWrapper>} />
          <Route path="/HealthPackages" element={<PageWrapper><HealthPackages /></PageWrapper>} />
          <Route path="/news" element={<PageWrapper><NewsPage /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><EventsPage /></PageWrapper>} />
          <Route path="/events/:slug" element={<PageWrapper><EventDetailPage /></PageWrapper>} />
          <Route path="/insurance" element={<PageWrapper><InsurancePage /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/terms-of-service" element={<PageWrapper><TermsOfServicePage /></PageWrapper>} />
        </Routes>
    </AnimatePresence>
  );
}

// Wrapper component to apply animations consistently
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;
