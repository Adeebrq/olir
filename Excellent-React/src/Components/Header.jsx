import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react';

const leftNavItems = [
  {
    name: 'About Us',
    dropdown: ['Our Story', 'Mission & Vision', 'Leadership Team', 'Accreditations'],
  },
  {
    name: 'Departments',
    dropdown: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Emergency Care'],
  },
];

const rightNavItems = [
  {
    name: 'Patient Services',
    dropdown: ['Book Appointment', 'Health Checkup', 'Insurance', 'International Patients'],
  },
  {
    name: 'News/Media',
    dropdown: ['Latest News', 'Press Releases', 'Events', 'Blog'],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="relative pointer-events-auto">
        {/* Top Contact Banner */}
        <div className="bg-white/90 backdrop-blur-md px-2 lg:px-16 py-3 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-md border-b border-white/20">
          <div className="flex items-center gap-6 flex-wrap text-gray-500">
            <div className="cursor-pointer flex items-center gap-2 text-sm">
              <Mail size={18} />
              <span>Xcellent_hospital@Yahoo.Com</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-200 transition text-gray-500"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-200 transition text-gray-500"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-200 transition text-gray-500"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <a
              href="tel:+914440000006"
              className="flex items-center gap-2 font-medium hover:text-gray-700 transition"
            >
              <Phone size={18} />
              <span>+91-44-4000 0006</span>
            </a>
            <button
              className="cursor-pointer px-6 py-2 rounded-lg font-semibold transition text-gray-500 bg-[#FFE666]"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Glass Navigation Bar */}
        <nav className="absolute top-20 left-0 right-0 flex justify-center px-4 py-4 pointer-events-none">
          <div className="pointer-events-auto backdrop-blur-xl bg-white/20 border border-white/40 px-8 py-4 rounded-full flex gap-8 items-center shadow-2xl text-gray-500">
            {leftNavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className=" cursor-pointer flex items-center gap-2 text-gray-500 text-sm font-medium hover:text-gray-700 focus:outline-none transition-colors drop-shadow-md"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === item.name && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-4 backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl shadow-2xl overflow-hidden z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-5 py-3 text-gray-500 font-medium hover:bg-white/40 hover:text-gray-700 transition-all drop-shadow-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="text-sm font-bold whitespace-nowrap text-gray-500 drop-shadow-md">
              Xcellent Care Hospital
            </div>

            {rightNavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className=" cursor-pointer flex items-center gap-2 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors focus:outline-none drop-shadow-md"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === item.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-4 backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl shadow-2xl overflow-hidden z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-5 py-3 text-gray-500 font-medium hover:bg-white/40 hover:text-gray-700 transition-all drop-shadow-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;