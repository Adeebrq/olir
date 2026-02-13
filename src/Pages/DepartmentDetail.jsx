import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { specialties } from '../utils/departmentData';
import DepartmentBlogSection from '../Components/Department/DepartmentBlogSection';
import FAQCallbackSection from './LandingPage/FAQCallbackSection';
import BookAppointment from '../Components/bookingModal';

const DepartmentDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const department = specialties.find(s => s.slug === slug);

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!department) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-600">Department Not Found</h2>
        </div>
    );
  }

  return (
    <div className="w-full">

      <div className="max-w-7xl mx-auto px-4 py-10  mt-18 md:py-16">
        
        {/* Back Button */}
        <button 
            onClick={() => navigate('/department')}
            className="flex items-center text-gray-600 hover:text-blue-600 font-medium mb-6 transition-colors group"
        >
            <div className="bg-gray-100 p-2 rounded-full mr-3 group-hover:bg-blue-50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
            </div>
            <span>Back to Departments</span>
        </button>

        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center text-sm md:text-base font-medium text-blue-500 mb-8 uppercase tracking-wide">
            <Link to="/department" className="cursor-pointer hover:underline">DEPARTMENTS</Link>
            <span className="mx-2">{'>'}</span>
            <span className="font-bold">{department.title}</span>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12">
            
            {/* Left Content Column */}
            <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D4C] mb-6">Overview</h1>
                
                {/* Overview Text */}
                <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line mb-10">
                    {department.overview}
                </div>

                {/* Treatment Disorders */}
                {department.treatments && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">
                            Conditions We Treat
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {department.treatments.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                                    <span className="mr-3 text-2xl leading-none text-blue-500">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Services & Procedures */}
                {department.services && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">Services & Procedures</h2>
                        <ul className="space-y-3">
                            {department.services.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                                    <span className="mr-3 text-2xl leading-none text-blue-500">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Advanced Technology & Facilities */}
                {department.facilities && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">Advanced Technology & Facilities</h2>
                        <ul className="space-y-3">
                            {department.facilities.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                                    <span className="mr-3 text-2xl leading-none text-blue-500">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                 {/* Diagnosis / When to Consult */}
                 {(department.consultation || department.diagnosis) && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">When to Consult a Specialist</h2>
                        <p className="text-gray-600 mb-4">
                           You should consider consulting our specialists if you experience:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(department.consultation || department.diagnosis).map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                                    <span className="mr-3 text-2xl leading-none text-blue-500">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Specialists */}
                {department.specialists && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">Our Specialists</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {department.specialists.map((doctor, index) => (
                                <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-[#0B3D4C]">{doctor.name}</h3>
                                    <p className="text-blue-600 text-sm mt-1">{doctor.qualification}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Image Card Column */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
                <div className="sticky top-32">
                    <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
                        {/* Header Bar */}
                        <div className="bg-[#0B3D4C] py-4 px-6">
                            <h3 className="text-xl font-bold text-white text-center">
                                {department.title}
                            </h3>
                        </div>
                        {/* Image area */}
                        <div className="h-64 sm:h-80 lg:h-96 w-full relative">
                             <img 
                                src={department.image} 
                                alt={department.title} 
                                className="w-full h-full object-cover"
                             />
                             {/* Optional overlay gradient/effects */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* 2. Reusing the Blog Section */}
      <DepartmentBlogSection />

      {/* FAQ & Booking Modal (Consistent with other pages) */}
      <div className="relative">
          <FAQCallbackSection faqs={department.faqs} />
          <BookAppointment />
      </div>

    </div>
  );
};

export default DepartmentDetail;
