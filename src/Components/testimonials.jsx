import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('patients');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-start mb-8">
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setActiveTab('patients')}
              className={`px-6 py-2 rounded-full cursor-pointer  text-xs font-bold tracking-wider transition-colors ${
                activeTab === 'patients' 
                  ? 'bg-[#002D3A] text-white shadow-md' 
                  : 'bg-white text-[#002D3A] border border-[#002D3A] hover:bg-gray-50'
              }`}
            >
              PATIENTS STORIES
            </button>
            <button 
              onClick={() => setActiveTab('doctors')}
              className={`px-6 py-2 rounded-full cursor-pointer  text-xs font-bold tracking-wider transition-colors ${
                activeTab === 'doctors' 
                  ? 'bg-[#002D3A] text-white shadow-md' 
                  : 'bg-white text-[#002D3A] border border-[#002D3A] hover:bg-gray-50'
              }`}
            >
              DOCTOR VIDEOS
            </button>
          </div>
          <h2 className="text-4xl font-bold text-[#002D3A] mb-4 tracking-tight">
            {activeTab === 'patients' ? 'TESTIMONIALS' : 'DOCTOR VIDEOS'}
          </h2>
          <p className="text-gray-600 max-w-2xl">
            {activeTab === 'patients' 
              ? 'We leave no stone unturned to deliver quality healthcare to our patients. This is what our patients have to say about us'
              : 'Expert insights and guidance from our experienced medical professionals'
            }
          </p>
        </div>
      </div>

      {activeTab === 'patients' && <PatientsCarousel />}
      {activeTab === 'doctors' && <DoctorsCarousel />}
    </section>
  );
};

