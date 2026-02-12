import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const BookAppointment = ({ isInline = false }) => {
    // EmailJS credentials
    const EMAILJS_PUBLIC_KEY = 'FqCUUwUN7yP250PrF';
    const EMAILJS_SERVICE_ID = 'service_e7dt1co';
    const EMAILJS_TEMPLATE_ID = 'template_hla40e3';

    // Form state
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        date: '',
        concern: '',
        notes: ''
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.fullname || !formData.phone || !formData.date || !formData.concern || formData.concern === 'Concern*') {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Initialize EmailJS with public key
            emailjs.init(EMAILJS_PUBLIC_KEY);

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    fullname: formData.fullname,
                    phone: formData.phone,
                    date: formData.date,
                    concern: formData.concern,
                    notes: formData.notes || 'No additional notes'
                }
            );

            if (response.status === 200) {
                toast.success('Appointment booked! We will contact you soon.');
                // Reset form
                setFormData({
                    fullname: '',
                    phone: '',
                    date: '',
                    concern: '',
                    notes: ''
                });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="book-appointment" className={`${isInline ? 'relative py-12' : 'absolute bottom-0 transform translate-y-1/2 max-md:-mb-[18rem]'} left-0 right-0 w-full flex justify-center px-4 z-20`}>
            {/* CARD */}
            <div
                className="w-full max-w-6xl rounded-3xl px-10 py-12 text-white bg-cover bg-center"
                style={{
                    backgroundColor: "#0169a5",
                    backgroundImage: "url('/assets/Gradient.svg')",
                }}
            >
                {/* HEADER */}
                <p className="text-center text-white/80 mb-2">
                    Could not find what you are looking for?
                </p>

                <h2 className="text-center text-3xl font-semibold mb-10">
                    Book Appointment
                </h2>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Full Name */}
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            required
                            className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                        />

                        {/* Concern */}
                        <select
                            name="concern"
                            value={formData.concern}
                            onChange={handleChange}
                            required
                            className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                        >
                            <option value="">Concern*</option>
                            <option>Neurology & Neurosurgery</option>
                            <option>Orthopaedics</option>
                            <option>Urology</option>
                            <option>Cardiology</option>
                            <option>Obstetrics & Gynaecology</option>
                            <option>Paediatrics</option>
                            <option>Gastroenterology</option>
                            <option>Nephrology</option>
                            <option>Pulmonology</option>
                            <option>Internal Medicine</option>
                            <option>ENT (Otorhinolaryngology)</option>
                            <option>Dermatology</option>
                            <option>Laparoscopic Surgery</option>
                            <option>Surgical Oncology</option>
                            <option>Plastic & Reconstructive Surgery</option>
                            <option>General</option>
                        </select>

                        {/* Notes */}
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Add Notes"
                            className="row-span-2 rounded-xl px-4 py-3 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none resize-none"
                        />

                        {/* Phone */}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone No. *"
                            pattern="[0-9]*"
                            required
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                        />

                        {/* Date */}
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                            className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                        />
                    </div>

                    {/* SUBMIT */}
                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex items-center gap-3 px-10 py-3 rounded-full 
                       font-semibold text-sm text-slate-900
                       bg-gradient-to-b from-yellow-200 to-yellow-400
                       transition cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-105'
                                }`}
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'} <span className="text-lg">→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
