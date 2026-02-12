import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoHeader from '../assets/logoHeader.svg';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const navItems = [
  { label: 'About Us', path: '/aboutus' },
  { label: 'Departments', path: '/department' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'News/Media', path: '/comingsoon' },
  { label: 'Events', path: '/events' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on the homepage, about us page, or book appointment page
  const isHomePage = location.pathname === '/';
  const isAboutUsPage = location.pathname === '/aboutus';
  const isBookAppointmentPage = location.pathname === '/bookappointment';

  useEffect(() => {
    const handleScroll = () => {
      if (isAboutUsPage) {
        // On About Us page, check when Our Story section reaches the top
        const ourStorySection = document.getElementById('our-story-section');
        if (ourStorySection) {
          const rect = ourStorySection.getBoundingClientRect();
          setIsScrolled(rect.top <= 0);
        }
      } else if (isBookAppointmentPage) {
        // On Book Appointment page, reset header after scrolling past the banner (~56px)
        setIsScrolled(window.scrollY > 50);
      } else if (location.pathname === '/department') {
        // On Department page, reset header after scrolling past the banner (500px)
        setIsScrolled(window.scrollY > 500);
      } else {
        // Default behavior: check if user has scrolled past the hero section (approximately 100vh)
        const heroHeight = window.innerHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutUsPage, isBookAppointmentPage]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  // Show button if scrolled on homepage, or always on other pages
  const showBookButton = isHomePage ? isScrolled : true;

  return (
    <header className={`fixed ${isScrolled ? 'top-0' : 'top-14'} left-0 right-0 z-50 pointer-events-none transition-all duration-300`}>
      <nav className="absolute top-6 left-0 right-0 flex justify-center px-4 pointer-events-none">
        {/* MAIN HEADER BAR */}
        <div className="w-[92%] max-w-7xl bg-white rounded-2xl px-4 py-2 flex items-center shadow-md pointer-events-auto relative">

          {/* LOGO - Left */}
          <div className="flex items-center">
            <img
              src={logoHeader}
              alt="Olir Super Speciality Hospital"
              className="h-12 md:h-8 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* DESKTOP NAV LINKS - Center */}
          <div className="hidden md:flex flex-1 items-center justify-between px-8 xl:px-12 flex-nowrap">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON - Right */}
          <div className="hidden md:flex items-center justify-end gap-4">
              <a href="tel:9408080909" className="flex text-sm items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="bg-blue-50 p-2 rounded-full">
                      <Phone size={12} className="text-blue-600" />
                  </div>
                  <span className="font-bold text-lg">9408080909</span>
              </a>

             {showBookButton && (
              <button
                onClick={() => navigate('/bookappointment')}
                className="cursor-pointer bg-[#FFE666] text-gray-900 font-semibold px-6 py-2.5 rounded-2xl hover:bg-[#ffdf4d] transition-all duration-300 shadow-sm opacity-100"
                style={{ animation: 'fadeIn 0.3s ease-in' }}
              >
                Book Appointment
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON - Right */}
          <div className="flex md:hidden items-center justify-end flex-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-4 md:hidden animate-slide-down">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="text-left text-sm font-medium text-gray-600 hover:text-gray-900 transition py-2 border-b border-gray-100 last:border-none"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/bookappointment');
                }}
                className="w-full bg-[#FFE666] text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-[#ffdf4d] transition-all text-center mt-2"
              >
                Book Appointment
              </button>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Header;