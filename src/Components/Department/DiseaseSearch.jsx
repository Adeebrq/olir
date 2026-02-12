import React from 'react';
import { Search } from 'lucide-react';

const alphabets = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const DiseaseSearch = () => {
  return (
    <div className="flex justify-center px-4 w-full">
      {/* Main Card Container */}
      <div className="bg-white max-w-7xl w-full rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Alphabet Filter */}
          <div className="flex-1 bg-gray-50/50 rounded-2xl p-8">
            <h3 className="text-[#0B3D4C] text-xl font-bold mb-8">
              Find Diseases & Conditions By Alphabet
            </h3>
            
            <div className="grid grid-cols-7 sm:grid-cols-9 gap-3">
              {alphabets.map((letter) => (
                <button
                  key={letter}
                  className="w-10 h-10 rounded-full border border-blue-200 text-[#0B3D4C] text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center justify-center bg-white"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Search */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[#0B3D4C] text-xl font-bold mb-6">
              Search Diseases and Conditions
            </h3>
            
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-14 pl-6 pr-14 rounded-full border border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 bg-white placeholder-gray-500"
              />
              <button className="absolute right-2 top-2 h-10 w-10 bg-[#1E6B8C] hover:bg-[#16526D] rounded-full flex items-center justify-center transition-colors">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Quickly find the information you need. Search our database to explore detailed information on various diseases and conditions, including symptoms, causes, and treatment options.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiseaseSearch;
