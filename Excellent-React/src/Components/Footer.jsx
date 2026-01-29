import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import newLogo from '../assets/newLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 pt-80 pb-6 font-sans" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Logo + 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: Logo & Branding */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <img src={newLogo} alt="Olir Super Speciality Hospital" className="h-16 w-auto mb-2" />
              <p className="text-sm text-gray-600 italic">
                "Compassionate Care, Advanced Healing."
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://www.instagram.com/olir.hospital/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
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
              {['Home', 'About Us', 'Medical Director', 'Departments & Services', 'Book Appointment', 'Patient Tools', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : '/comingsoon'}
                    className="hover:text-teal-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Resources */}
          <div>
            <h3 className="text-teal-600 font-bold uppercase tracking-wide mb-4 text-sm">
              Patient Resources
            </h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              {['Insurance Info', 'Health Packages', 'Download Forms'].map((item) => (
                <li key={item}>
                  <Link to="/comingsoon" className="hover:text-teal-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
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
                <span>044 - 4000 0006.</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <a href="mailto:Olir_hospital@yahoo.com" className="hover:text-teal-600">
                  Olir_hospital@yahoo.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-teal-600 shrink-0 mt-0.5" />
                <span>No.12, Main Road, Velachery,<br />Chennai, India</span>
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
            <Link to="/comingsoon" className="hover:underline hover:text-teal-600">Cookies Settings</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
