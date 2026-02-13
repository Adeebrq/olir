import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FAQCallbackSection.css';

const FAQCallbackSection = ({ faqs: customFaqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const defaultFaqs = [
        {
            question: "What makes Olir Super Speciality Hospital one of the best hospitals in Chennai?",
            answer: "At Olir Hospital, medical expertise is matched with compassion. Every patient is treated with care, dignity, and personal attention."
        },
        {
            question: "Why do patients prefer Olir Super Speciality Hospital for advanced treatment in Chennai?",
            answer: "Patients choose Olir Hospital for doctors who listen and treatments they can trust. Advanced care is delivered with clarity and empathy at every step."
        },
        {
            question: "What super speciality departments are available at Olir Super Speciality Hospital in Chennai?",
            answer: "Olir Hospital brings multiple super speciality departments like Neurology, Orthopaedics, Cardiology, Nephrology and more under one roof. This ensures coordinated care, comfort, and continuity throughout treatment."
        },
        {
            question: "Does Olir Super Speciality Hospital provide 24/7 emergency care in Chennai?",
            answer: "Yes, our emergency services are available day and night. Skilled teams are always ready to respond quickly when it matters most."
        },
        {
            question: "Why is Olir Super Speciality Hospital trusted as an advanced surgery hospital in Chennai?",
            answer: "Surgeries at Olir Hospital are led by experienced specialists using modern technology. Patient safety, comfort, and recovery remain the highest priorities."
        },
        {
            question: "How does Olir Super Speciality Hospital ensure quality care with specialist doctors in Chennai?",
            answer: "Each patient is cared for by qualified specialists following proven clinical practices. Quality checks, teamwork, and constant monitoring guide every decision."
        }
    ];

    const displayFaqs = customFaqs || defaultFaqs;

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
            .required('Mobile number is required')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log('Form submitted:', values);
            alert('Thank you! We will call you back shortly.');
            resetForm();
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="faq-callback-container pb-64 max-md:pb-96">
            <div className="header-section">
                <p className='title bold'>Frequently Asked Questions</p>
                <p className="header-subtitle text">
                    Find answers to common questions about our services, treatments, appointments,
                    and patient care options to help you make informed health decisions.
                </p>
            </div>

            <div className="faq-grid">
                {displayFaqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 5V19M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-answer-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQCallbackSection;