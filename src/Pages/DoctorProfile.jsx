import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoctorBySlug, generateSlug } from '../utils/doctorUtils';
import { ArrowLeft, Calendar, Award, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
import BookAppointment from '../Components/bookingModal';

const DoctorProfile = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const doc = getDoctorBySlug(slug);
        if (doc) {
            setDoctor(doc);
        } else {
            // Handle not found - maybe redirect or show error
            // ensure we don't infinitely redirect if lists are loading
        }
    }, [slug]);

    if (!doctor) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Doctor Not Found</h2>
                    <button 
                        onClick={() => navigate('/doctors')}
                        className="text-teal-600 font-medium hover:underline"
                    >
                        Return to Doctors List
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb / Back */}
                <button 
                    onClick={() => navigate('/doctors')} 
                    className="flex items-center text-gray-500 hover:text-teal-600 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Doctors
                </button>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Image Section - styled like the cards but larger */}
                        <div className="md:w-1/3 lg:w-1/4 relative bg-gradient-to-br from-[#1B6B7A] to-[#0B4F5C] p-0 min-h-[300px] md:min-h-[auto]">
                             <img 
                                src={doctor.image} 
                                alt={doctor.name} 
                                className="w-full h-full object-cover object-top absolute inset-0 mix-blend-normal"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4C] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Info Section */}
                        <div className="md:w-2/3 lg:w-3/4 p-8 md:p-12">
                             <div className="flex flex-col h-full justify-center">
                                <div className="mb-2">
                                    <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                                        {doctor.department}
                                    </span>
                                </div>
                                
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3D4C] mb-4">
                                    {doctor.name}
                                </h1>
                                
                                <h2 className="text-lg md:text-xl text-gray-600 font-medium mb-6">
                                    {doctor.designation || doctor.qualification?.split(',')[0]}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm text-gray-700">
                                    
                                    {doctor.qualification && (
                                        <div className="flex items-start gap-3">
                                            <Award className="w-5 h-5 text-teal-600 mt-0.5" />
                                            <div>
                                                <span className="block font-semibold text-gray-900">Education</span>
                                                {doctor.qualification}
                                            </div>
                                        </div>
                                    )}

                                    {doctor.experience && (
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-teal-600 mt-0.5" />
                                            <div>
                                                <span className="block font-semibold text-gray-900">Experience</span>
                                                {doctor.experience}
                                            </div>
                                        </div>
                                    )}

                                    {doctor.specialties && (
                                        <div className="flex items-start gap-3 md:col-span-2">
                                            <Stethoscope className="w-5 h-5 text-teal-600 mt-0.5" />
                                            <div>
                                                <span className="block font-semibold text-gray-900">Specialties</span>
                                                {doctor.specialties}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {doctor.oneLiner && (
                                     <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 mb-8 py-1">
                                        "{doctor.oneLiner}"
                                    </blockquote>
                                )}

                             </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                {doctor.description && (
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
                        <h3 className="text-2xl font-bold text-[#0B3D4C] mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-teal-600" />
                            About {doctor.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {doctor.description}
                        </p>
                    </div>
                )}
                
                {/* Placeholder content if description is missing (for non-featured doctors) */}
                {!doctor.description && (
                     <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
                        <h3 className="text-2xl font-bold text-[#0B3D4C] mb-6">Biography</h3>
                         <p className="text-gray-600 leading-relaxed">
                            {doctor.name} matches our highest standards of excellence in healthcare. They are a valued member of the {doctor.department} team at Olir Super Speciality Hospital, dedicated to providing patient-centered care.
                         </p>
                     </div>
                )}

                {/* Booking Section */}
                <div className="mt-8">
                     <BookAppointment isInline={true} />
                </div>

            </div>
        </div>
    );
};

export default DoctorProfile;
