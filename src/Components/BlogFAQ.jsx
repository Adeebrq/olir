
import React, { useState } from 'react';
import './BlogFAQ.css';
import { BlogContentRenderer } from './BlogContentRenderer';

const BlogFAQ = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="blog-faq-wrapper">
             <div className="blog-faq-header">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D4C]">
                    Frequently Asked Questions
                </h2>
                <p className="blog-faq-subtitle">
                    Find answers to common questions about our services, treatments, appointments, 
                    and patient care options to help you make informed health decisions.
                </p>
            </div>
            
            <div className="blog-faq-grid">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item group">
                        <button
                            className="faq-question focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span className="font-semibold text-[#0B3D4C] pr-4">{faq.question}</span>
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
                        <div 
                            className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div className="faq-answer-content">
                                <p>
                                   <BlogContentRenderer content={faq.answer} />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogFAQ;
