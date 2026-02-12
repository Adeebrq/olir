import React from 'react';
import { Link } from 'react-router-dom';
import { specialties } from '../../utils/departmentData';

const CentresOfExcellence = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-3">
            Our Specialities
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Centres Of Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class healthcare at our specialized hubs of medical innovation. 
            Our state-of-the-art centres deliver unparalleled expertise in key specialities 
            and super specialities. Each centre stands as a beacon of cutting-edge care, 
            setting new benchmarks in clinical outcomes globally.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty) => (
            <Link
              to={`/department/${specialty.slug}`}
              key={specialty.id}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white group flex flex-col h-full cursor-pointer"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src={specialty.image} 
                  alt={specialty.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-amber-50/50 to-transparent opacity-60" />
              </div>

              {/* Title Area */}
              <div className="relative bg-gradient-to-b from-white to-amber-50 py-4 px-4 border-t border-gray-100 flex-grow flex items-center justify-center min-h-[4.5rem]">
                <h3 className="text-center text-blue-900 font-bold text-base leading-snug group-hover:text-blue-700 transition-colors">
                  {specialty.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentresOfExcellence;
