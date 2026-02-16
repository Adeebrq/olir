import React, { useEffect } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import BookAppointment from '../Components/bookingModal';
import { upcomingEvents, allPastEvents } from '../utils/eventData';
import { Link } from 'react-router-dom';

const PastEventCard = ({ event }) => (
  <Link to={`/events/${event.slug}`} className="block h-full">
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400/215d8d/ffffff?text=Past+Event';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-base font-bold mb-1 drop-shadow-lg">
            {event.title}
          </h3>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{event.date}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const EventsPage = () => {
    const [showAllUpcoming, setShowAllUpcoming] = React.useState(false);
    const [showAllPast, setShowAllPast] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleUpcoming = showAllUpcoming ? upcomingEvents : upcomingEvents.slice(0, 3);
  const visiblePast = showAllPast ? allPastEvents : allPastEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-32 py-16">
        {/* Upcoming Events */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-teal-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleUpcoming.map((event) => (
              <Link
                to={`/events/${event.slug}`}
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/0B3D4C/ffffff?text=Event';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">
                      Upcoming
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0B3D4C] mb-3 group-hover:text-teal-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <CalendarDays className="w-4 h-4 text-teal-500" />
                    <span>{event.date}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {!showAllUpcoming && (
              <div className="flex justify-end mt-4">
                  <button 
                      onClick={() => setShowAllUpcoming(true)}
                      className="text-[#1B6B7A] font-semibold hover:underline flex items-center gap-1"
                  >
                      See More &rarr;
                  </button>
              </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-gray-400 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Past Events
            </h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {visiblePast.map((event) => (
                    <PastEventCard key={event.id} event={event} />
                ))}
            </div>

            {!showAllPast && (
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={() => setShowAllPast(true)}
                        className="text-[#1B6B7A] font-semibold hover:underline flex items-center gap-1"
                    >
                        See More &rarr;
                    </button>
                </div>
            )}
        </section>
      </div>

      {/* Booking Modal */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <BookAppointment isInline={true} />
      </div>
    </div>
  );
};
export default EventsPage;
