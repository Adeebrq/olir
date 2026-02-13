import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CalendarDays, MapPin } from 'lucide-react';
import BookAppointment from '../Components/bookingModal';

const upcomingEvents = [
  {
    id: 1,
    title: 'Free Orthopedic Health Camp',
    date: 'March 15, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Diabetes Awareness Workshop',
    date: 'March 22, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Women\'s Health Screening Drive',
    date: 'April 5, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Cardiac Health Awareness Program',
    date: 'April 12, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Pediatric Vaccination Drive',
    date: 'April 20, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Spine Health Awareness Camp',
    date: 'May 3, 2026',
    location: 'Olir Hospital, Velachery',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop',
  },
];

const pastEventsRowTop = [
  { id: 1, title: 'Annual Health Check-up Camp 2025', date: 'December 10, 2025', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop' },
  { id: 2, title: 'Blood Donation Drive', date: 'November 20, 2025', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop' },
  { id: 3, title: 'World Heart Day Walkathon', date: 'September 29, 2025', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop' },
  { id: 4, title: 'Neuro Awareness Seminar', date: 'August 15, 2025', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop' },
  { id: 5, title: 'Eye Camp for Senior Citizens', date: 'July 8, 2025', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop' },
  { id: 6, title: 'Community Yoga Day', date: 'June 21, 2025', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop' },
];

const pastEventsRowBottom = [
  { id: 7, title: 'Diabetes Screening Camp', date: 'May 15, 2025', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop' },
  { id: 8, title: 'Free Dental Check-up Drive', date: 'April 22, 2025', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop' },
  { id: 9, title: 'Mother & Child Health Camp', date: 'March 8, 2025', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop' },
  { id: 10, title: 'Kidney Awareness Program', date: 'February 14, 2025', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop' },
  { id: 11, title: 'Spine Health Workshop', date: 'January 20, 2025', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop' },
  { id: 12, title: 'New Year Health Resolution Camp', date: 'January 5, 2025', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop' },
];

const PastEventCard = ({ event }) => (
  <div className="px-3">
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative h-72 overflow-hidden">
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
  </div>
);

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderSettingsLTR = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    rtl: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderSettingsRTL = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer"
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
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-gray-400 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Past Events
            </h2>
          </div>

          {/* Top Row - Left to Right */}
          <div className="mb-6">
            <Slider {...sliderSettingsLTR}>
              {pastEventsRowTop.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </Slider>
          </div>

          {/* Bottom Row - Right to Left */}
          <div>
            <Slider {...sliderSettingsRTL}>
              {pastEventsRowBottom.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </Slider>
          </div>
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
