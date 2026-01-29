import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Package, FileText, CreditCard, ChevronRight, ChevronLeft } from 'lucide-react';

const PatientTools = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const updates = [
    {
      title: "OLIR Super Speciality Hospital & University of Leicester launch Digital Health Centre in India",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
    },
    {
      title: "OLIR Super Speciality Hospital Neuro Conclave 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      title: "OLIR Super Speciality Hospital Hospitals completes 500 robotic cardiac procedures",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % updates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + updates.length) % updates.length);
  };

  return (
    <div className="bg-[#F5F9FC] font-sans">
      {/* Patient Tools Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-[#0099CC] font-bold text-xs uppercase tracking-wider mb-3">
              PATIENT TOOLS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D3A] mb-4 leading-tight">
              Explore Tailored Health Packages And Preventive Check-Ups Designed For Your Needs.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              Access everything you need in one place—book appointments, view your medical records securely,
              manage insurance and billing, and find answers to common patient questions, all designed for your convenience and peace of mind.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Calendar className="w-7 h-7 text-[#0099CC]" />}
              bgColor="bg-[#E6F7FF]"
              title="Book Appointment"
              desc="Schedule your visit with our specialists online"
              ctaText="Get Appointment"
              ctaColor="text-[#0099CC]"
            />
            <FeatureCard
              icon={<Package className="w-7 h-7 text-[#00CC99]" />}
              bgColor="bg-[#E6FFF9]"
              title="Health Packages"
              desc="Comprehensive health checkup plans for all ages"
              ctaText="View"
              ctaColor="text-[#00CC99]"
            />
            <FeatureCard
              icon={<FileText className="w-7 h-7 text-[#9966CC]" />}
              bgColor="bg-[#F3E6FF]"
              title="Events & Camps"
              desc="New Update of upcoming events and camps"
              ctaText="View"
              ctaColor="text-[#9966CC]"
            />
            <FeatureCard
              icon={<CreditCard className="w-7 h-7 text-[#FF9933]" />}
              bgColor="bg-[#FFF3E6]"
              title="Insurance & Billing"
              desc="View billing info and insurance coverage details"
              ctaText="Get Started"
              ctaColor="text-[#FF9933]"
            />
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-[#003D5C] py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-2">
                LATEST UPDATES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What's New At OLIR Super Speciality Hospital
              </h2>
            </div>
            <button
              onClick={() => navigate('/comingsoon')}
              className="hidden md:flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-6 py-3 rounded-full transition-colors"
            >
              EXPLORE MORE
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              {updates.map((update, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full md:w-[calc(33.333%-16px)] transition-transform duration-500 ease-in-out`}
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  <div className="bg-[#004D6C] rounded-2xl overflow-hidden shadow-xl h-[400px] relative group">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/80 text-xs font-semibold mb-2">Latest Update</p>
                      <h3 className="text-white text-xl font-bold leading-tight">
                        {update.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Mobile Explore Button */}
          <button
            onClick={() => navigate('/comingsoon')}
            className="md:hidden mt-8 w-full flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-6 py-3 rounded-full transition-colors"
          >
            EXPLORE MORE
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const FeatureCard = ({ icon, bgColor, title, desc, ctaText, ctaColor }) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full">
    <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-5`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#002D3A] mb-3">{title}</h3>
    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
    <Link to="/comingsoon" className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto`}>
      {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
    </Link>
  </div>
);

export default PatientTools;
