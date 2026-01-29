import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHeader from '../assets/logoHeader.svg';

const navItems = [
  'About Us',
  'Departments',
  'Patient Services',
  'News/Media',
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed ${isScrolled ? 'top-0' : 'top-14'} left-0 right-0 z-50 pointer-events-none transition-all duration-300`}>
      <nav className="absolute top-6 left-0 right-0 flex justify-center px-4 pointer-events-none">
        {/* MAIN HEADER BAR */}
        <div className="w-[92%] max-w-7xl bg-white rounded-2xl px-4 py-2 flex items-center shadow-md pointer-events-auto">

          {/* LOGO - Left */}
          <div className="flex items-center flex-1">
            <img
              src={logoHeader}
              alt="Olir Super Speciality Hospital"
              className="h-8 w-auto"
            />
          </div>

          {/* NAV LINKS - Center */}
          <div className="flex items-center gap-8 justify-center flex-nowrap">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigate('/comingsoon')}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition whitespace-nowrap cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA BUTTON - Right (with placeholder space when hidden) */}
          <div className="flex items-center justify-end flex-1">
            {isScrolled && (
              <button
                onClick={() => {
                  document.getElementById('book-appointment')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                className="cursor-pointer bg-[#FFE666] text-gray-900 font-semibold px-6 py-2.5 rounded-2xl hover:bg-[#ffdf4d] transition-all duration-300 shadow-sm opacity-100"
                style={{ animation: 'fadeIn 0.3s ease-in' }}
              >
                Book Appointment
              </button>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
