import "./LandingPage.css";
import HospitalHeroSection from "../../Components/heroSection";
import WhyChooseUs from "../../Components/chooseUs";
import PatientTools from "../../Components/patientTools";
import Testimonials from "../../Components/testimonials";


const LandingPage = () => {
  return (<>
    {/* <SEO description={LANDINGPAGE_DESC} title={LANDINGPAGE_TITLE} keywords={LANDINGPAGE_KEYWORDS}/> */}
    <div className="universal-component-wrapper">
      <HospitalHeroSection />
      <       WhyChooseUs />
      <PatientTools/>
      <Testimonials/>

    </div>
  </>
  );
};

export default LandingPage;
