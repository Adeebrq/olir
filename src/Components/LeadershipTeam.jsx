import React, { useState } from 'react';
import { Award, Heart, Building2, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import doc1 from '../assets/doc1.svg';
import doc2 from '../assets/doc2.svg';
import doc3 from '../assets/doc3.svg';
import doc4 from '../assets/doc4.svg';

const LeadershipTeam = () => {
    const navigate = useNavigate();
    const [activeDoctor, setActiveDoctor] = useState(2); // Default active is Dr. Nandini (index 2)
    const [currentSlide, setCurrentSlide] = useState(0);

    const teamMembers = [
        {
            id: 0,
            name: "Dr.F.Fakhruddin",
            degree: "MBBS, MS - Orthopaedics ",
            role: "Co-Founder",
            image: doc1,
            route: "/doctors/Dr-Fakhruddin",
            tooltips: {
                topLeft: {
                    text: "ARTHROPLASTY EXPERTISE",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: "TRAUMA RECONSTRUCTION",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: "SPORTS ORTHOPAEDICS",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: "JOINT PRESERVATION",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 1,
            name: "Dr. T. E. Sathish Kumar",
            degree: (
                <>
                    MBBS, MS,
                    <br />
                    MCh Neurosurgery
                </>
            ),
            role: "Director",
            image: doc2,
            route: "/doctors/Dr-Sathish-Kumar",
            tooltips: {
                topLeft: {
                    text: (
                        <>
                            KMC - MBBS,  MMC - MS <br />
                            & MCh Neurosurgery
                        </>
                    ),
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: (
                        <>
                            15+ years neurosurgery, <br /> academia, research
                            <br />
                        </>
                    ),
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: (
                        <>
                            Expert in brain, spine,
                            <br /> minimally invasive surgery
                        </>
                    ),
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: (
                        <>
                            Innovative, compassionate, patient-first
                            <br /> neurosurgical care
                        </>
                    ),
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 2,
            name: "Dr.Nandini",
            degree: "MBBS, MD (Pathology) ",
            role: "Co-Founder",
            image: doc3,
            route: "/doctors/Dr-Nandini-Govindarajan",
            tooltips: {
                topLeft: {
                    text: (
                        <>
                            KMC - MBBS, <br className="md:hidden" /> MMC - MD PATHOLOGY,
                            <br />
                            IIM -  HOSPITAL MANAGEMENT
                        </>
                    ),
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: (
                        <>
                            15+ YEARS
                            <br />
                            ONCOPATHOLOGY <br className="md:hidden" /> EXPERIENCE
                        </>
                    ),
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: (
                        <>
                            SPECIALIST IN BREAST, <br className="md:hidden" /> BONE,
                            <br />
                            SOFT TISSUE PATHOLOGY
                        </>
                    ),
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: (
                        <>
                            COMPASSIONATE, <br className="md:hidden" /> QUALITY-FOCUSED
                            <br />
                            CARE EVERY DIAGNOSIS
                        </>
                    ),
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 3,
            name: "Dr.Naga Praven",
            degree: "MBBS, D.Ortho, DNB (Ortho)",
            role: "Co-Founder",
            image: doc4,
            route: "/doctors/Dr-Naga-Praven",
            tooltips: {
                topLeft: {
                    text: "FRACTURE FIXATION",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: "ARTHROSCOPIC REPAIR",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: "DEGENERATIVE DISORDERS",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: "FUNCTIONAL REHABILITATION",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    const handleDoctorClick = (route) => {
        navigate(route);
    };

    const Tooltip = ({ tooltip, isActive, position, isMobile = false, extraBottomSpacing = false }) => {
        if (!tooltip) return null;

        const isTop = position === 'topLeft' || position === 'topRight';
        const isLeft = position === 'topLeft' || position === 'bottomLeft';

        // Position tooltips to extend left/right from center point
        let positionClass = '';
        let connectorClass = '';
        // Reduce connector height on mobile to pull tooltips closer
        let connectorHeight = isMobile ? 'h-8' : 'h-10';
        
        // Tighter vertical positioning on mobile
        const topOffset = isMobile ? '-top-14' : '-top-20';
        // Apply extra spacing for specific cases (like Dr. Fakhruddin) on mobile
        const bottomOffset = isMobile ? (extraBottomSpacing ? '-bottom-24' : '-bottom-14') : '-bottom-20';
        
        // Scale down mobile tooltips and set origin to shrink towards center
        const mobileScale = isMobile ? 'scale-[0.8]' : '';
        let originClass = '';

        if (position === 'topLeft') {
            // Extend to the left from center
            // Reduce margin on mobile to bring closer to center line
            const margin = isMobile ? 'mr-0.5' : 'mr-1.5';
            positionClass = `${topOffset} right-1/2 ${margin}`;
            connectorClass = 'right-0';
            originClass = 'origin-bottom-right';
        }
        if (position === 'topRight') {
            // Extend to the right from center
            const margin = isMobile ? 'ml-0.5' : 'ml-1.5';
            positionClass = `${topOffset} left-1/2 ${margin}`;
            connectorClass = 'left-0';
            originClass = 'origin-bottom-left';
        }
        if (position === 'bottomLeft') {
            // Extend to the left from center
            const margin = isMobile ? 'mr-0.5' : 'mr-1.5';
            positionClass = `${bottomOffset} right-1/2 ${margin}`;
            connectorClass = 'right-0';
            originClass = 'origin-top-right';
        }
        if (position === 'bottomRight') {
            // Extend to the right from center
            const margin = isMobile ? 'ml-0.5' : 'ml-1.5';
            positionClass = `${bottomOffset} left-1/2 ${margin}`;
            connectorClass = 'left-0';
            originClass = 'origin-top-left';
        }

        return (
            <div
                className={`absolute ${positionClass} ${originClass} ${mobileScale} transition-all duration-500 z-10 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                {/* Dashed connector line */}
                <svg
                    className={`absolute ${isTop ? 'top-full' : 'bottom-full'} ${connectorClass} w-0.5 ${connectorHeight}`}
                    style={{
                        strokeDasharray: '4 4',
                        transition: 'opacity 0.5s'
                    }}
                >
                    <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />
                </svg>

                {/* Tooltip badge */}
                <div className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 shadow-md border border-gray-200 whitespace-nowrap">
                    <div className={`${tooltip.iconBg} rounded-full p-1.5 text-white flex-shrink-0`}>
                        {tooltip.icon}
                    </div>
                    <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                        {tooltip.text}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <section className="py-8 px-4 bg-white overflow-visible">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">
                        Leadership Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        Guided By Excellence, United In Care
                    </h2>
                    <p className="text-gray-600 text-base max-w-4xl mx-auto leading-relaxed">
                        Our leadership team brings together experienced clinicians, compassionate caregivers, and dedicated professionals.
                        <br />
                        Representing fields from surgery and medicine to administration and nursing, the team ensures seamless care and supports our mission to nurture every patient's wellbeing.
                    </p>
                </div>

                {/* Mobile Slider (<= 768px) */}
                <div className="md:hidden relative py-12 w-full max-w-sm mx-auto">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide} 
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 rounded-full shadow-md backdrop-blur-sm transition-transform active:scale-95 border border-gray-100 touch-manipulation"
                        aria-label="Previous Doctor"
                    >
                        <ChevronLeft className="w-5 h-5 text-teal-700" />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 rounded-full shadow-md backdrop-blur-sm transition-transform active:scale-95 border border-gray-100 touch-manipulation"
                        aria-label="Next Doctor"
                    >
                        <ChevronRight className="w-5 h-5 text-teal-700" />
                    </button>

                    {/* Slider Track */}
                    <div className="overflow-hidden w-full px-2 pt-24 pb-16">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out will-change-transform"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {teamMembers.map((member, index) => (
                                <div key={member.id} className="w-full flex-shrink-0 flex justify-center px-4">
                                     <div 
                                        className="relative flex flex-col items-center w-full transform scale-90 origin-center cursor-pointer"
                                        onClick={() => handleDoctorClick(member.route)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                handleDoctorClick(member.route);
                                            }
                                        }}
                                     >
                                        
                                        {/* Top-Left Tooltip */}
                                        <Tooltip
                                            tooltip={member.tooltips.topLeft}
                                            isActive={currentSlide === index}
                                            position="topLeft"
                                            isMobile={true}
                                        />

                                        {/* Top-Right Tooltip */}
                                        <Tooltip
                                            tooltip={member.tooltips.topRight}
                                            isActive={currentSlide === index}
                                            position="topRight"
                                            isMobile={true}
                                        />

                                        {/* Image Container */}
                                        <div className="relative w-full overflow-visible ">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-auto object-contain grayscale-0" 
                                            />
                                            
                                            {/* Name Pill */}
                                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4 z-[25]">
                                                <div className="bg-[#2596be] text-white px-6 py-2 rounded-2xl shadow-lg flex flex-col items-center w-[90%] max-w-[240px]">
                                                    <p className="text-sm font-bold whitespace-nowrap">
                                                        {member.name}
                                                    </p>
                                                    <p className="text-xs font-medium whitespace-nowrap mt-0.5 opacity-90 text-center">
                                                        {member.degree}
                                                    </p>
                                                    <p className="text-[10px] font-semibold uppercase tracking-wider mt-0.5 opacity-80">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom-Left Tooltip */}
                                        <Tooltip
                                            tooltip={member.tooltips.bottomLeft}
                                            isActive={currentSlide === index}
                                            position="bottomLeft"
                                            isMobile={true}
                                            extraBottomSpacing={index === 0}
                                        />

                                        {/* Bottom-Right Tooltip */}
                                        <Tooltip
                                            tooltip={member.tooltips.bottomRight}
                                            isActive={currentSlide === index}
                                            position="bottomRight"
                                            isMobile={true}
                                            extraBottomSpacing={index === 0}
                                        />

                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Grid (>= 769px) - Scaled down by 20% */}
                <div className="py-16 relative hidden md:block">
                    <div className="flex justify-center items-end max-w-6xl mx-auto scale-[0.8] origin-center">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className={`relative flex flex-col items-center cursor-pointer -mx-12 transition-transform hover:scale-105 ${activeDoctor === member.id ? 'z-40' : 'z-10'}`}
                                onMouseEnter={() => setActiveDoctor(member.id)}
                                onClick={() => handleDoctorClick(member.route)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleDoctorClick(member.route);
                                    }
                                }}
                            >
                                {/* Top-Left Tooltip */}
                                <Tooltip
                                    tooltip={member.tooltips.topLeft}
                                    isActive={activeDoctor === member.id}
                                    position="topLeft"
                                />

                                {/* Top-Right Tooltip */}
                                <Tooltip
                                    tooltip={member.tooltips.topRight}
                                    isActive={activeDoctor === member.id}
                                    position="topRight"
                                />

                                {/* Doctor Image */}
                                <div className="relative w-full overflow-visible">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-auto object-contain transition-all duration-500 ${activeDoctor === member.id ? 'grayscale-0' : 'grayscale'
                                            }`}
                                    />

                                    {/* Doctor Name Pill - At bottom of image */}
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4 z-[25]">
                                        <div className={`text-white px-6 py-2 rounded-2xl shadow-lg transition-all duration-500 flex flex-col items-center ${activeDoctor === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                            }`} style={{ backgroundColor: '#2596be' }}>
                                            <p className="text-sm font-bold whitespace-nowrap">
                                                {member.name}
                                            </p>
                                            <p className="text-xs font-medium whitespace-nowrap mt-0.5 opacity-90 text-center">
                                                {member.degree}
                                            </p>
                                            <p className="text-[10px] font-semibold uppercase tracking-wider mt-0.5 opacity-80">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom-Left Tooltip */}
                                <Tooltip
                                    tooltip={member.tooltips.bottomLeft}
                                    isActive={activeDoctor === member.id}
                                    position="bottomLeft"
                                />

                                {/* Bottom-Right Tooltip */}
                                <Tooltip
                                    tooltip={member.tooltips.bottomRight}
                                    isActive={activeDoctor === member.id}
                                    position="bottomRight"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;