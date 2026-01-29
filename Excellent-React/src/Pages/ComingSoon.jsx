import React from 'react';
import { useNavigate } from 'react-router-dom';
import newLogo from '../assets/newLogo.svg';

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <img
                        src={newLogo}
                        alt="Olir Hospital"
                        className="h-20 w-auto"
                    />
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1a8ca8] mb-6">
                        Coming Soon
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-4">
                        We're working on something amazing!
                    </p>

                    <p className="text-base md:text-lg text-gray-500 mb-8">
                        This page is currently under construction. Please check back later for updates.
                    </p>

                    {/* Decorative Element */}
                    <div className="flex justify-center items-center gap-2 mb-10">
                        <div className="w-3 h-3 bg-[#1a8ca8] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-3 h-3 bg-[#1a8ca8] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-[#1a8ca8] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>

                    {/* Back Button CTA */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-b from-yellow-200 to-yellow-400 text-gray-900 font-semibold text-lg rounded-full hover:brightness-105 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <span className="text-xl">←</span>
                        Go Back
                    </button>
                </div>

                {/* Footer Text */}
                <p className="text-gray-500 text-sm mt-8">
                    Thank you for your patience!
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
