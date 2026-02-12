import React from 'react';
import doc1 from '../assets/doc1.svg';

const DoctorCard = ({ doctor }) => {
    // Default values/placeholders if data is missing
    const {
        name = "Doctor Name",
        image = doc1, // Default image since we don't have individual ones yet
        qualification = "",
        department = "Department",
        designation = "" // if available in future
    } = doctor || {};

    // Parse qualifications for the "specialties" or "credentials" area
    // The design effectively needs:
    // 1. Name
    // 2. "Specialties" (small text below name) -> We can use Department or specific specialty if available
    // 3. Compact credentials -> We can use qualification
    
    // For now, let's map:
    // Name -> Name
    // Specialties -> Department
    // Credentials -> Qualification split by comma

    const qualificationsList = qualification 
        ? qualification.split(',').map(q => q.trim()).filter(Boolean)
        : [];

    return (
        <div className="doctor-card-wrapper">
            <div className="doctor-card w-[280px] h-[380px]">
                {/* Blue vertical strip */}
                <div className="blue-strip">
                    {/* Vertical department text */}
                    <div className="department-text">
                        {department}
                    </div>
                </div>

                {/* Doctor image */}
                <div className="image-container">
                    <img
                        src={image}
                        alt={name}
                        className="doctor-image"
                    />
                </div>

                {/* Bottom gradient overlay with info */}
                <div className="bottom-overlay">
                    <div className="doctor-info">
                        <h4 className="doctor-name">{name}</h4>
                        <p className="doctor-specialties">{department}</p>
                        
                        {qualificationsList.length > 0 && (
                            <div className="credentials-compact">
                                {qualificationsList.slice(0, 3).map((cred, i) => (
                                    <p key={i} className="credential-item">
                                        {cred}
                                    </p>
                                ))}
                                {qualificationsList.length > 3 && (
                                    <p className="credential-item">...</p>
                                )}
                            </div>
                        )}
                    </div>
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
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    transform: translateY(-4px);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    margin: 0 auto; /* Center in grid cell if needed */
                }

                /* Blue vertical strip */
                .blue-strip {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 28%;
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
                    font-size: 3.5rem; /* Adjusted slightly for long names? Reset to 4rem if strict */
                    font-weight: 600;
                    letter-spacing: 2px;
                    white-space: nowrap;
                    opacity: 1;
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
                    opacity: 1;
                    transform: translateY(0);
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
                        width: 25%;
                    }

                    .department-text {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
};

export default DoctorCard;
