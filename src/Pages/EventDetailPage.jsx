
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { upcomingEvents, allPastEvents } from '../utils/eventData';
import BookAppointment from '../Components/bookingModal';

const EventDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Find event in either list
    const event = [...upcomingEvents, ...allPastEvents].find(e => e.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <h2 className="text-2xl font-bold text-[#0B3D4C] mb-4">Event Not Found</h2>
                <button
                    onClick={() => navigate('/events')}
                    className="flex items-center gap-2 text-[#1B6B7A] hover:underline font-semibold"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Events
                </button>
            </div>
        );
    }

    const isUpcoming = upcomingEvents.some(e => e.slug === event.slug);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4C]/90 via-[#0B3D4C]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate('/events')}
                        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Events
                    </button>
                    {event.category && (
                        <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                            {event.category}
                        </span>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        {event.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 md:gap-8 text-white/90">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                            <Calendar className="w-5 h-5 text-teal-400" />
                            <span className="font-medium">{event.date}</span>
                        </div>
                        {event.time && (
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                                <Clock className="w-5 h-5 text-teal-400" />
                                <span className="font-medium">{event.time}</span>
                            </div>
                        )}
                        {event.location && (
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-400" />
                                <span className="font-medium">{event.location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6 flex items-center gap-2">
                            Overview
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-none whitespace-pre-line">
                            {event.description}
                        </div>
                    </section>

                    {/* Highlights */}
                    {event.highlights && (
                        <section className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                            <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-teal-600" />
                                Event Highlights
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {event.highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Schedule */}
                    {event.schedule && (
                        <section>
                            <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-teal-600" />
                                Event Schedule
                            </h2>
                            <div className="border-l-2 border-teal-100 ml-3 space-y-8">
                                {event.schedule.map((slot, index) => (
                                    <div key={index} className="relative pl-8">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                            <span className="text-teal-600 font-bold min-w-[100px]">{slot.time}</span>
                                            <span className="text-gray-700 font-medium">{slot.activity}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Gallery */}
                    {event.gallery && event.gallery.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-[#0B3D4C] mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {event.gallery.map((img, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden h-48 group shadow-sm">
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Booking Card */}
                    {isUpcoming ? (
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-32">
                            <h3 className="text-xl font-bold text-[#0B3D4C] mb-2">Register Today</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Limited seats available. Reserve your spot now for free.
                            </p>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <UserCheck className="w-5 h-5 text-teal-500" />
                                    <span>Open to all ages</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <ShieldCheck className="w-5 h-5 text-teal-500" />
                                    <span>Safety protocols followed</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-4 rounded-xl font-bold text-white bg-[#1B6B7A] hover:bg-[#155A66] transition-all transform hover:scale-[1.02] shadow-md"
                            >
                                Register Now
                            </button>
                        </div>
                    ) : (
                         <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center sticky top-32">
                            <h3 className="text-xl font-bold text-gray-500 mb-2">Event Ended</h3>
                            <p className="text-gray-400 text-sm">
                                This event has already taken place. Stay tuned for upcoming events!
                            </p>
                            <button
                                onClick={() => navigate('/events')}
                                className="mt-6 text-[#1B6B7A] font-semibold hover:underline"
                            >
                                View Upcoming Events
                            </button>
                         </div>
                    )}
                </div>
            </div>

            {/* Registration Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                        </button>
                        <div className="p-0">
                            <BookAppointment 
                                isInline={true} 
                                title={`Register for ${event.title}`}
                                subtitle="Secure your spot"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetailPage;
