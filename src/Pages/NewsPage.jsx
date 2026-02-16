import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const NewsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updates = [
    "https://www.instagram.com/p/DTxdRX9kp16/embed",
    "https://www.instagram.com/p/DT2UwE5kp6y/embed",
    "https://www.instagram.com/p/DT2dwAGEgOL/embed"
  ];

  const reelLinks = [
    "https://www.instagram.com/reel/DSfHjC0gm2Y/embed",
    "https://www.instagram.com/reel/DSg9j1-gTji/embed",
    "https://www.instagram.com/reel/DT24HZegZIc/embed",
  ];

  return (
    <div className="font-sans pt-20">
      
      {/* Latest Updates Section (from PatientTools) */}
      <div className=" py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-black/80 font-semibold text-xs uppercase tracking-wider mb-2">
                LATEST UPDATES
              </p>
              <h2 className="text-black/90 text-3xl md:text-4xl font-bold ">
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

      {/* Doctor Videos Section (from Testimonials) */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
            <div className="flex flex-col items-start mb-8">
                <h2 className="text-4xl font-bold text-[#002D3A] mb-4 tracking-tight">
                    DOCTOR VIDEOS
                </h2>
                <p className="text-gray-600 max-w-2xl">
                    Expert insights and guidance from our experienced medical professionals
                </p>
            </div>
        </div>

        <div className="w- py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8">
                {reelLinks.map((link, index) => (
                    <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl shadow-xl bg-black"
                    style={{
                        width: '100%',
                        maxWidth: '380px',
                        aspectRatio: '9/16',
                        minHeight: '600px',
                        maxHeight: '680px',
                    }}
                    >
                    <iframe
                        src={link}
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        loading="lazy"
                        title={`Instagram Reel ${index + 1}`}
                    ></iframe>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default NewsPage;
