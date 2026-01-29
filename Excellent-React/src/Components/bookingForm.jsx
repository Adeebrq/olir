import React from 'react';

const BookAppointmentForm = () => {
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
        <form className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
          />

          {/* Speciality */}
          <div className="relative">
            <select
              className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40 appearance-none"
            >
              <option>Speciality/Doctors</option>
              <option>General</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#215d8d] text-sm pointer-events-none">
              ▼
            </span>
          </div>

          {/* Phone + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone No. *"
              pattern="[0-9]*"
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
              className="bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
            />

            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40"
            />
          </div>

          {/* Notes */}
          <textarea
            rows={3}
            placeholder="Add Notes"
            className="w-full bg-white px-5 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#215d8d]/40 resize-none"
          />

          {/* SUBMIT */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-10 py-3 rounded-full font-semibold text-gray-900 shadow-lg transition hover:scale-105 cursor-pointer"
              style={{
                background:
                  'linear-gradient(180deg, #FFE666 0%, #FFD43B 100%)',
              }}
            >
              SUBMIT
              <span className="text-lg">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentForm;
