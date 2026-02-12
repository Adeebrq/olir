import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import blogData from '../../assets/blogs.json';
import { blogImages } from '../../utils/blogImages'; // Assuming this utility exists based on BlogsPage.jsx usage

const DepartmentBlogSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // We want to show 3 cards at a time on large screens
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, blogData.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-[#1E6B8C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-blue-200 text-sm font-semibold tracking-wider uppercase mb-2 block">
              LATEST UPDATES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What’s New At OLIR Super Speciality Hospital
            </h2>
          </div>
          
          <button 
            onClick={() => navigate('/blogs')}
            className="hidden md:flex items-center gap-2 bg-[#FFE666] hover:bg-yellow-400 text-[#0B3D4C] px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
          >
            EXPLORE MORE
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons (Absolute positioned for desktop) */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all ${
              currentIndex === 0 
                ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/20 hover:bg-white text-white hover:text-[#0B3D4C]'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all ${
              currentIndex >= maxIndex
                ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/20 hover:bg-white text-white hover:text-[#0B3D4C]'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Track */}
          <div className="overflow-x-auto md:overflow-hidden pb-4 md:pb-0 scrollbar-hide">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {blogData.map((blog, index) => {
                 // Fallback logic for image if utils import fails or image missing
                 const imageSrc = blogImages && blogImages[blog.slug] 
                    ? blogImages[blog.slug] 
                    : null;

                 return (
                  <Link 
                    to={`/blog/${blog.slug}`}
                    key={index}
                    className="min-w-[300px] md:min-w-[calc(33.333%-16px)] flex-shrink-0 relative group rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5]"
                  >
                    {/* Background Image */}
                    {imageSrc ? (
                      <img 
                        src={imageSrc} 
                        alt={blog.article.h1} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-800 w-full h-full" />
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-white/80 text-xs font-medium uppercase mb-3">
                        Latest Update
                      </span>
                      <h3 className="text-xl font-bold text-white leading-snug line-clamp-3 mb-4 group-hover:text-[#FFE666] transition-colors">
                        {blog.article.h1}
                      </h3>
                      
                      {/* Arrow Icon that appears/animates on hover */}
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#FFE666] group-hover:text-[#0B3D4C] transition-all duration-300">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mobile "Explore More" button */}
        <div className="mt-8 flex md:hidden justify-center">
          <button 
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 bg-[#FFE666] hover:bg-yellow-400 text-[#0B3D4C] px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
          >
            EXPLORE MORE
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default DepartmentBlogSection;
