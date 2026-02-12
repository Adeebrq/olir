import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import aboutusBanner from '../assets/aboutuss.png';

const BookAppointmentPage = () => {
  // EmailJS credentials
  const EMAILJS_PUBLIC_KEY = 'FqCUUwUN7yP250PrF';
  const EMAILJS_SERVICE_ID = 'service_e7dt1co';
  const EMAILJS_TEMPLATE_ID = 'template_hla40e3';

  // Form state
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    date: '',
    specialty: '',
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
    if (!formData.fullname || !formData.phone || !formData.date || !formData.specialty) {
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
          concern: formData.specialty,
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
          specialty: '',
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
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[350px] overflow-hidden">
        <img 
          src={aboutusBanner} 
          alt="Hospital Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Main Contact Container - Floating Card */}
      <div className="relative -mt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7F8FA] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-12 relative">
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
              
              {/* LEFT SIDE - Form Section */}
              <div>
                {/* Title */}
                <h1 className="text-[44px] font-bold text-[#1F3B57] mb-3 leading-tight">
                  Get in <span className="text-blue-400">Touch</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-sm text-gray-500 max-w-[480px] mb-6">
                  We're here to answer your questions and provide support, whether it's about 
                  appointments, billing, emergencies, or feedback. Reach out anytime.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                  {/* Full Name */}
                  <div>
                    <input 
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Full Name *" 
                      required
                      className="w-full h-12 rounded-[10px] border border-gray-200 bg-white px-4 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  {/* Speciality/Doctors Dropdown */}
                  <div>
                    <select 
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-[10px] border border-gray-200 bg-white px-4 text-sm text-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="">Speciality/Doctors *</option>
                      <option value="Neurology & Neurosurgery">Neurology & Neurosurgery</option>
                      <option value="Orthopaedics">Orthopaedics</option>
                      <option value="Urology">Urology</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                      <option value="Paediatrics">Paediatrics</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Nephrology">Nephrology</option>
                      <option value="Pulmonology">Pulmonology</option>
                      <option value="Internal Medicine">Internal Medicine</option>
                      <option value="ENT">ENT (Otorhinolaryngology)</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  {/* Phone and Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone No. *"
                      pattern="[0-9]*"
                      required
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      className="h-12 rounded-[10px] border border-gray-200 bg-white px-4 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                    <input 
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="h-12 rounded-[10px] border border-gray-200 bg-white px-4 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  {/* Add Notes Textarea */}
                  <div>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Add Notes" 
                      rows={4}
                      className="w-full h-[120px] rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-sm resize-none focus:outline-none focus:border-teal-500 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-[240px] h-12 rounded-full bg-[#FFE666] text-gray-900 font-semibold text-sm shadow-lg hover:bg-[#ffdf4d] hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Contact Info Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#FFE666] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">PHONE</p>
                      <p className="text-sm font-medium text-gray-800">044 – 4000 0006</p>
                      <p className="text-sm font-medium text-gray-800">+91 94080 80909</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#FFE666] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Address</p>
                      <p className="text-sm font-medium text-gray-800 leading-relaxed">
                        7/26, 8th Cross Street, Rajalakshmi Nagar, Off. 100 Feet Velachery Bye-Pass Road, Velachery, Chennai - 600 042.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#FFE666] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Email</p>
                      <p className="text-sm font-medium text-gray-800">contactus@olirhospital.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Map Section */}
              <div className="relative mt-8 lg:mt-0 lg:h-full">
                {/* Blue Accent Background - hidden on mobile */}
                <div className="absolute -right-12 -top-6 -bottom-6 w-[120%] bg-[#244C6A] rounded-br-[20px] -z-10 hidden lg:block"></div>
                
                {/* Google Map */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg h-[300px] lg:h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.9459517975803!2d80.2175432!3d12.9856751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0056517409%3A0x175637abd6cba803!2sOLIR%20SUPER%20SPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1770373890820!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    className="w-full h-full"
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
