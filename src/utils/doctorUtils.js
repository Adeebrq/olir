import { specialties } from './departmentData';
import doc1 from '../assets/doc1.svg';
import doc2 from '../assets/doc2.svg';
import doc3 from '../assets/doc3.svg';
import doc4 from '../assets/doc4.svg';
import unknownDoc from '../assets/Unknown.png';

const generateSlug = (name) => {
    // Remove "Dr." prefix first
    const cleanName = name.replace(/^Dr\.?\s*/i, '');
    const parts = cleanName.split(/\s+/);
    
    // Filter out initials (single letter or letter+dot)
    const validParts = parts.filter(part => !/^[A-Za-z]\.?$/.test(part));
    
    return "Dr-" + validParts.join('-');
};

export const featuredDoctors = [
    {
        name: "Dr. F. Fakhruddin",
                route: "/doctors/Dr-Fakhruddin",
        qualification: "MBBS, MS - Orthopaedics",
        department: "Orthopaedics",
        image: doc1,
        specialties: "Joint Replacement, Trauma, Arthroscopy, Complex Bone & Joint Conditions",
        designation: "Co-Founder",
        key: "Dr-Fakhruddin",
        oneLiner: "A trusted senior orthopaedic surgeon known for restoring mobility and enhancing quality of life.",
        description: "Dr. Fakhruddin brings decades of hands-on experience in orthopaedics, specializing in joint replacements, arthroscopy, and trauma care. His compassionate, patient-centred approach focuses on effective recovery and long-term musculoskeletal health.",
        experience: "Over 20+ years of clinical experience in orthopaedics and joint replacement surgery, treating trauma, sports injuries, and complex bone and joint conditions in Chennai."
    },
    {
        name: "Dr. T. E. Sathish Kumar",
        route: "/doctors/Dr-Sathish-Kumar",
        qualification: "MBBS, MS, MCh Neurosurgery",
        department: "Neurology",
        image: doc2,
        specialties: "Brain Tumour, Epilepsy, Spine Surgery, Nervous System Conditions",
        designation: "Director & Senior Neurosurgeon",
        key: "Dr-Sathish-Kumar",
        oneLiner: "A renowned neurosurgeon recognised for precision, calm judgement, and empathetic care.",
        description: "Dr. Sathish Kumar brings deep expertise in neurosurgical procedures such as brain tumour therapy, epilepsy surgery, and spine interventions. He combines technical excellence with tailored care to ensure each patient receives thorough evaluation and optimal surgical outcomes.",
        experience: "Over 15+ years of experience as a neurosurgeon, managing complex brain, spine, and nervous system conditions using advanced surgical techniques across reputed clinics in Chennai."
    },
    {
        name: "Dr. Nandini Govindarajan",
          route: "/doctors/Dr-Nandini-Govindarajan",
        qualification: "MBBS, MD (Pathology)",
        department: "Pathology",
        image: doc3,
        specialties: "Diagnostic Oncopathology, Breast Pathology, Bone & Soft Tissue Conditions",
        designation: "Senior Consultant Pathologist",
        key: "Dr-Nandini-Govindarajan",
        oneLiner: "A highly skilled breast pathology expert committed to precise diagnosis and compassionate care.",
        description: "Dr. Nandini specializes in diagnostic pathology for breast, bone, and soft tissue conditions, playing a vital role in guiding effective cancer care. Her expertise supports accurate diagnosis and personalised treatment planning for patients and clinical teams.",
        experience: "Senior consultant pathologist with a subspecialty focus on breast and soft tissue malignancies. Experienced diagnostic oncopathologist contributing to comprehensive breast health evaluation and pathology at Chennai Breast Centre, including advanced diagnostic biopsies and tumour analysis."
    },
    {
        name: "Dr. Naga Praven",
         route: "/doctors/Dr-Naga-Praven",
        qualification: "MBBS, D.Ortho, DNB (Ortho)",
        department: "Orthopaedics",
        image: doc4,
        specialties: "Trauma, Sports Medicine, Spine, Degenerative Bone & Joint Conditions",
        designation: "Consultant Orthopaedic Surgeon",
        key: "Dr-Naga-Praven",
        oneLiner: "A dedicated orthopaedic specialist blending surgical skill with personalised patient care.",
        description: "Dr. Naga Praven offers expert orthopaedic treatment using both surgical and non-surgical methods for trauma, joint replacement, and arthroscopy. His approach combines medical precision with genuine empathy to help patients return to active life.",
        experience: "Consultant orthopaedic surgeon with 10+ years of experience in treating fractures, sports injuries, degenerative bone and joint conditions, and spine issues in adult and paediatric patients."
    }
];

export const getAllDoctors = () => {
    /* 
    // Commenting out detailed logic for now as requested
    const otherSpecialists = specialties.flatMap(dept => {
        if (!dept.specialists) return [];
        return dept.specialists.map(specialist => {
            // Check if this specialist is already in featured list
            const isFeatured = featuredDoctors.some(fd => 
                specialist.name.toLowerCase().includes("fakhruddin") || 
                specialist.name.toLowerCase().includes("sathish") ||
                 // flexible spelling for Naga Praven/Praveen
                (specialist.name.toLowerCase().includes("naga") && specialist.name.toLowerCase().includes("prav")) ||
                specialist.name.toLowerCase().includes("nandini")
            );

            if (isFeatured) return null;

            return {
                ...specialist,
                department: dept.title,
                deptSlug: dept.slug,
                image: unknownDoc,
                key: generateSlug(specialist.name)
            };
        }).filter(Boolean);
    });

    return [...featuredDoctors, ...otherSpecialists];
    */

    // Only return featured doctors for now
    return [...featuredDoctors];
};

export const getDoctorBySlug = (slug) => {
    const allDoctors = getAllDoctors();
    return allDoctors.find(doc => {
        if (doc.key === slug) return true;
        // Check if generated slug matches
        const docSlug = generateSlug(doc.name); 
        return docSlug === slug;
    });
};

export { generateSlug };
