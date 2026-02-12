import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import circleImg from '../assets/cricle.png';

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const carouselImages = [img1, img2, img3, img4, img5];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-[#2B6B9E] to-[#1E5A8E] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Mobile Layout: Stack vertically */}
        <div className="lg:hidden space-y-8">

          {/* Text Content - Mobile */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
              WHY CHOOSE US
            </h2>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              We are a leading multi-specialty hospital in Chennai, dedicated to delivering world-class healthcare through compassion, expertise, and innovation. With a relentless focus on patient safety and satisfaction, we go beyond expectations to set new standards in medical care.
            </p>
            <button
              onClick={() => navigate('/aboutus')}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-6 sm:px-8 py-3 rounded-full transition-colors shadow-lg text-sm sm:text-base"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Circle Image - Mobile (Moved before carousel) */}
          <div className="w-full flex items-center justify-center py-4">
            <div className="w-full max-w-[360px] sm:max-w-[400px]">
              <img
                src={circleImg}
                alt="24/7 at Velachery"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Carousel - Mobile */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl h-[160px] sm:h-[200px]">
              <div className="carousel-track">
                {/* First set */}
                {carouselImages.map((img, index) => (
                  <div
                    key={`mobile-set1-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
                {/* Duplicate set */}
                {carouselImages.map((img, index) => (
                  <div
                    key={`mobile-set2-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Desktop */}
          <div className="space-y-8">

            {/* Text Content - Desktop */}
            <div className="space-y-6">
              <h2 className="text-4xl xl:text-5xl font-bold text-white uppercase tracking-wide">
                WHY CHOOSE US
              </h2>
              <p className="text-white/90 leading-relaxed text-base xl:text-lg">
                We are a leading multi-specialty hospital in Chennai, dedicated to delivering world-class healthcare through compassion, expertise, and innovation. With a relentless focus on patient safety and satisfaction, we go beyond expectations to set new standards in medical care.
              </p>
              <button
                onClick={() => navigate('/aboutus')}
                className="cursor-pointer inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
              >
                LEARN MORE
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel - Desktop */}
            <div className="relative overflow-hidden rounded-2xl h-[220px]">
              <div className="carousel-track">
                {/* First set */}
                {carouselImages.map((img, index) => (
                  <div
                    key={`desktop-set1-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
                {/* Duplicate set */}
                {carouselImages.map((img, index) => (
                  <div
                    key={`desktop-set2-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Circle Image Desktop */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <img
                src={circleImg}
                alt="24/7 at Velachery"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        .carousel-item {
          flex-shrink: 0;
          width: 200px;
          height: 100%;
          margin-right: 16px;
        }

        @media (min-width: 640px) {
          .carousel-item {
            width: 240px;
          }
        }

        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll 12s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * 5 - 80px));
          }
        }

        @media (min-width: 640px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-240px * 5 - 80px));
            }
          }
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;