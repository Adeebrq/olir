import React, { useEffect, useState } from 'react';
import { getAllDoctors, generateSlug } from '../utils/doctorUtils';
import { specialties } from '../utils/departmentData';
import DoctorCard from '../Components/DoctorCard';
import BookAppointment from '../Components/bookingModal';
import { useNavigate } from 'react-router-dom';

const DoctorsPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allDoctors = getAllDoctors();

    // Get unique departments for filter (from all available specialties)
    const departments = ['All', ...specialties.map(dept => dept.title)];

    // Filter doctors based on selection
    const filteredDoctors = selectedDepartment === 'All'
        ? allDoctors
        : allDoctors.filter(doc => doc.department === selectedDepartment);

    const handleCardClick = (doctor) => {
        // Use the key property if available (for featured docs) or generate a slug
        const slug = doctor.key || generateSlug(doctor.name);
        navigate(`/doctors/${slug}`);
    };

    return (
        <div className="w-full bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16 pt-32">
                <div className="text-center mb-12">
                     <span className="text-[#1976D2] text-sm font-semibold tracking-wider uppercase">Find A Doctor</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B3D4C] mt-2 mb-4">
                        Connect With Trusted Healthcare Experts For Personalized Care
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-8">
                        Experience world-class healthcare at Olir specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties. Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {departments.map((dept, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all duration-300 ${
                                    selectedDepartment === dept
                                        ? 'bg-[#1B6B7A] text-white border-[#1B6B7A]'
                                        : 'bg-white text-gray-500 border-gray-300 hover:border-[#1B6B7A] hover:text-[#1B6B7A]'
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="flex flex-wrap justify-center items-start gap-8">
                    {filteredDoctors.map((doctor, index) => (
                        <div key={index} onClick={() => handleCardClick(doctor)} className="cursor-pointer">
                            <DoctorCard doctor={doctor} />
                        </div>
                    ))}
                </div>

                {/* If no specialists found */}
                {filteredDoctors.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
                        <div className="text-[#1B6B7A] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#0B3D4C] mb-2">Specialists Coming Soon</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">
                            We are currently updating our list of specialists for this department. 
                            Please contact us directly to book an appointment with our expert team.
                        </p>
                        <a 
                            href="tel:04440000006"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full !text-white bg-[#1B6B7A] hover:bg-[#155A66] transition-colors duration-300"
                        >
                            Call Us: 044 4000 0006
                        </a>
                    </div>
                )}
            
                <div className="mt-0">
                    <BookAppointment isInline={true} />
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
