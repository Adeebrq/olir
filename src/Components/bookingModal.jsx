import React from "react";

const BookAppointment = () => {
    return (
        <div id="book-appointment" className="absolute bottom-0 left-0 right-0 w-full flex justify-center px-4 z-20 transform translate-y-1/2">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Full Name *"
                        className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                    />

                    {/* Speciality */}
                    <select
                        className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                    >
                        <option>Speciality/Doctors</option>
                        <option>General</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                    </select>

                    {/* Notes */}
                    <textarea
                        placeholder="Add Notes"
                        className="row-span-2 rounded-xl px-4 py-3 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none resize-none"
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        placeholder="Phone No. *"
                        pattern="[0-9]*"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                    />

                    {/* Date */}
                    <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="h-13 rounded-xl px-4 text-sm text-gray-700 
                       bg-white border border-gray-300 outline-none"
                    />
                </div>

                {/* SUBMIT */}
                <div className="flex justify-center mt-10">
                    <button
                        className="flex items-center gap-3 px-10 py-3 rounded-full 
                       font-semibold text-sm text-slate-900
                       bg-gradient-to-b from-yellow-200 to-yellow-400
                       hover:brightness-105 transition cursor-pointer"
                    >
                        SUBMIT <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
