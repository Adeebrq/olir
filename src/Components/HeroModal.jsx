import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Activity, HeartPulse, Droplet, FileText, Calendar, User, Phone, Check } from 'lucide-react';

const HeroModal = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            setTimeout(() => setAnimate(true), 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            setAnimate(false);
            const timer = setTimeout(() => setMounted(false), 300); // Wait for transition
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${animate ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-5xl mx-4 bg-white/95 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-out transform ${animate ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
                style={{ maxHeight: '90vh' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* LEFT COLUMN: Information */}
                <div className="md:w-3/5 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white flex flex-col justify-between overflow-y-auto">
                    <div>
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">
                                Premium Health Package
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                50% Off – Full Body Health Check
                            </h2>
                            <p className="text-lg text-gray-600 mt-2">
                                Comprehensive preventive screening to ensure your well-being.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Tests Included
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <ListItem icon={<Droplet size={18} />} text="Complete Blood Count (CBC)" />
                                    <ListItem icon={<Activity size={18} />} text="Blood Sugar (Fasting & PP)" />
                                    <ListItem icon={<HeartPulse size={18} />} text="Lipid Profile" />
                                    <ListItem icon={<FileText size={18} />} text="Liver Function Test (LFT)" />
                                    <ListItem icon={<FileText size={18} />} text="Kidney Function Test (KFT)" />
                                    <ListItem icon={<Activity size={18} />} text="Thyroid Profile (T3, T4, TSH)" />
                                    <ListItem icon={<HeartPulse size={18} />} text="ECG & Urine Routine" />
                                </div>
                            </div>

                            <div className="p-4 bg-white/60 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="text-green-500" size={18} />
                                    <span className="font-semibold text-gray-800">Why this check?</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Early detection of lifestyle diseases, organ health assessment, and overall vitality check.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>60+ health parameters covered</span>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="md:w-2/5 bg-white p-8 md:p-10 flex flex-col justify-center border-l border-gray-100 relative">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Request Appointment</h3>
                        <p className="text-gray-500 text-sm mt-1">Fill out the form below to secure your slot.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Preferred Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(180deg, #FFE666 0%, #FFD43B 100%)'
                                }}
                            >
                                Confirm Appointment
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3">
                                No payment required now. Verified by hospital staff.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const ListItem = ({ icon, text }) => (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
        <div className="p-2 bg-white rounded-full shadow-sm text-blue-600">
            {icon}
        </div>
        <span className="text-gray-700 font-medium text-sm">{text}</span>
    </div>
);

export default HeroModal;
