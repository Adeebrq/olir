import './App.css'
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AnimatedRoutes from './Components/AnimatedRoutes';
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
      <AnimatedRoutes />
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
