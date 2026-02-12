import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Package, FileText, CreditCard, ChevronRight, ChevronLeft } from 'lucide-react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/LandingPage/Specialties.css"; // Reuse existing styles or ensure slider-container is styled

const PatientTools = ({ onOpenModal }) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const updates = [
    "https://www.instagram.com/p/DTxdRX9kp16/embed",
    "https://www.instagram.com/p/DT2UwE5kp6y/embed",
    "https://www.instagram.com/p/DT2dwAGEgOL/embed"
  ];



  return (
    <div className="bg-[#F5F9FC] font-sans">
      {/* Patient Tools Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
              PATIENT TOOLS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Explore Tailored Health Packages And Preventive Check-Ups Designed For Your Needs.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              Access everything you need in one place book appointments, view your medical records securely,
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
              ctaText="Get an appointment"
              ctaColor="text-[#0099CC]"
            />
            <FeatureCard
              icon={<Package className="w-7 h-7 text-[#00CC99]" />}
              bgColor="bg-[#E6FFF9]"
              title="Health Packages"
              desc="Comprehensive health checkup plans for all ages"
              ctaText="View"
              ctaColor="text-[#00CC99]"
              onOpenModal={onOpenModal}
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
              title="Insurance"
              desc="View billing info and insurance coverage details"
              ctaText="View"
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
            <a
              href="https://www.instagram.com/olir.hospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-6 py-3 rounded-full transition-colors"
            >
              EXPLORE MORE
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((embedUrl, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src={embedUrl}
                  className="w-full h-[600px] border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                  title={`Instagram Post ${index + 1}`}
                ></iframe>
              </div>
            ))}
          </div>

          {/* Mobile Explore Button */}
          <a
            href="https://www.instagram.com/olir.hospital/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-8 w-full flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-6 py-3 rounded-full transition-colors"
          >
            EXPLORE MORE
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const FeatureCard = ({ icon, bgColor, title, desc, ctaText, ctaColor, onOpenModal }) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full">
    <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-5`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#002D3A] mb-3">{title}</h3>
    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
    {title === 'Book Appointment' ? (
      <Link
        to="/bookappointment"
        className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto cursor-pointer`}
      >
        {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    ) : title === 'Health Packages' ? (
      <Link
        to="/HealthPackages"
        className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto cursor-pointer`}
      >
        {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    ) : title === 'Insurance' ? (
      <Link
        to="/insurance"
        className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto cursor-pointer`}
      >
        {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    ) : title === 'Events & Camps' ? (
      <Link
        to="/events"
        className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto cursor-pointer`}
      >
        {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    ) : (
      <Link to="/comingsoon" className={`${ctaColor} text-sm font-semibold flex items-center hover:underline mt-auto`}>
        {ctaText} <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    )}
  </div>
);

export default PatientTools;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
};
