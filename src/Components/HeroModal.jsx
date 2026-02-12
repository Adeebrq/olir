import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Activity, HeartPulse, Droplet, FileText, User, Phone, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const HeroModal = ({ isOpen, onClose, packageData }) => {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Default Data if specific packageData is not provided (Fallback to Hero Offer)
    const defaultData = {
        title: "50% Off – Full Body Health Check",
        price: "1199",
        originalPrice: "2399",
        discount: "50% Off",
        tag: "Premium Health Package",
        description: "Comprehensive preventive screening to ensure your well-being.",
        features: [
             "Complete Blood Count (CBC)", "Blood Sugar (Fasting & PP)", "Lipid Profile", 
             "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Thyroid Profile (T3, T4, TSH)", 
             "ECG & Urine Routine"
        ],
        testCount: "60+"
    };

    const data = packageData || defaultData;
    const packageName = data.title;
    const packagePrice = data.price;


    // EmailJS credentials
    const EMAILJS_PUBLIC_KEY = 'FqCUUwUN7yP250PrF';
    const EMAILJS_SERVICE_ID = 'service_e7dt1co';
    const EMAILJS_TEMPLATE_ID = 'template_wdeodtj';

    // Form state
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        date: ''
    });

    // Loading state
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle scroll to hide/show indicator
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop > 50 || scrollHeight - scrollTop - clientHeight < 50) {
            setShowScrollIndicator(false);
        } else {
            setShowScrollIndicator(true);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.phone || !formData.date) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            emailjs.init(EMAILJS_PUBLIC_KEY);

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    fullname: formData.fullname,
                    phone: formData.phone,
                    date: formData.date,
                    package_name: packageName,
                    package_price: packagePrice
                }
            );

            if (response.status === 200) {
                toast.success('Appointment confirmed! We will contact you soon.');
                setFormData({ fullname: '', phone: '', date: '' });
                setTimeout(() => {
                    onClose();
                }, 1500);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            setTimeout(() => setAnimate(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setAnimate(false);
            const timer = setTimeout(() => setMounted(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />

            <div className={`relative w-full max-w-6xl mx-4 bg-white/95 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-out transform ${animate ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`} style={{ maxHeight: '90vh' }}>
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors">
                    <X size={20} />
                </button>

                {/* LEFT COLUMN: Information */}
                <div className="md:w-3/5 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white flex flex-col justify-between overflow-y-auto relative" onScroll={handleScroll}>
                    <div>
                        <div className="mb-6">
                            {data.tag && (
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">
                                    {data.tag}
                                </span>
                            )}
                            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                                {data.title}
                            </h2>
                            {data.description && (
                                <p className="text-lg text-gray-600 mt-2">
                                    {data.description}
                                </p>
                            )}
                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex flex-col">
                                    {data.originalPrice && (
                                         <span className="text-gray-500 text-sm font-medium line-through">₹{data.originalPrice}</span>
                                    )}
                                    <span className="text-3xl font-bold text-green-600 animate-pulse">₹{data.price}</span>
                                </div>
                                {data.discount && (
                                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                                        {data.discount}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {data.features && (
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                                        Tests Included
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {data.features.map((feature, idx) => (
                                            <ListItem key={idx} icon={<Activity size={18} />} text={feature} />
                                        ))}
                                    </div>
                                </div>
                            )}

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
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="md:w-2/5 bg-white p-8 md:p-10 flex flex-col justify-center border-l border-gray-100 relative">
                     {showScrollIndicator && (
                        <div className="md:hidden mb-4 pb-3 border-b border-gray-200 flex items-center justify-center gap-2 text-blue-600 text-xs font-medium animate-bounce">
                            <span>Scroll down for more info</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Request Appointment</h3>
                        <p className="text-gray-500 text-sm mt-1">Fill out the form below to secure your slot.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Enter your name" required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-gray-800" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter mobile number" pattern="[0-9]*" required onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-gray-800" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Preferred Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button type="submit" disabled={isSubmitting} className={`w-full text-gray-900 font-bold py-4 rounded-xl shadow-lg transition-all transform active:translate-y-0 cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-1'}`} style={{ background: 'linear-gradient(180deg, #FFE666 0%, #FFD43B 100%)' }}>
                                {isSubmitting ? 'SENDING...' : 'Confirm Appointment'}
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3">No payment required now. Verified by hospital staff.</p>
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
        <span className="text-gray-700 font-medium text-sm text-left">{text}</span>
    </div>
);

export default HeroModal;