const PatientsCarousel = () => (
  <div className="flex flex-col gap-8">
    {testimonialRows.map((row, rowIndex) => {
      const duplicatedItems = [...row.items, ...row.items];
      return (
        <div key={rowIndex} className="relative flex overflow-hidden w-full mask-gradient">
          <div
            className={`flex gap-6 py-2 ${
              rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
          >
            {duplicatedItems.map((item, index) =>
              item.type === 'media' ? (
                <MediaCard key={`${rowIndex}-${index}`} img={item.img} label={item.label} isVideo={item.isVideo} />
              ) : (
                <TextCard
                  key={`${rowIndex}-${index}`}
                  title={item.title}
                  quote={item.quote}
                  author={item.author}
                  bg={item.bg}
                />
              )
            )}
          </div>
        </div>
      );
    })}

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 40s linear infinite;
      }
      .mask-gradient {
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
      .animate-marquee:hover,
      .animate-marquee-reverse:hover {
        animation-play-state: paused;
      }
    `}</style>
  </div>
);

const DoctorsCarousel = () => (
  <div className="flex flex-col gap-8">
    {doctorRows.map((row, rowIndex) => {
      const duplicatedItems = [...row.items, ...row.items];
      return (
        <div key={rowIndex} className="relative flex overflow-hidden w-full mask-gradient">
          <div
            className={`flex gap-6 py-2 ${
              rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
          >
            {duplicatedItems.map((item, index) =>
              item.type === 'media' ? (
                <MediaCard key={`${rowIndex}-${index}`} img={item.img} label={item.label} isVideo={item.isVideo} />
              ) : (
                <DoctorCard
                  key={`${rowIndex}-${index}`}
                  name={item.name}
                  specialty={item.specialty}
                  bio={item.bio}
                  bg={item.bg}
                />
              )
            )}
          </div>
        </div>
      );
    })}

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 40s linear infinite;
      }
      .mask-gradient {
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
      .animate-marquee:hover,
      .animate-marquee-reverse:hover {
        animation-play-state: paused;
      }
    `}</style>
  </div>
);

const MediaCard = ({ img, label, isVideo }) => (
  <div className="relative w-[280px] h-[200px] md:w-[320px] md:h-[240px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-black">
    <img src={img} alt={label || 'Testimonial media'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
    {isVideo && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-orange-500 fill-orange-500 ml-1" />
        </div>
      </div>
    )}
  </div>
);

const TextCard = ({ title, quote, author, bg }) => (
  <div
    className="w-[280px] md:w-[360px] h-[200px] md:h-[240px] flex-shrink-0 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 flex flex-col overflow-hidden"
    style={{ backgroundColor: bg }}
  >
    {title && <p className="text-lg font-semibold text-[#002D3A] mb-2 flex-shrink-0">{title}</p>}
    <p className="text-sm md:text-base text-[#002D3A]/80 leading-relaxed flex-grow overflow-y-auto break-words whitespace-normal">
      {quote}
    </p>
    {author && <p className="mt-3 font-semibold text-[#002D3A] flex-shrink-0">{author}</p>}
  </div>
);

const DoctorCard = ({ name, specialty, bio, bg }) => (
  <div
    className="w-[280px] md:w-[360px] h-[200px] md:h-[240px] flex-shrink-0 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 flex flex-col overflow-hidden"
    style={{ backgroundColor: bg }}
  >
    {name && <p className="text-lg font-semibold text-[#002D3A] mb-1 flex-shrink-0">{name}</p>}
    {specialty && <p className="text-sm font-medium text-orange-500 mb-2 flex-shrink-0">{specialty}</p>}
    <p className="text-sm md:text-base text-[#002D3A]/80 leading-relaxed flex-grow overflow-y-auto break-words whitespace-normal">
      {bio}
    </p>
  </div>
);

const testimonialRows = [
  {
    items: [
      {
        type: 'text',
        title: 'Shachi',
        quote:
          'Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery.',
        author: 'Shachi',
        bg: '#dfe9c4',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1584515933487-98db75f55226?auto=format&fit=crop&q=80&w=600',
        isVideo: false,
      },
      {
        type: 'text',
        title: 'Mrs. Rao',
        quote:
          'I had severe osteoarthritis in both knees. Dr. Raviraj patiently addressed all my fears and ensured a painless recovery. I can finally enjoy morning walks again.',
        author: 'Mrs. Rao',
        bg: '#f0f7d0',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
        isVideo: true,
      },
    ],
  },
  {
    items: [
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1516574187841-693019405137?auto=format&fit=crop&q=80&w=600',
        isVideo: true,
      },
      {
        type: 'text',
        title: 'Nirmala',
        quote:
          'I was diagnosed with multiple fibroids and advised to undergo myomectomy. Dr. Rohit Madhukar explained every step and guided me through a smooth procedure.',
        author: 'Nirmala',
        bg: '#f9e097',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
        isVideo: false,
      },
      {
        type: 'text',
        title: 'Rahul & Family',
        quote:
          'Our father received cardiac rehab at Xcellent Care. The therapists, nurses and doctors were so attentive that we felt at home every day.',
        author: 'Rahul',
        bg: '#f6dfa9',
      },
    ],
  },
];

const doctorRows = [
  {
    items: [
      {
        type: 'text',
        name: 'Dr. Jayanti Sharma',
        specialty: 'Oncologist',
        bio: 'With over 15 years of experience in surgical oncology, Dr. Jayanti specializes in minimally invasive cancer treatments and has helped hundreds of patients achieve recovery.',
        bg: '#e3f2fd',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1612349317150-e3df4f707b12?auto=format&fit=crop&q=80&w=600',
        isVideo: true,
      },
      {
        type: 'text',
        name: 'Dr. Raviraj Kapoor',
        specialty: 'Orthopedic Surgeon',
        bio: 'Specializing in joint replacement and sports medicine, Dr. Raviraj combines traditional techniques with cutting-edge technology for optimal patient outcomes.',
        bg: '#fff3e0',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600',
        isVideo: false,
      },
    ],
  },
  {
    items: [
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&q=80&w=600',
        isVideo: true,
      },
      {
        type: 'text',
        name: 'Dr. Rohit Madhukar',
        specialty: 'Gynecologist',
        bio: 'Dr. Rohit brings expertise in advanced gynecological procedures and is known for his patient-centric approach and compassionate care throughout the treatment journey.',
        bg: '#f3e5f5',
      },
      {
        type: 'media',
        img: 'https://images.unsplash.com/photo-1631217314707-5383e3ca5dfd?auto=format&fit=crop&q=80&w=600',
        isVideo: false,
      },
      {
        type: 'text',
        name: 'Dr. Priya Singh',
        specialty: 'Cardiologist',
        bio: 'A dedicated cardiologist with expertise in cardiac rehabilitation, Dr. Priya ensures comprehensive care for heart health and preventative wellness strategies.',
        bg: '#fce4ec',
      },
    ],
  },
];

export default Testimonials;