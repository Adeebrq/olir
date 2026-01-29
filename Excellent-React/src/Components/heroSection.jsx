import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ScrollingBanner from './heroCarousel';
import heroVideo from "../assets/HeroVideo2.mp4";
import BookAppointmentForm from './bookingForm';

const HospitalHeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Scrolling Banner - Top */}
      <div className="absolute top-0 left-0 right-0 z-40">
        <ScrollingBanner />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-full flex flex-col md:flex-row items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-white space-y-8 md:pr-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your Health,<br />
            Our Priority
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            Providing compassionate, expert care with modern facilities in the heart of Velachery, Chennai. NABH-accredited hospital committed to holistic patient care and medical excellence.
          </p>

          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Diet Plan Button */}
            {/* <button
              className="cursor-pointer bg-[#FFE666] text-gray-900 px-8 py-3 rounded-full flex items-center gap-3 font-bold hover:bg-[#ffe04d] transition-colors shadow-lg"
            >
              <span>Get Diet Plan</span>
              <ArrowRight size={20} />
            </button> */}

            {/* 50% Off Text */}
            <div className="relative mt-4">
              <p className="font-handwriting text-3xl md:text-4xl text-[#FFE666] rotate-[-5deg]">
                50% Off <span className="font-sans text-white text-lg block sm:inline ml-2 rotate-[5deg] translate-y-1">ON FULL BODY TEST</span>
              </p>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="scale-90 md:scale-100 origin-top-right">
            <BookAppointmentForm />
          </div>
        </div>

      </div>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919408080909?text=hi%2C%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full shadow-2xl cursor-pointer transition flex items-center gap-4 bg-[#25D366] hover:scale-105"
      >
        <div>
          <div className="font-bold text-white text-sm">WhatsApp</div>
          <div className="text-xs text-white/90">Chat with us</div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-handwriting {
            font-family: 'Caveat', cursive;
        }
      `}</style>
    </div>
  );
};

export default HospitalHeroSection;
