import "./LandingPage.css";
import HospitalHeroSection from "../../Components/heroSection";
import WhyChooseUs from "../../Components/chooseUs";
import PatientTools from "../../Components/patientTools";
import Testimonials from "../../Components/testimonials";

// import SEO from "../utils/SEO";
import DirectorsTabs from "./DirectorsTabs";
import Specialties from "./Specialties";
import Update from "./Update";
import FAQCallbackSection from "./FAQCallbackSection";
import HealthcareStats from "../../Components/aboutUs";
import LeadershipTeam from "../../Components/LeadershipTeam";
import BookAppointment from "../../Components/bookingModal";

const LandingPage = () => {
  return (<>
    {/* <SEO description={LANDINGPAGE_DESC} title={LANDINGPAGE_TITLE} keywords={LANDINGPAGE_KEYWORDS}/> */}
    <div className="universal-component-wrapper">
      <HospitalHeroSection />
      <HealthcareStats />
      < LeadershipTeam />
      <Specialties />
      <WhyChooseUs />
      <PatientTools />
      <Testimonials />

      {/* FAQ + BookAppointment Wrapper for absolute positioning */}
      <div className="relative">
        <FAQCallbackSection />
        <BookAppointment />
      </div>
    </div>
  </>
  );
};

export default LandingPage;
