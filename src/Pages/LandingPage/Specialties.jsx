import { useRef, useState } from "react";
import Slider from "react-slick";
import "./Specialties.css"
import img from "../../assets/image.png"
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Specialties = () => {

    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = new Array(5).fill(<SpecialtiesCard />)

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setActiveIndex(current),
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="speciality-wrapper">
            <p className="big-text semi-bold" >OUR SPECIALTIES</p>
            <p className="title bold">Discover Our Centres of Excellence</p>
            <p className="text" >Experience world-class healthcare at Xcellent specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties. Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.</p>
            {/* Tabs */}
            {/* <div className="speciality-tabs">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`speciality-tab-item ${activeIndex === index ? "active" : ""}`}
                    >
                        Tab {index + 1}
                    </button>
                ))}
            </div> */}

            {/* Slick Carousel */}
            <Slider ref={sliderRef} {...settings}>
                {items.map((item, index) => (
                    <div key={index} style={{ position: "relative", padding: "40px", borderRadius: "10px" }}>
                        <h2>{item}</h2>
                    </div>
                ))}
            </Slider>

            <button className="specialty-btn text">VIEW ALL SPECIALTIES <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
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


export const SpecialtiesCard = () => {
    return (
        <div className="specialties-card">
            {/* Text Section */}
            <div className="specialties-card-content">
                <h2 className="specialties-card-title">Neurology</h2>
                <p className="specialties-card-description text">The Neurology department at Xcellentcare Hospital provides cutting-edge care for a variety of neurological conditions. Our services include advanced diagnostic imaging, comprehensive treatment plans, and specialized therapies for disorders such as...</p>
                <button className="specialties-card-read-more">Read More</button>

                <h4 className="specialties-card-sub-heading">Top Specialties & Procedures</h4>
                <div className="divider"></div>

                {/* Buttons */}
                <div className="specialties-card-button-group">
                    <button className="outline-btn text">FIND DOCTOR <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                </div>
            </div>

            {/* Image Section */}
            <div className="specialties-card-image-wrapper">
                <img
                    src={img}
                    alt="Neurology Brain Lab"
                    className="specialties-card-image"
                />
            </div>

        </div>
    )
}