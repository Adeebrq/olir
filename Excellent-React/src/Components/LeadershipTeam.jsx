import React, { useState } from 'react';
import { Award, Heart, Building2, Stethoscope } from 'lucide-react';
import doc1 from '../assets/doc1.svg';
import doc2 from '../assets/doc2.svg';
import doc3 from '../assets/doc3.svg';
import doc4 from '../assets/doc4.svg';

const LeadershipTeam = () => {
    const [activeDoctor, setActiveDoctor] = useState(1); // Default active is center-left (index 1)

    const teamMembers = [
        {
            id: 0,
            name: "Dr. Rajesh Kumar",
            image: doc1,
            tooltips: {
                topLeft: {
                    text: "MBBS, MD - CARDIOLOGY",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: "DM - INTERVENTIONAL CARDIOLOGY",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: "38 YEARS OF EXPERIENCE",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: "500+ SUCCESSFUL PROCEDURES",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 1,
            name: "Dr. B. Chendil Nathan",
            image: doc2,
            tooltips: {
                topLeft: {
                    text: "MBBS, MCH - NEURO SURGERY",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: "DNB - NEUROSURGERY",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: "43 YEARS OF EXPERIENCE",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: "1000+ BRAIN SURGERIES",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 2,
            name: "Dr. Priya Sharma",
            image: doc3,
            tooltips: {
                topLeft: {
                    text: "MBBS, MS - ORTHOPEDICS",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                topRight: {
                    text: "DNB - SPINE SURGERY",
                    icon: <Stethoscope className="w-4 h-4" />,
                    iconBg: "bg-teal-500"
                },
                bottomLeft: {
                    text: "35 YEARS OF EXPERIENCE",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                },
                bottomRight: {
                    text: "800+ SPINE SURGERIES",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                }
            }
        },
        {
            id: 3,
            name: "Dr. Arun Menon",
            image: doc4,
            tooltips: {
                topLeft: {
                    text: "FOUNDER AND CHAIRMAN",
                    icon: <Building2 className="w-4 h-4" />,
                    iconBg: "bg-blue-500"
                },
                topRight: {
                    text: "SUPER SPECIALITY HOSPITAL",
                    icon: <Building2 className="w-4 h-4" />,
                    iconBg: "bg-blue-500"
                },
                bottomLeft: {
                    text: "HUNDREDS OF SUCCESSFUL SURGERIES",
                    icon: <Heart className="w-4 h-4" />,
                    iconBg: "bg-pink-400"
                },
                bottomRight: {
                    text: "HEALTHCARE VISIONARY",
                    icon: <Award className="w-4 h-4" />,
                    iconBg: "bg-yellow-400"
                }
            }
        }
    ];

    const Tooltip = ({ tooltip, isActive, position }) => {
        if (!tooltip) return null;

        const isTop = position === 'topLeft' || position === 'topRight';
        const isLeft = position === 'topLeft' || position === 'bottomLeft';

        // Position tooltips to extend left/right from center point
        let positionClass = '';
        let connectorClass = '';
        let connectorHeight = 'h-14';

        if (position === 'topLeft') {
            // Extend to the left from center
            positionClass = '-top-28 right-1/2 mr-2';
            connectorClass = 'right-0';
        }
        if (position === 'topRight') {
            // Extend to the right from center
            positionClass = '-top-28 left-1/2 ml-2';
            connectorClass = 'left-0';
        }
        if (position === 'bottomLeft') {
            // Extend to the left from center
            positionClass = '-bottom-28 right-1/2 mr-2';
            connectorClass = 'right-0';
        }
        if (position === 'bottomRight') {
            // Extend to the right from center
            positionClass = '-bottom-28 left-1/2 ml-2';
            connectorClass = 'left-0';
        }

        return (
            <div
                className={`absolute ${positionClass} transition-all duration-500 z-10 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
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
        <section className="py-10 px-4 bg-white overflow-visible">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
                        Leadership Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Guided By Excellence, United In Care
                    </h2>
                    <p className="text-gray-600 text-base max-w-4xl mx-auto leading-relaxed">
                        Our leadership team brings together experienced clinicians, compassionate caregivers, and dedicated professionals.
                        <br />
                        Representing fields from surgery and medicine to administration and nursing, the team ensures seamless care and supports our mission to nurture every patient's wellbeing.
                    </p>
                </div>

                {/* Team Members */}
                <div className="py-32 relative">
                    <div className="flex justify-center items-end max-w-6xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="relative flex flex-col items-center cursor-pointer -mx-12"
                                onMouseEnter={() => setActiveDoctor(member.id)}
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
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4 z-20">
                                        <div className={`text-white px-6 py-2 rounded-full shadow-lg transition-all duration-500 ${activeDoctor === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                            }`} style={{ backgroundColor: '#2596be' }}>
                                            <p className="text-sm font-bold whitespace-nowrap">
                                                {member.name}
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