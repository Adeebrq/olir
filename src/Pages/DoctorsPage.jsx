import React, { useEffect, useState } from 'react';
import { getAllDoctors, generateSlug } from '../utils/doctorUtils';
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

    // Get unique departments for filter
    const departments = ['All', ...new Set(allDoctors.map(doc => doc.department))];

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
                    <div className="text-center text-gray-500 py-10">
                        <p>No specialists found for this department.</p>
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
