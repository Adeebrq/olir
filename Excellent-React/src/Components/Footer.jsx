import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-50 via-purple-50 to-orange-50 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            {/* Logo Placeholder - Replace with actual Image tag if available */}
            <div className="flex flex-col items-start">
               {/* Rough approximation of the logo graphic using text/shapes for demo */}
               <div className="mb-2">
                 <span className="text-3xl font-bold text-red-500 italic">X</span>
                 <span className="text-3xl font-bold text-green-600 italic">C</span>
                 <span className="text-3xl font-bold text-blue-700 italic">H</span>
               </div>
               <p className="text-sm font-bold text-blue-900 tracking-widest mb-1">
                 We Care... You Smile...
               </p>
               <h2 className="text-2xl font-bold text-cyan-500 tracking-tight">
                 Xcellent Care Hospital
               </h2>
            </div>
            
            <p className="text-gray-600 text-sm italic">
              "Compassionate Care. Advanced Healing."
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#002D3A] font-bold uppercase tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              {['Home', 'About Us', 'Medical Director', 'Departments & Services', 'Book Appointment', 'Patient Tools', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Resources */}
          <div>
            <h3 className="text-[#002D3A] font-bold uppercase tracking-wide mb-6">
              Patient Resources
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              {['Patient Portal Login', 'Insurance Info', 'Health Packages', 'Download Forms'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-[#002D3A] font-bold uppercase tracking-wide mb-6">
              Contact Us
            </h3>
            <div className="space-y-6 text-gray-600 text-sm">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-gray-700 shrink-0" />
                <span>+91 - 444000 0006.</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-gray-700 shrink-0" />
                <a href="mailto:xcellent_hospital@yahoo.com" className="hover:text-cyan-600">
                  xcellent_hospital@yahoo.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-700 shrink-0" />
                <span>No.12, Main Road, Velachery,<br />Chennai, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          
          <div className="w-full md:w-auto text-center md:text-left">
            © 2025 xcellentcare. All rights reserved.
          </div>
          
        <div className="w-full md:w-auto text-center">
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

          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
