import React from 'react';
import { Sparkles } from 'lucide-react';

const bannerItems = [
  '24/7 Emergency & Critical Care',
  'Multi-Speciality Expertise',
  'Modern Conference Areas',
  'Compassionate Staff',
  'Cutting Edge Technology',
  '24/7 Emergency & Critical Care',
  'Multi-Speciality Expertise',
  'Modern Conference Areas',
  'Compassionate Staff',
  'Cutting Edge Technology',

];

const ScrollingBanner = () => {
  return (
    <section className="w-full h-5 sm:h-16 relative flex items-center overflow-hidden py-8 bg-[#215d8d] shadow-inner-custom">
      {/* Scrolling content */}
      <div className="relative z-10 flex items-center animate-scroll font-gloock whitespace-nowrap">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-white text-2xl mx-4">{item}</span>
            <Sparkles className="w-6 h-6 mx-4 text-white" />
          </React.Fragment>
        ))}
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
          animation: scroll 20s linear infinite;
        }

        .shadow-inner-custom {
          box-shadow:
            inset 0 6px 8px rgba(0, 0, 0, 0.25),
            inset 0 -6px 8px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
