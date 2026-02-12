import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const BookAppointmentForm = () => {
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
    <div className="relative w-full flex justify-center items-center py-6 px-2">
      {/* FORM CARD */}
      <div
        className="w-full max-w-2xl rounded-2xl p-6 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.85)', // transparent white card
        }}
      >
        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-[#215d8d] mb-5">
          Book Appointment
        </h2>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
          />

          {/* Concern */}
          <div className="relative">
            <select
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              required
              className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40 appearance-none"
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

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#215d8d] text-sm pointer-events-none">
              ▼
            </span>
          </div>

          {/* Phone + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No. *"
              pattern="[0-9]*"
              required
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
              className="bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
              className="bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
            />
          </div>

          {/* Notes */}
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Add Notes"
            className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40 resize-none"
          />

          {/* SUBMIT */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-10 py-3 rounded-full font-semibold text-gray-900 shadow-lg transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'
                }`}
              style={{
                background:
                  'linear-gradient(180deg, #FFE666 0%, #FFD43B 100%)',
              }}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              <span className="text-lg">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentForm;
