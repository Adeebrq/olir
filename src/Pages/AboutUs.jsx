import React from 'react';
import aboutusBanner from '../assets/aboutuss.png';
import circleImg from '../assets/cricle.png';
import AboutLeadershipTeam from '../Components/AboutLeadershipTeam';
import FAQCallbackSection from './LandingPage/FAQCallbackSection';
import BookAppointment from '../Components/bookingModal';

const AboutUs = () => {
    return (
        <div className="w-full bg-white">

            {/* Our Story & Vision/Mission Section */}
            <section id="our-story-section" className="mt-12 py-12 md:py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Our Story */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C] mb-4">Our Story</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            Established as Xcellent Care in 2014, we began with a simple purpose: to provide care that treats people, not just conditions.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            Now, we are Olir Super Speciality Hospital, supported by modern infrastructure, skilled professionals and state-of-the-art healthcare technology.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            With about 15+ specialities, advanced systems and surgical equipment, high-end ICUs, precise results providing Labs, detailed Ultrasounds and a trusted Pharmacy.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Olir Super Speciality Hospital is built for the future that is rooted in Velachery, Chennai at global standards.
                        </p>
                    </div>

                    {/* Vision & Mission Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Our Vision */}
                        <div className="flex flex-col items-start text-left">
                            <div className="w-14 h-14 rounded-full bg-[#FFF5F5] flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#E53935" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="6" stroke="#E53935" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="2" fill="#E53935"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B3D4C] mb-2">Our Vision</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Where Care meets Patient Experience.
                                <br />
                                Olir aims to create a holistic healthcare environment.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="flex flex-col items-start text-left">
                            <div className="w-14 h-14 rounded-full bg-[#F0F7FF] flex items-center justify-center mb-4">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C12 21 4 14.5 4 9C4 5.5 7 3 12 3C17 3 20 5.5 20 9C20 14.5 12 21 12 21Z" stroke="#1976D2" strokeWidth="2" fill="none"/>
                                    <path d="M12 6V12M12 12L9 10M12 12L15 10" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B3D4C] mb-2">Our Mission</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To provide accessible, high-quality medical services that support physical and emotional recovery, prioritizing long term wellbeing through ethical practice and continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <AboutLeadershipTeam />

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="flex items-center justify-center">
                            <img 
                                src={circleImg} 
                                alt="Olir Hospital" 
                                className="w-full max-w-md h-auto object-contain rounded-2xl"
                            />
                        </div>

                        <div className="space-y-6 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">WHY CHOOSE US</h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                At Olir Super Speciality Hospital, patient wellbeing remains the foundation of every service we provide.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Each patient is treated as an individual, with care plans designed around specific medical needs and personal comfort. Our multidisciplinary teams work closely to ensure timely treatment, clear communication, and a supportive healing environment. From consultation to recovery, every step is guided by professionalism, empathy, and attention to detail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ + BookAppointment Wrapper for absolute positioning */}
            <div className="relative">
                <FAQCallbackSection />
                <BookAppointment />
            </div>
        </div>
    );
};

export default AboutUs;

