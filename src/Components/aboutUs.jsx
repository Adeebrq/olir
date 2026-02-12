import React from 'react';
import { Bed, Stethoscope, Award, Heart } from 'lucide-react';

export default function HealthcareStats() {
  const stats = [
    {
      icon: Bed,
      title: "50+ Beds",
      description: "Including ICU, IMCU, private A/C and non-A/C, and general wards",
    },
    {
      icon: Stethoscope,
      title: "10+ Departments & Specialties",
      description: "Neurosurgery, Neurology, Orthopedics, Urology, Pediatrics, and more",
    },
    // {
    //   icon: Award,
    //   title: "NABH Accredited",
    //   description: "Nationally recognized for maintaining the highest standards of healthcare quality and patient safety.",
    // },
    {
      icon: Heart,
      title: "3293+ Positive Reviews",
      description: "Rated 4.4/5 stars by patients for our dedicated care and services",
    }
  ];

  // Duplicate stats for seamless infinite loop
  const duplicatedStats = [...stats, ...stats];

  return (
    <div className="bg-[#F0F8FF] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Compacted */}
        <div className="text-center mb-6">
          <p className="text-teal-600 max-md:mt-6 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Stats
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Showcasing our capacity, specialties, and achievements as a trusted healthcare
            leader in Chennai.
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {duplicatedStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#215d8d] rounded-2xl p-4 text-white shadow-lg min-w-[96px] md:min-w-[280px] flex items-center gap-4 flex-shrink-0"
              >
                <div className="bg-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#215d8d]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-0.5">{stat.title}</h3>
                  <p className="text-blue-100 text-xs leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8.33s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-scroll {
            animation: none;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}