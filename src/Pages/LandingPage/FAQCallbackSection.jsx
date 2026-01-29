import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FAQCallbackSection.css';
import doctorImage from "../../assets/doctor-image.png"

const FAQCallbackSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What makes Olir Super Speciality Hospital one of the best hospitals in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Why do patients prefer Olir Super Speciality Hospital for advanced treatment in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "What super speciality departments are available at Olir Super Speciality Hospital in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Does Olir Super Speciality Hospital provide 24/7 emergency care in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Why is Olir Super Speciality Hospital trusted as an advanced surgery hospital in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "How does Olir Super Speciality Hospital ensure quality care with specialist doctors in Chennai?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
    ];

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
        <div className="faq-callback-container pb-64">
            <div className="header-section">
                <p className='title bold'>Frequently Asked Questions</p>
                <p className="header-subtitle text">
                    Find answers to common questions about our services, treatments, appointments,
                    and patient care options to help you make informed health decisions.
                </p>
            </div>

            <div className="faq-grid">
                {faqs.map((faq, index) => (
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