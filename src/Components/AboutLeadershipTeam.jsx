import React from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredDoctors } from '../utils/doctorUtils';

const AboutLeadershipTeam = () => {
    const navigate = useNavigate();

    const handleDoctorClick = (route) => {
        navigate(route);
    };

    return (
        <section className="py-12 mt-12 md:py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-[#1976D2] text-sm font-semibold tracking-wider uppercase">Leadership Team</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B3D4C] mt-2 mb-4">
                    Guided By Excellence, United In Care
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-12">
                    Our leadership team brings together experienced clinicians, compassionate caregivers, and dedicated professionals. Representing fields from surgery and medicine to administration and nursing, the team ensures seamless care and supports our mission to nurture every patient's wellbeing.
                </p>

                {/* Doctor Cards */}
                <div className="flex flex-wrap justify-center items-start gap-6 lg:gap-8">
                    {featuredDoctors.map((doctor, index) => (
                        <div 
                            key={index} 
                            className="doctor-card-wrapper"
                            onClick={() => handleDoctorClick(doctor.route)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleDoctorClick(doctor.route);
                                }
                            }}
                        >
                            <div className="doctor-card w-[280px] h-[380px]">
                                {/* Blue vertical strip */}
                                <div className="blue-strip">
                                    {/* Vertical department text */}
                                    <div className="department-text">
                                        {doctor.department}
                                    </div>
                                </div>

                                {/* Doctor image */}
                                <div className="image-container">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className={`doctor-image ${
                                            doctor.name === "Dr. F. Fakhruddin" ? "scale-fix" : 
                                            doctor.name === "Dr. Nandini Govindarajan" ? "scale-up-nandini" : ""
                                        }`}
                                    />
                                </div>

                                {/* Bottom gradient overlay with info */}
                                <div className="bottom-overlay">
                                    <div className="doctor-info">
                                        <h4 className="doctor-name">{doctor.name}</h4>
                                        {doctor.qualification && (
                                            <div className="credentials-compact mb-3 font-medium">
                                                {doctor.qualification.split(',').map(cred => cred.trim()).join(' • ')}
                                            </div>
                                        )}
                                        <p className="doctor-specialties text-xs opacity-90 leading-tight line-clamp-3">{doctor.oneLiner}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Extended credentials - shown on hover for doctors who have them */}
                            {/*
                            <div className="extended-credentials mt-6 text-center max-w-[280px]">
                                <div className="text-sm text-gray-600 space-y-2">
                                    <div className="mb-2">
                                        {doctor.qualification.split(',').map((cred, i) => (
                                            <span key={i} className="block text-[#0B3D4C] font-semibold">
                                                {cred.trim()}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <p className="text-xs leading-relaxed text-gray-500">
                                        {doctor.description}
                                    </p>
                                    
                                    {doctor.designation && (
                                        <p className="mt-3 pt-2 border-t border-gray-200">
                                            <span className="text-[#1976D2] font-medium block">{doctor.designation}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            */}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .doctor-card-wrapper {
                    position: relative;
                    cursor: pointer;
                }

                .doctor-card {
                    position: relative;
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .doctor-card:hover {
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    transform: translateY(-4px);
                }

                /* Blue vertical strip */
                .blue-strip {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 0;
                    background: linear-gradient(135deg, #1B6B7A 0%, #0B4F5C 100%);
                    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1;
                    overflow: hidden;
                }

                .doctor-card:hover .blue-strip {
                    width: 28%;
                }

                /* Vertical department text */
                .department-text {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 1.4rem;
                    font-weight: 800;
                    letter-spacing: 0.2rem;
                    text-transform: uppercase;
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.4s ease 0.2s;
                    user-select: none;
                }

               .doctor-card:hover .department-text {
                    opacity: 1;
                }

                /* Image container */
                .image-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    overflow: hidden;
                }

                .doctor-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .doctor-card:hover .doctor-image {
                    transform: scale(1.08) translateX(15%);
                }

                /* Bottom overlay */
                .bottom-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(11, 79, 92, 0.95) 0%, rgba(11, 79, 92, 0.7) 50%, transparent 100%);
                    padding: 24px 20px 20px;
                    z-index: 3;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .doctor-card:hover .bottom-overlay {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Doctor info */
                .doctor-info {
                    text-align: left;
                }

                .doctor-name {
                    color: white;
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 6px;
                    line-height: 1.3;
                }

                .doctor-specialties {
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                .credentials-compact {
                    margin-top: 8px;
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.5;
                }

                .credential-item {
                    margin-bottom: 2px;
                }

                /* Extended credentials - hidden by default, show on hover */
                .extended-credentials {
                    opacity: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                }

                .doctor-card-wrapper:hover .extended-credentials {
                    opacity: 1;
                    max-height: 400px;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .doctor-card {
                        width: 260px !important;
                        height: 360px !important;
                        /* Force hover shadow on mobile */
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    }

                    /* Force blue strip visible */
                    .blue-strip {
                        width: 25% !important;
                    }

                    /* Force department text visible */
                    .department-text {
                        font-size: 16px;
                        opacity: 1 !important;
                    }

                    /* Force image transform */
                    .doctor-image {
                        transform: scale(1.08) translateX(15%) !important;
                    }

                    /* Force bottom overlay visible */
                    .bottom-overlay {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    }

                    /* Force extended credentials visible */
                    .extended-credentials {
                        opacity: 1 !important;
                        max-height: 400px !important;
                        pointer-events: auto !important;
                    }
                }

                /* Specific scale fix for Dr. Fakhruddin */
                .scale-fix {
                    transform: scale(0.92) !important;
                    transform-origin: bottom center;
                }
                
                .doctor-card:hover .scale-fix {
                    transform: scale(0.98) translateX(15%) !important;
                    transform-origin: bottom center;
                }

                @media (max-width: 768px) {
                    .scale-fix {
                        transform: scale(0.88) translateX(15%) !important;
                        transform-origin: bottom center;
                    }
                }

                /* Specific scale up for Dr. Nandini */
                .scale-up-nandini {
                    transform: scale(1.1) translateY(10%) !important;
                    transform-origin: bottom center;
                }
                
                .doctor-card:hover .scale-up-nandini {
                    transform: scale(1.18) translateX(15%) translateY(10%) !important;
                    transform-origin: bottom center;
                }

                @media (max-width: 768px) {
                    .scale-up-nandini {
                        transform: scale(1.18) translateX(15%) translateY(10%) !important;
                        transform-origin: bottom center;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutLeadershipTeam;