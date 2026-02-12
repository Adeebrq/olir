import React from 'react';
import doc1 from '../assets/doc1.svg';
import doc2 from '../assets/doc2.svg';
import doc3 from '../assets/doc3.svg';
import doc4 from '../assets/doc4.svg';

const AboutLeadershipTeamDoctorPage = () => {
    const doctors = [
        {
            name: 'Doctor Name',
            image: doc1,
            specialties: 'Specialties',
            department: 'Cardiology',
            credentials: [],
            title: '',
            role: ''
        },
        {
            name: 'Doctor Name',
            image: doc2,
            specialties: 'Specialties',
            department: 'Neurology',
            credentials: [
                { prefix: 'M.Ch.', suffix: '(Neuro Surgery)' },
                { prefix: 'Dip.N.B.', suffix: '(Neuro Surgery)' },
                { prefix: 'F.R.C.S.', suffix: '(General Surgery), (London)' },
                { prefix: 'F.R.C.S.', suffix: '(Neuro Surgery) (England, Edinburgh, Glasgow & Ireland)' },
            ],
            title: 'Senior consultant',
            role: 'Spine & Brain Surgeon'
        },
        {
            name: 'Doctor Name',
            image: doc3,
            specialties: 'Specialties',
            department: 'Orthopedics',
            credentials: [],
            title: '',
            role: ''
        },
        {
            name: 'Doctor Name',
            image: doc4,
            specialties: 'Specialties',
            department: 'Pediatrics',
            credentials: [],
            title: '',
            role: ''
        }
    ];

    return (
        <section className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
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
                    {doctors.map((doctor, index) => (
                        <div 
                            key={index} 
                            className="doctor-card-wrapper"
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
                                        className="doctor-image"
                                    />
                                </div>

                                {/* Bottom gradient overlay with info */}
                                <div className="bottom-overlay">
                                    <div className="doctor-info">
                                        <h4 className="doctor-name">{doctor.name}</h4>
                                        <p className="doctor-specialties">{doctor.specialties}</p>
                                        {doctor.credentials.length > 0 && (
                                            <div className="credentials-compact">
                                                {doctor.credentials.slice(0, 2).map((cred, i) => (
                                                    <p key={i} className="credential-item">
                                                        {cred.prefix} {cred.suffix}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .doctor-card-wrapper {
                    position: relative;
                }

                .doctor-card {
                    position: relative;
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); /* Default to hover state */
                    transform: translateY(-4px); /* Default to hover state */
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }

                /* Blue vertical strip */
                .blue-strip {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 28%; /* Default to hover state */
                    background: linear-gradient(135deg, #1B6B7A 0%, #0B4F5C 100%);
                    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1;
                    overflow: hidden;
                }

                /* Vertical department text */
                .department-text {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) rotate(-90deg);
                    color: white;
                    font-size: 4rem;
                    font-weight: 600;
                    letter-spacing: 2px;
                    white-space: nowrap;
                    opacity: 1; /* Default to hover state */
                    transition: opacity 0.4s ease 0.2s;
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
                    transform: scale(1.08) translateX(15%); /* Default to hover state */
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
                    opacity: 1; /* Default to hover state */
                    transform: translateY(0); /* Default to hover state */
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .doctor-card {
                        width: 260px !important;
                        height: 360px !important;
                    }

                    .blue-strip {
                        width: 25%; /* Default to hover state for mobile */
                    }

                    .department-text {
                        font-size: 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutLeadershipTeamDoctorPage;
