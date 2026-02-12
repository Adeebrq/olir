import React from 'react';

export const ContactButton = ({ onClick, children, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#215d8d] to-[#1a4a6f] hover:from-[#1a4a6f] hover:to-[#113549] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
        >
            {children}
        </button>
    );
};
