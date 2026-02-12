import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./Specialties.css"
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Department Images
import cardiologyImg from "../../assets/departments/Cardiology.webp";
import entImg from "../../assets/departments/ENT.webp";
import gastroImg from "../../assets/departments/Gastroenterology.webp";
import laparoscopicImg from "../../assets/departments/LaparoscopicSurgery.webp";
import obstetricsImg from "../../assets/departments/Obstetrics.webp";
import plasticImg from "../../assets/departments/Plastic.webp";
import pulmonologyImg from "../../assets/departments/Pulmonology.webp";
import oncoImg from "../../assets/departments/SurgicalOncology.webp";
import dermaImg from "../../assets/departments/dermatogoly.webp";
import internalMedImg from "../../assets/departments/internalMedicine.webp";
import nephroImg from "../../assets/departments/nephrology.webp";
import neuroImg from "../../assets/departments/nuero.webp";
import orthoImg from "../../assets/departments/orthopedics.webp";
import pediaImg from "../../assets/departments/pediatrics.webp";
import uroImg from "../../assets/departments/uro.webp";

const Specialties = () => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const specialtiesData = [
        {
            title: "Neurology & Neurosurgery",
            description: "Specialized care for disorders of the brain, spine, and nervous system. Backed by advanced diagnostics and surgical expertise for complex neurological conditions.",
            image: neuroImg
        },
        {
            title: "Orthopaedics",
            description: "Comprehensive treatment for injuries, joint disorders, and degenerative conditions. From trauma care to long-term rehabilitation, focus remains on mobility and recovery.",
            image: orthoImg
        },
        {
            title: "Urology",
            description: "Diagnosis and management of urinary tract and male reproductive health conditions. Combining medical management with minimally invasive surgical procedures.",
            image: uroImg
        },
        {
            title: "Cardiology",
            description: "Preventive, diagnostic, and interventional services for heart-related conditions. Designed to support early detection, effective treatment, and long-term heart health.",
            image: cardiologyImg
        },
        {
            title: "Obstetrics & Gynaecology",
            description: "Complete women's healthcare across all stages of life. Includes maternity care, high-risk pregnancies, and advanced gynaecological services.",
            image: obstetricsImg
        },
        {
            title: "Paediatrics",
            description: "Dedicated medical care for infants, children, and adolescents. Delivered in a safe, supportive environment focused on growth and wellbeing.",
            image: pediaImg
        },
        {
            title: "Gastroenterology",
            description: "Evaluation and treatment of digestive system disorders. Supported by modern endoscopic procedures and evidence-based medical care.",
            image: gastroImg
        },
        {
            title: "Nephrology",
            description: "Focused care for kidney-related conditions and chronic renal disorders. Emphasis on early intervention, disease management, and dialysis support.",
            image: nephroImg
        },
        {
            title: "Pulmonology",
            description: "Assessment and treatment of respiratory and lung diseases. Care plans address both acute infections and long-term pulmonary conditions.",
            image: pulmonologyImg
        },
        {
            title: "Internal Medicine",
            description: "Comprehensive adult healthcare addressing complex and chronic illnesses. A holistic approach to diagnosis, treatment, and preventive care.",
            image: internalMedImg
        },
        {
            title: "ENT (Otorhinolaryngology)",
            description: "Care for ear, nose, throat, head, and neck conditions. Includes both medical management and surgical interventions when required.",
            image: entImg
        },
        {
            title: "Dermatology",
            description: "Medical and procedural treatment for skin, hair, and nail conditions. Focused on both clinical care and aesthetic skin health.",
            image: dermaImg
        },
        {
            title: "Laparoscopic Surgery",
            description: "Minimally invasive surgical techniques across multiple specialties. Designed to reduce recovery time, pain, and hospital stay.",
            image: laparoscopicImg
        },
        {
            title: "Surgical Oncology",
            description: "Surgical management of cancer with a multidisciplinary approach. Focused on precision, safety, and continuity of care.",
            image: oncoImg
        },
        {
            title: "Plastic & Reconstructive Surgery",
            description: "Procedures aimed at restoring form, function, and appearance. Includes reconstructive surgeries and select cosmetic treatments.",
            image: plasticImg
        }
    ];

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (current) => setActiveIndex(current),
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
        sliderRef.current.slickGoTo(index);
    };

    const handleCardClick = () => {
        const element = document.getElementById('book-appointment');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="speciality-wrapper">
            <p className="big-text semi-bold" >OUR SPECIALTIES</p>
            <p className="main-title">
                <span className="mobile-title">Discover Our<br />Centres<br />of Excellence</span>
                <span className="desktop-title">Discover Our Centres of Excellence</span>
            </p>
            <p className="text" >Experience world-class healthcare at Olir specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties. Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.</p>

            {/* Slick Carousel - REMOVED INLINE PADDING */}
            <Slider ref={sliderRef} {...settings}>
                {specialtiesData.map((data, index) => (
                    <div key={index}>
                        <SpecialtiesCard data={data} onClick={handleCardClick} />
                    </div>
                ))}
            </Slider>

            <div className="mt-16">
                <button className="specialty-btn text" onClick={() => navigate('/department')}>VIEW ALL SPECIALTIES <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
            </div>
        </div>
    );
}

export default Specialties;


function PreviousArrow(props) {
    const { onClick } = props;

    return (
        <div className="previous-arrow" onClick={onClick}>
            <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;

    return (
        <div className="next-arrow" onClick={onClick}>
            <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </div>
    );
}


export const SpecialtiesCard = ({ data, onClick }) => {
    const navigate = useNavigate();

    const handleReadMoreClick = (e) => {
        e.stopPropagation();
        navigate('/comingsoon');
    };

    const handleFindDoctorClick = (e) => {
        e.stopPropagation();
        navigate('/doctors');
    };

    return (
        <div className="specialties-card">
            {/* Text Section */}
            <div className="specialties-card-content">
                <h2 className="specialties-card-title">{data.title}</h2>
                <p className="specialties-card-description text">{data.description}</p>
                <button className="specialties-card-read-more" onClick={handleReadMoreClick}>Read More</button>

                {/* Buttons */}
                <div className="specialties-card-button-group">
                    <button className="outline-btn text" onClick={handleFindDoctorClick}>FIND DOCTOR <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                </div>
            </div>

            {/* Image Section */}
            <div className="specialties-card-image-wrapper">
                <img
                    src={data.image}
                    alt={data.title}
                    className="specialties-card-image"
                />
            </div>

        </div>
    )
}