import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bannerVideo from '../../assets/bg2.0.mp4';

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-46">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10 relative z-10">
            Our <span className="text-[#FFE666]">Departments</span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          
          {/* Book Appointment Button */}
          <button 
            onClick={() => navigate('/bookappointment')}
            className="flex items-center gap-3 bg-white hover:bg-gray-50 transition-all rounded-full px-6 py-3 shadow-lg group cursor-pointer"
          >
            <span className="text-teal-700 font-medium">Book Appointment</span>
            <div className="bg-teal-700 rounded-full p-1.5 group-hover:bg-teal-800 transition-colors">
              <Calendar className="w-4 h-4 text-white" />
            </div>
          </button>



          {/* Get Expert Opinion Button */}
          <button 
            onClick={() => navigate('/bookappointment')}
            className="flex items-center gap-3 bg-white hover:bg-gray-50 transition-all rounded-full px-6 py-3 shadow-lg group cursor-pointer"
          >
            <span className="text-teal-700 font-medium">Get Expert Opinion</span>
            <div className="bg-teal-700 rounded-full p-1.5 group-hover:bg-teal-800 transition-colors">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;
