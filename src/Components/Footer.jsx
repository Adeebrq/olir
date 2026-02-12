import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import footerLogo from '../assets/footerLogo.svg';

const Footer = () => {
  const location = useLocation();
  const isReducedPaddingPage = location.pathname === '/bookappointment' || 
                                location.pathname === '/blogs' || 
                                location.pathname === '/events' ||
                                location.pathname === '/insurance' ||
                                location.pathname === '/doctors' ||
                                location.pathname.startsWith('/doctors/') ||
                                location.pathname === '/HealthPackages' ||
                                location.pathname.startsWith('/blog/');
  
  return (
    <footer className={`bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 pb-6 font-sans ${isReducedPaddingPage ? 'pt-12' : 'pt-80 max-md:pt-[43rem]'}`} style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Logo + 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: Logo & Branding */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img src={footerLogo} alt="Olir Super Speciality Hospital" className="h-21 w-auto mb-2" />
              <p className="text-sm text-gray-600 italic">
                "Where care meets patient experience"
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2 justify-center md:justify-start">
              <a href="https://www.instagram.com/olir.hospital/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/olir.hospital/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@olirhospital" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-teal-600 font-bold uppercase tracking-wide mb-4 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              {['About Us', 'Departments & Services', 'Doctors', 'Health Packages', 'Blogs', 'News/Media', 'Events'].map((item) => {
                // Define routes for each item
                const getRoute = (label) => {
                  switch(label) {
                    case 'About Us': return '/aboutus';
                    case 'Departments & Services': return '/department';
                    case 'Doctors': return '/doctors';
                    case 'Health Packages': return '/HealthPackages';
                    case 'Blogs': return '/blogs';
                    case 'News/Media': return '/news';
                    case 'Events': return '/events';
                    default: return '/comingsoon';
                  }
                };
                
                return (
                  <li key={item}>
                    <Link
                      to={getRoute(item)}
                      className="hover:text-teal-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Patient Resources */}
          <div>
            <h3 className="text-teal-600 font-bold uppercase tracking-wide mb-4 text-sm">
              Patient Resources
            </h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              <li>
                <Link to="/insurance" className="hover:text-teal-600 transition-colors">
                  Insurance Info
                </Link>
              </li>
              <li>
                <Link to="/HealthPackages" className="hover:text-teal-600 transition-colors">
                  Health Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-teal-600 font-bold uppercase tracking-wide mb-4 text-sm">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <span>044 4000 0006</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <span>+91 94080 80909</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <a href="mailto:contactus@olirhospital.com" className="hover:text-teal-600">
                  contactus@olirhospital.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <span>7/26, 8th Cross Street, Rajalakshmi Nagar, Off. 100 Feet Velachery Bye-Pass Road, Velachery, Chennai - 600 042.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-3 md:space-y-0">

          <div className="text-center md:text-left">
            © 2026/Olir. All rights reserved.
          </div>

          <div className="text-center">
            Designed and Developed by{" "}
            <a
              href="https://cruxcreations.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-700 hover:underline"
            >
              @Cruxcreations
            </a>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link to="/comingsoon" className="hover:underline hover:text-teal-600">Privacy Policy</Link>
            <Link to="/comingsoon" className="hover:underline hover:text-teal-600">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
