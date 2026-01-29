import "./Update.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/img1.webp"
import image2 from "../../assets/img2.webp"
import image3 from "../../assets/img3.webp"


const Update = () => {

    const items = [
        { timeLine: "Latest Update", heading: "Xcellent Care & University of Leicester launch Digital Health Centre in India", img: image1 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Neuro Conclave 2024", img: image2 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Hospitals completes 500 robotic cardiac procedures.", img: image3 }
    ]

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };


    return (
        <div className="update-wrapper b-r">
            <div className="d-flex update-text">
                <div>
                    <p style={{ marginBottom: "10px" }} className="big-text semi-bold">LATEST UPDATES</p>
                    <p className="title bold">What's New At Xcellent Care</p>
                </div>
                <button className="update-more">Explore More <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
            </div>

            {/* Slick Carousel */}
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} style={{ padding: "40px", borderRadius: "10px" }}>
                        <UpdateCard title={item.heading} timeLine={item.timeLine} img={item.img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Update;

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

const UpdateCard = ({ timeLine, title, img }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="update-card-wrapper">
            <p className="text">{timeLine}</p>
            <p className="update-card-title">{title}</p>
        </div>
    )
}

