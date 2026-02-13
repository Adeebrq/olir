import neurologyImg from '../assets/departments/nuero.webp';
import urologyImg from '../assets/departments/uro.webp';
import orthopedicsImg from '../assets/departments/orthopedics.webp';
import cardiologyImg from '../assets/departments/Cardiology.webp';
import obstetricsImg from '../assets/departments/Obstetrics.webp';
import pediatricsImg from '../assets/departments/pediatrics.webp';
import gastroenterologyImg from '../assets/departments/Gastroenterology.webp';
import entImg from '../assets/departments/ENT.webp';
import nephrologyImg from '../assets/departments/nephrology.webp';
import pulmonologyImg from '../assets/departments/Pulmonology.webp';
import internalMedicineImg from '../assets/departments/internalMedicine.webp';
import plasticSurgeryImg from '../assets/departments/Plastic.webp';
import dermatologyImg from '../assets/departments/dermatogoly.webp';
import laparoscopicSurgeryImg from '../assets/departments/LaparoscopicSurgery.webp';
import surgicalOncologyImg from '../assets/departments/SurgicalOncology.webp';

export const specialties = [
  { 
    id: 1, 
    title: 'Neurology & Neurosurgery', 
    slug: 'neurology-neurosurgery',
    image: neurologyImg,
    overview: `The Neurology & Neurosurgery department at Olir Super Speciality Hospital provides comprehensive care for disorders of the brain, spine, and nervous system. Using advanced diagnostics and precision surgical techniques, we ensure safe and effective treatment for complex neurological conditions.`,
    treatments: [
      "Stroke and transient ischemic attacks (TIA)",
      "Epilepsy and seizure disorders",
      "Brain tumors and aneurysms",
      "Spinal cord injuries and degenerative spine conditions",
      "Neurodegenerative disorders like Parkinson’s and Alzheimer’s"
    ],
    services: [
      "Brain and spine surgery",
      "Minimally invasive neurosurgical procedures",
      "Endovascular interventions for aneurysms",
      "Neurorehabilitation programs",
      "Diagnostic imaging: MRI, CT, EEG"
    ],
    facilities: [
      "State-of-the-art operating theatres with neuronavigation",
      "High-resolution MRI and CT scanners",
      "Advanced endoscopic and microscopic surgical equipment"
    ],
    specialists: [
      { name: "Dr. Sathish Kumar T.E.", qualification: "MBBS, MS, MCh – Director & Senior Neurosurgeon" }
    ],
    consultation: [
      "Sudden weakness or numbness in limbs",
      "Severe or recurring headaches",
      "Seizures or loss of consciousness",
      "Balance or coordination issues"
    ],
    faqs: [
      {
        question: "Do you treat stroke, epilepsy, and other neurological disorders?",
        answer: "Comprehensive diagnosis and treatment are provided for stroke, epilepsy, migraines, neuropathies, and other neurological conditions."
      },
      {
        question: "Is 24/7 emergency stroke care available?",
        answer: "Emergency stroke management services are available round the clock."
      },
      {
        question: "Are MRI and CT scan facilities available?",
        answer: "Advanced imaging services, including MRI and CT scans, are available for accurate evaluation."
      },
      {
        question: "Do you perform brain and spine surgeries?",
        answer: "Brain and spine surgeries are performed by qualified neurosurgeons using established surgical protocols."
      },
      {
        question: "When should a patient consult a neurologist?",
        answer: "Consultation is advised for persistent headaches, seizures, weakness, numbness, or sudden speech disturbances."
      }
    ]
  },
  { 
    id: 2, 
    title: 'Orthopaedics', 
    slug: 'orthopaedics',
    image: orthopedicsImg,
    overview: `Our Orthopaedics department delivers advanced care for bones, joints, muscles, and ligaments. From trauma treatment to joint replacement surgeries, we focus on restoring mobility and improving quality of life.`,
    treatments: [
      "Fractures and sports injuries",
      "Arthritis and degenerative joint disease",
      "Spine disorders and scoliosis",
      "Ligament and tendon injuries",
      "Pediatric orthopaedic conditions"
    ],
    services: [
      "Joint replacement (hip, knee, shoulder)",
      "Arthroscopic surgery",
      "Fracture fixation and trauma care",
      "Spinal surgery and minimally invasive procedures",
      "Rehabilitation and physiotherapy"
    ],
    facilities: [
      "High-precision surgical instruments",
      "Digital imaging: X-ray, MRI, CT scan",
      "Modern rehabilitation gyms and equipment"
    ],
    specialists: [
      { name: "Dr. F. Fakhruddin", qualification: "M.S. (Ortho) – Co-Founder" },
      { name: "Dr. Naga Praveen", qualification: "MBBS, D.Ortho, DNB – Co-Founder" }
    ],
    consultation: [
      "Persistent joint pain or swelling",
      "Difficulty walking or performing daily activities",
      "Sudden injuries or fractures",
      "Post-surgery rehabilitation needs"
    ],
    faqs: [
      {
        question: "Do you treat fractures and joint conditions?",
        answer: "Treatment is available for fractures, arthritis, back pain, and sports injuries."
      },
      {
        question: "Is joint replacement surgery available?",
        answer: "Knee and hip replacement procedures are performed by experienced orthopedic surgeons."
      },
      {
        question: "Do you provide emergency trauma care?",
        answer: "Orthopedic trauma services are available 24/7."
      },
      {
        question: "Is physiotherapy available after surgery?",
        answer: "Rehabilitation and physiotherapy services support post-operative recovery."
      },
      {
        question: "What is the recovery period after joint replacement?",
        answer: "Recovery varies by patient; rehabilitation plans are provided to ensure optimal outcomes."
      }
    ]
  },
  { 
    id: 3, 
    title: 'Urology', 
    slug: 'urology',
    image: urologyImg,
    overview: `The Urology department offers diagnosis and treatment for urinary tract and male reproductive system conditions. Our team uses modern minimally invasive techniques to provide effective care with minimal discomfort.`,
    treatments: [
      "Kidney stones and urinary blockages",
      "Prostate enlargement and prostate cancer",
      "Urinary incontinence",
      "Male infertility",
      "Recurrent urinary tract infections"
    ],
    services: [
      "Endoscopic and laparoscopic urological surgeries",
      "Prostate and kidney surgeries",
      "Stone removal and lithotripsy",
      "Urinary reconstruction and catheter care",
      "Preventive screening and consultations"
    ],
    facilities: [
      "High-resolution ultrasound and CT imaging",
      "Minimally invasive surgical tools",
      "Modern operating theatres with laparoscopy support"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MBBS, MS, MCh – Consultant Urologist" }
    ],
    consultation: [
      "Blood in urine",
      "Difficulty urinating or frequent urination",
      "Kidney pain or recurrent infections",
      "Fertility concerns"
    ],
    faqs: [
      {
        question: "Do you treat kidney stones and urinary disorders?",
        answer: "Diagnosis and treatment are available for kidney stones, urinary tract infections, and other urological conditions."
      },
      {
        question: "Is minimally invasive treatment for kidney stones available?",
        answer: "Laser and other minimally invasive procedures are performed based on clinical evaluation."
      },
      {
        question: "Do you manage prostate-related conditions?",
        answer: "Evaluation and treatment for prostate enlargement and related disorders are provided."
      },
      {
        question: "Are diagnostic services available for urological problems?",
        answer: "Comprehensive laboratory and imaging facilities support accurate diagnosis."
      },
      {
        question: "Is emergency urology care available?",
        answer: "Emergency services are available for acute urological conditions."
      }
    ]
  },
  { 
    id: 4, 
    title: 'Cardiology', 
    slug: 'cardiology',
    image: cardiologyImg,
    overview: `The Cardiology department provides preventive, diagnostic, and interventional care for heart diseases. Our experts combine advanced technology with evidence-based treatments to protect and restore cardiovascular health.`,
    treatments: [
      "Coronary artery disease and heart attacks",
      "Heart rhythm disorders (arrhythmia)",
      "Heart failure and valve disorders",
      "Hypertension and high cholesterol",
      "Pediatric and congenital heart conditions"
    ],
    services: [
      "Cardiac catheterization and stenting",
      "Pacemaker and defibrillator implantation",
      "Echocardiography and stress testing",
      "Preventive cardiac health programs",
      "Cardiac rehabilitation"
    ],
    facilities: [
      "Digital cardiac monitoring systems",
      "State-of-the-art cath labs",
      "Advanced imaging: ECG, ECHO, CT angiography"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DM – Senior Cardiologist" }
    ],
    consultation: [
      "Chest pain or pressure",
      "Shortness of breath or dizziness",
      "Palpitations or irregular heartbeat",
      "Family history of heart disease"
    ],
    faqs: [
      {
        question: "Are cardiac diagnostic tests available?",
        answer: "ECG, Echocardiography, TMT, and other cardiac diagnostics are available."
      },
      {
        question: "Is emergency cardiac care available?",
        answer: "Cardiac emergency services operate round the clock."
      },
      {
        question: "Do you perform interventional cardiac procedures?",
        answer: "Procedures such as angiography and angioplasty are performed when indicated."
      },
      {
        question: "Are preventive heart check-up packages offered?",
        answer: "Preventive cardiac screening packages are available."
      },
      {
        question: "When should a cardiology consultation be sought?",
        answer: "Consultation is recommended for chest pain, breathlessness, dizziness, or irregular heartbeat."
      }
    ]
  },
  { 
    id: 5, 
    title: 'Obstetrics & Gynaecology', 
    slug: 'obstetrics-gynaecology',
    image: obstetricsImg,
    overview: `Our Obstetrics & Gynaecology department offers complete care for women at all stages of life. From prenatal care to advanced gynaecological procedures, we ensure safety, comfort, and emotional support.`,
    treatments: [
      "High-risk pregnancies",
      "Menstrual disorders",
      "Fibroids and ovarian cysts",
      "Infertility and reproductive health",
      "Postnatal care and menopause management"
    ],
    services: [
      "Normal and cesarean deliveries",
      "Laparoscopic gynecological surgeries",
      "Fertility evaluation and treatments",
      "Prenatal and postnatal care programs",
      "Preventive screenings and counselling"
    ],
    facilities: [
      "Modern delivery suites and NICU",
      "Laparoscopic and hysteroscopic equipment",
      "Ultrasound and fetal monitoring systems"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MS, PCHM – Consultant Obstetrician & Gynaecologist" }
    ],
    consultation: [
      "Abnormal bleeding or pelvic pain",
      "Pregnancy planning or high-risk pregnancy",
      "Fertility challenges",
      "Menopausal or postnatal concerns"
    ],
    faqs: [
      {
        question: "Do you provide maternity and delivery services?",
        answer: "Comprehensive antenatal, delivery, and postnatal care services are available."
      },
      {
        question: "Is painless delivery offered?",
        answer: "Labor pain management options, including painless delivery, are available."
      },
      {
        question: "Do you treat gynecological conditions such as PCOS?",
        answer: "Diagnosis and treatment are provided for PCOS and other gynecological disorders."
      },
      {
        question: "Are prenatal screening services available?",
        answer: "Routine and advanced prenatal screening services are offered."
      },
      {
        question: "Are female gynecologists available for consultation?",
        answer: "Qualified female specialists are available."
      }
    ]
  },
  { 
    id: 6, 
    title: 'Paediatrics', 
    slug: 'paediatrics',
    image: pediatricsImg,
    overview: `Our Paediatrics department provides comprehensive care for infants, children, and adolescents. We focus on preventive care, early diagnosis, and treatment of acute and chronic conditions, ensuring children’s growth and development are on track.`,
    treatments: [
      "Common childhood infections and fevers",
      "Immunization and preventive care",
      "Growth and developmental disorders",
      "Asthma and respiratory conditions",
      "Pediatric allergies and chronic illnesses"
    ],
    services: [
      "Routine check-ups and vaccinations",
      "Pediatric emergency care",
      "Growth monitoring and nutrition counseling",
      "Management of chronic pediatric diseases",
      "Specialized pediatric consultations"
    ],
    facilities: [
      "Child-friendly diagnostic labs",
      "Pediatric ICU and neonatal care units",
      "Advanced imaging and laboratory support"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DCH – Senior Pediatrician" }
    ],
    consultation: [
      "Persistent fever or infections",
      "Developmental delays or growth concerns",
      "Chronic illnesses or frequent hospitalizations"
    ],
    faqs: [
      {
        question: "Is pediatric consultation available?",
        answer: "Pediatric services are available for newborns, infants, and adolescents."
      },
      {
        question: "Are vaccination services provided?",
        answer: "Immunization services are provided according to national guidelines."
      },
      {
        question: "Is a Neonatal Intensive Care Unit (NICU) available?",
        answer: "A fully equipped NICU is available."
      },
      {
        question: "Do you treat common childhood illnesses?",
        answer: "Diagnosis and management of pediatric infections and respiratory conditions are provided."
      },
      {
        question: "When should emergency pediatric care be sought?",
        answer: "Immediate medical attention is required for high fever, breathing difficulty, seizures, or dehydration."
      }
    ]
  },
  { 
    id: 7, 
    title: 'Gastroenterology', 
    slug: 'gastroenterology',
    image: gastroenterologyImg,
    overview: `The Gastroenterology department specializes in the diagnosis and treatment of digestive system disorders. From routine screenings to advanced interventions, we ensure your gut health is managed efficiently and comfortably.`,
    treatments: [
      "Acid reflux, GERD, and heartburn",
      "Liver diseases including hepatitis and fatty liver",
      "Gallstones and pancreatic disorders",
      "Irritable bowel syndrome (IBS) and inflammatory bowel disease (IBD)",
      "Gastrointestinal cancers"
    ],
    services: [
      "Endoscopy and colonoscopy",
      "Liver function tests and imaging",
      "Minimally invasive gastrointestinal surgeries",
      "Nutritional counseling and dietary management",
      "Preventive screenings for gastrointestinal cancers"
    ],
    facilities: [
      "High-definition endoscopy equipment",
      "Advanced ultrasound and CT imaging",
      "Modern procedure rooms with patient comfort focus"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DM – Consultant Gastroenterologist" }
    ],
    consultation: [
      "Persistent abdominal pain or bloating",
      "Difficulty swallowing or unexplained weight loss",
      "Blood in stool or chronic diarrhea/constipation"
    ],
    faqs: [
      {
        question: "Do you treat digestive disorders?",
        answer: "Evaluation and treatment of gastrointestinal conditions such as ulcers, IBS, and liver disorders are available."
      },
      {
        question: "Are endoscopy services available?",
        answer: "Diagnostic and therapeutic endoscopy services are offered."
      },
      {
        question: "Do you manage liver diseases?",
        answer: "Management of fatty liver, hepatitis, and other liver conditions is provided."
      },
      {
        question: "Are advanced diagnostic services available?",
        answer: "Laboratory and imaging support services are available for accurate diagnosis."
      },
      {
        question: "When should a gastroenterology consultation be considered?",
        answer: "Consultation is advised for persistent abdominal pain, indigestion, or gastrointestinal bleeding."
      }
    ]
  },
  { 
    id: 8, 
    title: 'Nephrology', 
    slug: 'nephrology',
    image: nephrologyImg,
    overview: `The Nephrology department offers expert care for kidney-related disorders, including chronic kidney disease, hypertension-related kidney issues, and acute kidney injuries. We focus on prevention, early detection, and advanced treatment options.`,
    treatments: [
      "Chronic kidney disease (CKD)",
      "Acute kidney injury",
      "Hypertension and kidney-related complications",
      "Kidney stones and urinary tract disorders",
      "Dialysis management and post-transplant care"
    ],
    services: [
      "Hemodialysis and peritoneal dialysis",
      "Kidney biopsy and lab testing",
      "Blood pressure and kidney function monitoring",
      "Kidney transplant evaluation and follow-up"
    ],
    facilities: [
      "Fully equipped dialysis units",
      "High-end laboratory and imaging support",
      "Kidney care and transplant monitoring systems"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DM – Senior Nephrologist" }
    ],
    consultation: [
      "Swelling in limbs or unexplained fatigue",
      "Changes in urine output or color",
      "High blood pressure resistant to treatment"
    ],
    faqs: [
      {
        question: "Is dialysis available at the hospital?",
        answer: "Hemodialysis services are available with continuous monitoring by trained professionals."
      },
      {
        question: "Do you treat chronic kidney disease?",
        answer: "Long-term management for chronic kidney disease and related conditions is provided."
      },
      {
        question: "Are kidney function tests available?",
        answer: "Advanced laboratory services support kidney function assessment."
      },
      {
        question: "How frequently should kidney patients undergo monitoring?",
        answer: "Monitoring schedules are determined based on the patient’s clinical condition."
      },
      {
        question: "Can diabetes and hypertension affect kidney health?",
        answer: "Diabetes and hypertension are significant risk factors and require regular monitoring."
      }
    ]
  },
  { 
    id: 9, 
    title: 'Pulmonology', 
    slug: 'pulmonology',
    image: pulmonologyImg,
    overview: `Our Pulmonology department provides expert care for lung and respiratory disorders, combining advanced diagnostics with individualized treatment plans to ensure optimal lung health.`,
    treatments: [
      "Asthma and chronic obstructive pulmonary disease (COPD)",
      "Pneumonia and lung infections",
      "Sleep apnea and breathing disorders",
      "Interstitial lung disease and pulmonary fibrosis",
      "Lung cancer evaluation and treatment"
    ],
    services: [
      "Pulmonary function tests",
      "Bronchoscopy and minimally invasive lung procedures",
      "Sleep studies and respiratory therapy",
      "Critical care support for severe respiratory conditions"
    ],
    facilities: [
      "Advanced imaging: High-resolution CT scans",
      "Modern bronchoscopy suites",
      "Pulmonary rehabilitation and ICU facilities"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DNB – Consultant Pulmonologist" }
    ],
    consultation: [
      "Persistent cough or breathlessness",
      "Chest pain or recurrent lung infections",
      "Snoring with daytime fatigue (possible sleep apnea)"
    ],
    faqs: [
      {
        question: "Do you treat asthma and chronic respiratory diseases?",
        answer: "Comprehensive care is provided for asthma, COPD, and other lung conditions."
      },
      {
        question: "Are pulmonary function tests available?",
        answer: "Pulmonary diagnostics, including lung function testing, are available."
      },
      {
        question: "Is critical care support available for respiratory emergencies?",
        answer: "ICU facilities are equipped to manage severe respiratory conditions."
      },
      {
        question: "Do you evaluate chronic cough and breathing difficulties?",
        answer: "Assessment and treatment are provided for persistent respiratory symptoms."
      },
      {
        question: "When should a pulmonologist be consulted?",
        answer: "Consultation is advised for prolonged cough, breathlessness, or recurrent respiratory infections."
      }
    ]
  },
  { 
    id: 10, 
    title: 'Internal Medicine', 
    slug: 'internal-medicine',
    image: internalMedicineImg,
    overview: `The Internal Medicine department provides holistic care for adults with acute and chronic illnesses. We focus on accurate diagnosis, preventive care, and management of complex medical conditions.`,
    treatments: [
      "Diabetes, hypertension, and metabolic disorders",
      "Thyroid and endocrine disorders",
      "Chronic infections and autoimmune conditions",
      "Heart, kidney, and lung-related systemic issues",
      "Preventive health and wellness check-ups"
    ],
    services: [
      "Comprehensive health screenings",
      "Chronic disease management",
      "Diagnostic evaluations and lab testing",
      "Lifestyle counseling and preventive programs"
    ],
    facilities: [
      "Advanced diagnostic labs and imaging",
      "Electronic medical records for continuity of care",
      "Multidisciplinary consultation support"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD – Senior Internal Medicine Consultant" }
    ],
    consultation: [
      "Persistent fatigue or unexplained weight changes",
      "Multiple chronic health conditions",
      "Need for preventive health assessment"
    ],
    faqs: [
      {
        question: "Do you manage diabetes and hypertension?",
        answer: "Comprehensive diagnosis and long-term management of chronic medical conditions are provided."
      },
      {
        question: "Are preventive health check-up packages available?",
        answer: "Structured health screening packages are offered for early detection."
      },
      {
        question: "Do you treat infectious diseases and seasonal illnesses?",
        answer: "Diagnosis and treatment of viral, bacterial, and lifestyle-related conditions are available."
      },
      {
        question: "Do you provide ongoing care for chronic diseases?",
        answer: "Individualized treatment plans are developed for long-term management."
      },
      {
        question: "When should a physician consultation be sought?",
        answer: "Consultation is recommended for persistent symptoms, unexplained fatigue, or general health concerns."
      }
    ]
  },
  { 
    id: 11, 
    title: 'ENT (Ear, Nose & Throat)', 
    slug: 'ent',
    image: entImg,
    overview: `The ENT department specializes in the diagnosis and treatment of ear, nose, and throat disorders, offering advanced care for both routine and complex conditions.`,
    treatments: [
      "Hearing loss and ear infections",
      "Sinusitis and nasal obstruction",
      "Throat infections and vocal cord disorders",
      "Sleep apnea and snoring",
      "ENT cancers"
    ],
    services: [
      "Endoscopic sinus and ear surgeries",
      "Hearing assessments and cochlear implants",
      "Laser and microsurgeries for ENT disorders",
      "Allergy testing and management"
    ],
    facilities: [
      "High-definition endoscopic and surgical equipment",
      "Audiology labs and hearing aid support",
      "Modern outpatient ENT diagnostic suites"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MS, DNB – Consultant ENT Surgeon" }
    ],
    consultation: [
      "Persistent ear pain or hearing problems",
      "Nasal obstruction or recurrent sinus infections",
      "Hoarseness or throat discomfort"
    ],
    faqs: [
      {
        question: "Do you treat sinusitis and ear infections?",
        answer: "Medical and surgical management of ENT conditions is provided."
      },
      {
        question: "Are hearing assessments available?",
        answer: "Audiometry and related diagnostic services are available."
      },
      {
        question: "Do you perform endoscopic ENT procedures?",
        answer: "Minimally invasive surgical procedures are performed when indicated."
      },
      {
        question: "What symptoms require ENT consultation?",
        answer: "Persistent ear pain, nasal blockage, throat discomfort, or hearing loss require evaluation."
      },
      {
        question: "Are surgical treatments available for chronic ENT conditions?",
        answer: "Surgical intervention is offered based on medical assessment."
      }
    ]
  },
  { 
    id: 12, 
    title: 'Dermatology', 
    slug: 'dermatology',
    image: dermatologyImg,
    overview: `The Dermatology department offers expert care for skin, hair, and nail conditions. We combine clinical expertise with advanced cosmetic and therapeutic procedures for healthy, radiant skin.`,
    treatments: [
      "Acne, eczema, psoriasis, and dermatitis",
      "Skin infections and fungal diseases",
      "Hair loss and scalp disorders",
      "Cosmetic skin concerns and anti-aging treatments",
      "Skin cancers and mole evaluations"
    ],
    services: [
      "Medical dermatology and skin disease management",
      "Laser therapy and chemical peels",
      "Hair restoration and PRP therapy",
      "Skin cancer screenings and biopsies"
    ],
    facilities: [
      "Advanced laser and dermatology equipment",
      "Digital skin imaging systems",
      "Specialized cosmetic and therapeutic procedure suites"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MD, DDV – Consultant Dermatologist" }
    ],
    consultation: [
      "Persistent skin rashes or lesions",
      "Hair loss or scalp problems",
      "Cosmetic skin concerns or early signs of skin cancer"
    ],
    faqs: [
      {
        question: "Do you treat common skin conditions?",
        answer: "Evaluation and treatment for acne, eczema, psoriasis, and other skin disorders are available."
      },
      {
        question: "Are advanced dermatological procedures offered?",
        answer: "Laser and other specialized skin treatments are provided."
      },
      {
        question: "Do you manage hair and scalp conditions?",
        answer: "Assessment and treatment for hair fall and scalp disorders are available."
      },
      {
        question: "Can skin allergies be treated?",
        answer: "Diagnosis and management of allergic skin conditions are provided."
      },
      {
        question: "Are cosmetic dermatology services available?",
        answer: "Selected cosmetic dermatology procedures are offered under specialist supervision."
      }
    ]
  },
  { 
    id: 13, 
    title: 'Laparoscopic Surgery', 
    slug: 'laparoscopic-surgery',
    image: laparoscopicSurgeryImg,
    overview: `Our Laparoscopic Surgery department specializes in minimally invasive procedures for abdominal, gastrointestinal, and gynecological conditions, ensuring faster recovery and reduced complications.`,
    treatments: [
      "Gallbladder stones and appendicitis",
      "Hernias and abdominal tumors",
      "Gynecological disorders requiring surgery",
      "Obesity and metabolic conditions"
    ],
    services: [
      "Laparoscopic cholecystectomy, appendectomy, and hernia repair",
      "Minimally invasive gastrointestinal surgeries",
      "Robotic-assisted laparoscopic procedures",
      "Postoperative care and rehabilitation"
    ],
    facilities: [
      "State-of-the-art laparoscopic and robotic equipment",
      "Advanced anesthesia and ICU support",
      "Modern operating theatres with patient monitoring"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MS, MCh – Consultant Laparoscopic Surgeon" }
    ],
    consultation: [
      "Abdominal pain or digestive issues",
      "Hernias or surgical conditions diagnosed",
      "Planning for minimally invasive surgery"
    ],
    faqs: [
      {
        question: "Do you perform minimally invasive surgical procedures?",
        answer: "Laparoscopic procedures are performed for selected abdominal conditions."
      },
      {
        question: "Is laparoscopic gallbladder surgery available?",
        answer: "Laparoscopic cholecystectomy is available."
      },
      {
        question: "Is hernia repair performed laparoscopically?",
        answer: "Minimally invasive hernia repair is offered when clinically suitable."
      },
      {
        question: "What is the recovery time after laparoscopic surgery?",
        answer: "Recovery is generally shorter compared to open procedures, depending on the case."
      },
      {
        question: "Are procedures performed by qualified surgeons?",
        answer: "All procedures are performed by trained and experienced surgeons."
      }
    ]
  },
  { 
    id: 14, 
    title: 'Surgical Oncology', 
    slug: 'surgical-oncology',
    image: surgicalOncologyImg,
    overview: `The Surgical Oncology department provides advanced care for patients with cancer, focusing on surgical removal of tumors and multidisciplinary cancer management.`,
    treatments: [
      "Breast, gastrointestinal, and head & neck cancers",
      "Soft tissue and bone tumors",
      "Skin and gynecological cancers"
    ],
    services: [
      "Tumor excision and reconstructive surgery",
      "Laparoscopic and robotic cancer surgeries",
      "Multidisciplinary treatment planning",
      "Postoperative care and rehabilitation"
    ],
    facilities: [
      "Onco-surgical suites with modern imaging",
      "Robotic-assisted and minimally invasive surgery",
      "Integrated cancer care and support services"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MS, MCh – Surgical Oncologist" }
    ],
    consultation: [
      "Suspicious lumps or lesions",
      "Diagnosis of cancer requiring surgical intervention",
      "Post-treatment follow-up and monitoring"
    ],
    faqs: [
      {
        question: "Do you provide surgical treatment for cancer?",
        answer: "Surgical management is available for selected cancer types based on evaluation."
      },
      {
        question: "Is cancer screening available?",
        answer: "Screening services are available for early detection of certain cancers."
      },
      {
        question: "Do you perform breast and gastrointestinal cancer surgeries?",
        answer: "Surgical procedures are performed as per clinical indication."
      },
      {
        question: "Is post-operative care provided?",
        answer: "Comprehensive post-surgical monitoring and follow-up care are offered."
      },
      {
        question: "When should surgical oncology consultation be considered?",
        answer: "Consultation is advised following a confirmed diagnosis or specialist referral."
      }
    ]
  },
  { 
    id: 15, 
    title: 'Plastic & Reconstructive Surgery', 
    slug: 'plastic-reconstructive-surgery',
    image: plasticSurgeryImg,
    overview: `The Plastic & Reconstructive Surgery department offers aesthetic and reconstructive procedures to restore form and function, combining advanced surgical techniques with artistic precision.`,
    treatments: [
      "Trauma-related deformities",
      "Congenital anomalies and cleft repairs",
      "Cosmetic enhancement needs",
      "Burn and scar reconstruction"
    ],
    services: [
      "Reconstructive microsurgery",
      "Cosmetic surgeries (facial, body contouring, breast)",
      "Scar revision and burn management",
      "Hand and craniofacial reconstruction"
    ],
    facilities: [
      "State-of-the-art operating theatres",
      "Microsurgical instruments and imaging support",
      "Modern recovery and rehabilitation units"
    ],
    specialists: [
      { name: "[Doctor Name]", qualification: "MS, MCh – Consultant Plastic & Reconstructive Surgeon" }
    ],
    consultation: [
      "Post-trauma deformities",
      "Congenital anomalies or cosmetic concerns",
      "Scar management and functional reconstruction"
    ],
    faqs: [
      {
        question: "Do you offer reconstructive surgery services?",
        answer: "Reconstructive procedures are available for trauma, burns, and congenital conditions."
      },
      {
        question: "Are cosmetic surgical procedures available?",
        answer: "Selected cosmetic procedures are performed following medical evaluation."
      },
      {
        question: "Is scar revision available?",
        answer: "Scar correction procedures are offered when clinically appropriate."
      },
      {
        question: "What is the recovery period after surgery?",
        answer: "Recovery depends on the type of procedure performed."
      },
      {
        question: "Are surgeries performed by qualified specialists?",
        answer: "Procedures are conducted by trained plastic and reconstructive surgeons."
      }
    ]
  }
];
