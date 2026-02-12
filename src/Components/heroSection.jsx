import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import heroVideo from "../assets/bg2.0.mp4";
import BookAppointmentForm from './bookingForm';
import HeroModal from './HeroModal';

const HospitalHeroSection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

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
      <div className="relative z-30 min-h-screen flex flex-col lg:flex-row items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-0 pb-12 lg:py-0">

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-white space-y-4 lg:space-y-6 xl:space-y-8 lg:pr-6 xl:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
            Where care meets,<br />
            Patient Experience
          </h1>
          <p className="text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-200 max-w-lg">
            Providing compassionate, expert care with modern facilities in the heart of Velachery, Chennai. We are committed to holistic patient care and medical excellence.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-4 xl:gap-6 w-full">
            {/* Get Appointment Button - Mobile Only */}
            <button
              onClick={() => navigate('/bookappointment')}
              className="lg:hidden w-full max-w-xs bg-[#FFE666] text-gray-900 px-8 py-3 rounded-full flex items-center justify-center gap-3 font-bold hover:bg-[#ffe04d] transition-transform hover:scale-105 shadow-xl animate-bounce-subtle mt-4"
            >
              <span>Get an appointment</span>
              <ArrowRight size={20} />
            </button>
            {/* Diet Plan Button */}
            {/* <button
              className="cursor-pointer bg-[#FFE666] text-gray-900 px-8 py-3 rounded-full flex items-center gap-3 font-bold hover:bg-[#ffe04d] transition-colors shadow-lg"
            >
              <span>Get Diet Plan</span>
              <ArrowRight size={20} />
            </button> */}

            {/* 50% Off Text - Clickable Trigger */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative mt-2 lg:mt-2 xl:mt-4 cursor-pointer group hover:scale-105 transition-transform duration-300"
            >
              <p className="font-handwriting text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#FFE666] rotate-[-5deg] group-hover:text-[#fff066] transition-colors">
                <span className="relative -top-2">50% Off</span> <span className="font-sans text-white text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg inline-block ml-0 sm:ml-2 rotate-[5deg] group-hover:text-blue-100 mt-1 sm:mt-0">ON FULL BODY TEST</span>
              </p>

              {/* Tooltip hint */}
              <div className="absolute -right-2 sm:-right-6 -top-4 sm:-top-6 bg-white text-blue-900 text-xs font-bold px-2 py-1 rounded-lg transform rotate-12 shadow-md animate-bounce">
                Click to Claim!
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center mt-8 lg:mt-0">
          <div className="w-full lg:w-auto lg:scale-75 xl:scale-85 2xl:scale-100 origin-center lg:pt-8 xl:pt-0">
            <BookAppointmentForm />
          </div>
        </div>

      </div>

      {/* Hero Modal (50% Off) */}
      <HeroModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageData={{
            title: "50% Off – Full Body Health Check",
            price: "1199",
            originalPrice: "2399",
            discount: "50% Off",
            tag: "Premium Health Package",
            description: "Comprehensive preventive screening to ensure your well-being.",
            features: [
                 "Complete Blood Count (CBC)", "Blood Sugar (Fasting & PP)", "Lipid Profile", 
                 "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Thyroid Profile (T3, T4, TSH)", 
                 "ECG & Urine Routine"
            ],
            testCount: "60+"
        }}
      />

      {/* Mobile Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-transparent rounded-2xl animate-scaleUp">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute -top-12 right-0 lg:-right-12 text-white p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all"
            >
              <X size={24} />
            </button>
            <BookAppointmentForm />
          </div>
        </div>
      )}

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919408080909?text=hi%2C%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl cursor-pointer transition flex items-center gap-3 sm:gap-4 bg-[#25D366] hover:scale-105"
      >
        <div>
          <div className="font-bold text-white text-xs sm:text-sm">WhatsApp</div>
          <div className="text-xs text-white/90 hidden sm:block">Chat with us</div>
        </div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-handwriting {
            font-family: 'Caveat', cursive;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }
        .animate-bounce-subtle { animation: bounce-subtle 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default HospitalHeroSection;