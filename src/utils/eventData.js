
import React from 'react';

// Using the same images as before, plus some additional ones for galleries
const commonGallery = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2187d80aeffd?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516574187841-693018863ca1?w=600&h=400&fit=crop',
];

export const upcomingEvents = [
  {
    id: 1,
    slug: 'free-orthopedic-health-camp',
    title: 'Free Orthopedic Health Camp',
    date: 'March 15, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Health Camp',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=800&fit=crop',
    description: `Join us for a comprehensive Orthopedic Health Camp designed to address all your bone and joint concerns. Our team of senior orthopedic specialists will be available for free consultations, screenings, and expert advice on managing conditions like arthritis, back pain, and sports injuries.
    
    This camp is an excellent opportunity for individuals of all ages to get a professional assessment of their musculoskeletal health. Whether you are suffering from chronic pain or just want a preventive check-up, our experts are here to guide you.`,
    highlights: [
      'Free consultation with Senior Orthopedic Surgeons',
      '50% discount on X-Rays and BMD (Bone Mineral Density) tests',
      'Physiotherapy assessment and guidance',
      'Ergonomics workshop for office goers',
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Registration & Vitals Check' },
      { time: '10:00 AM', activity: 'Doctor Consultations Begin' },
      { time: '11:30 AM', activity: 'Talk on "Joint Health in 30s & 40s"' },
      { time: '1:00 PM', activity: 'Lunch Break' },
      { time: '2:00 PM', activity: 'Physiotherapy Sessions' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    slug: 'diabetes-awareness-workshop',
    title: 'Diabetes Awareness Workshop',
    date: 'March 22, 2026',
    time: '10:00 AM - 1:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    description: `Understanding diabetes is the first step towards managing it effectively. This interactive workshop brings together endocrinologists, dietitians, and lifestyle coaches to educate you on living a healthy life with diabetes.
    
    We will cover topics ranging from blood sugar monitoring and insulin management to diabetic-friendly diets and exercise routines. Participants will also receive a personalized diet chart.`,
    highlights: [
      'Interactive session with Endocrinologists',
      'Live cooking demo of diabetic-friendly recipes',
      'Free Random Blood Sugar (RBS) test',
      'Q&A session on insulin management',
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Introduction to Diabetes Management' },
      { time: '11:00 AM', activity: 'Nutrition & Diet Planning' },
      { time: '12:00 PM', activity: 'Q&A and Networking' },
    ],
    gallery: commonGallery
  },
  {
    id: 4,
    slug: 'cardiac-health-awareness-program',
    title: 'Cardiac Health Awareness Program',
    date: 'April 12, 2026',
    time: '8:00 AM - 12:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Awareness',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop',
    description: `Your heart health matters. In observance of World Health Day, we are organizing a specialized Cardiac Awareness Program. Learn about potential risk factors, early warning signs of heart attacks, and preventive measures.
    
    The event includes a walkathon to promote an active lifestyle, followed by expert talks and basic heart health screenings.`,
    highlights: [
      'Expert talk by Chief Cardiologist',
      'Free ECG and BP check for first 50 registrations',
      'CPR training session for participants',
      'Heart-healthy diet counseling',
    ],
    schedule: [
      { time: '8:00 AM', activity: 'Heart Health Walkathon' },
      { time: '9:30 AM', activity: 'Screenings Begin' },
      { time: '10:30 AM', activity: 'CPR Training Workshop' },
    ],
    gallery: commonGallery
  },
  {
    id: 3,
    slug: 'womens-health-screening-drive',
    title: 'Women\'s Health Screening Drive',
    date: 'April 5, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Health Drive',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop',
    description: `Empowering women through health. This exclusive screening drive focuses on early detection of common health issues affecting women, including breast cancer, cervical cancer, and hormonal imbalances.
    
    We provide a private and comfortable environment for consultations with our experienced female gynecologists and oncologists.`,
    highlights: [
      'Pap Smear and Mammogram at subsidized rates',
      'Consultation with Gynecologists',
      'Session on Menstrual Hygiene and Menopause',
      'Bone density check',
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Registration' },
      { time: '10:00 AM', activity: 'Screenings and Consultations' },
      { time: '2:00 PM', activity: 'Health Talk: Women at 40' },
    ],
    gallery: commonGallery
  },
  {
    id: 5,
    slug: 'pediatric-vaccination-drive',
    title: 'Pediatric Vaccination Drive',
    date: 'April 20, 2026',
    time: '9:00 AM - 2:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Vaccination',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=800&fit=crop',
    description: `Protecting the future generation. Ensure your child is up-to-date with their immunization schedule. Our pediatric department allows for hassle-free vaccination in a child-friendly environment.
    
    We also offer growth monitoring and developmental assessments during this drive.`,
    highlights: [
      'All major vaccines available',
      'Growth and development assessment',
      'Free pediatric consultation',
      'Goodie bags for kids',
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Vaccination Drive Starts' },
      { time: '11:00 AM', activity: 'Pediatrician Q&A' },
    ],
    gallery: commonGallery
  },
  {
    id: 6,
    slug: 'spine-health-awareness-camp',
    title: 'Spine Health Awareness Camp',
    date: 'May 3, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'Olir Hospital, Velachery',
    category: 'Awareness',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&h=800&fit=crop',
    description: `Back pain shouldn't hold you back. Learn about maintaining a healthy spine, correct posture, and ergonomic practices at our Spine Health Camp.
    
    Ideal for software professionals, drivers, and anyone suffering from chronic back or neck pain.`,
    highlights: [
      'Postural analysis',
      'Consultation with Spine Surgeons',
      'Physiotherapy demo for back strengthening',
      'Ergonomic chair adjustments workshop',
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Posture Check' },
      { time: '11:00 AM', activity: 'Consultations' },
      { time: '1:00 PM', activity: 'Physio Workshop' },
    ],
    gallery: commonGallery
  },
];

export const allPastEvents = [
  { 
    id: 101, 
    slug: 'annual-health-check-up-camp-2025',
    title: 'Annual Health Check-up Camp 2025', 
    date: 'December 10, 2025', 
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop',
    description: 'A successful event marking the end of the year with over 500 participants benefiting from full-body checkups.',
    highlights: ['500+ attendees', 'Free BMI checks'],
    gallery: commonGallery
  },
  { 
    id: 102, 
    slug: 'blood-donation-drive',
    title: 'Blood Donation Drive', 
    date: 'November 20, 2025', 
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&h=800&fit=crop',
    description: 'Our community came together to donate over 200 units of blood, saving countless lives.',
    highlights: ['200 units collected', 'Certificates awarded'],
    gallery: commonGallery
  },
  { 
    id: 103, 
    slug: 'world-heart-day-walkathon',
    title: 'World Heart Day Walkathon', 
    date: 'September 29, 2025', 
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop',
    description: 'Celebrating World Heart Day with a 5km walkathon to raise awareness about cardiovascular health.',
    highlights: ['1000+ walkers', 'Celebrity guest'],
    gallery: commonGallery
  },
  { 
    id: 104, 
    slug: 'neuro-awareness-seminar',
    title: 'Neuro Awareness Seminar', 
    date: 'August 15, 2025', 
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
    description: 'An informative seminar on neurological disorders and advancements in treatment.',
    highlights: ['Guest lecture by Dr. Sathish', 'Interactive session'],
    gallery: commonGallery
  },
  { 
    id: 105, 
    slug: 'eye-camp-for-senior-citizens',
    title: 'Eye Camp for Senior Citizens', 
    date: 'July 8, 2025', 
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=800&fit=crop',
    description: 'Free eye screenings and cataract evaluations for senior citizens.',
    highlights: ['300 seniors screened', 'Free glasses distributed'],
    gallery: commonGallery
  },
  { 
    id: 106, 
    slug: 'community-yoga-day',
    title: 'Community Yoga Day', 
    date: 'June 21, 2025', 
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop',
    description: 'A morning of yoga and meditation to promote mental and physical well-being.',
    highlights: ['Open air session', 'Certified instructors'],
    gallery: commonGallery
  },
  { 
    id: 107, 
    slug: 'diabetes-screening-camp',
    title: 'Diabetes Screening Camp', 
    date: 'May 15, 2025', 
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=800&fit=crop',
    description: 'Screening and awareness camp for diabetes management.',
    highlights: ['Free HbA1c tests', 'Diet counseling'],
    gallery: commonGallery
  },
  { 
    id: 108, 
    slug: 'free-dental-check-up-drive',
    title: 'Free Dental Check-up Drive', 
    date: 'April 22, 2025', 
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop',
    description: 'Promoting oral hygiene with free dental checkups.',
    highlights: ['Pediatric dental care', 'Free samples'],
    gallery: commonGallery
  },
  { 
    id: 109, 
    slug: 'mother-and-child-health-camp',
    title: 'Mother & Child Health Camp', 
    date: 'March 8, 2025', 
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=800&fit=crop',
    description: 'Comprehensive health checks for mothers and children on Womens Day.',
    highlights: ['Gynecology consults', 'Pediatric checks'],
    gallery: commonGallery
  },
  { 
    id: 110, 
    slug: 'kidney-awareness-program',
    title: 'Kidney Awareness Program', 
    date: 'February 14, 2025', 
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=800&fit=crop',
    description: 'Raising awareness about kidney health and preventing renal diseases.',
    highlights: ['Expert talks', 'Risk assessment'],
    gallery: commonGallery
  },
  { 
    id: 111, 
    slug: 'spine-health-workshop',
    title: 'Spine Health Workshop', 
    date: 'January 20, 2025', 
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
    description: 'Workshop on spinal health and ergonomics.',
    highlights: ['Interactive demos', 'Q&A'],
    gallery: commonGallery
  },
  { 
    id: 112, 
    slug: 'new-year-health-resolution-camp',
    title: 'New Year Health Resolution Camp', 
    date: 'January 5, 2025', 
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop',
    description: 'Starting the year right with a focus on holistic health.',
    highlights: ['Discounted packages', 'Wellness tips'],
    gallery: commonGallery
  },
];
