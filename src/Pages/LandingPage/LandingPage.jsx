import { useState } from "react";
import "./LandingPage.css";
import HospitalHeroSection from "../../Components/heroSection";
import WhyChooseUs from "../../Components/chooseUs";
import PatientTools from "../../Components/patientTools";
import Testimonials from "../../Components/testimonials";
import HeroModal from "../../Components/HeroModal";

// import SEO from "../utils/SEO";
import Specialties from "./Specialties";
import Update from "./Update";
import FAQCallbackSection from "./FAQCallbackSection";
import HealthcareStats from "../../Components/aboutUs";
import LeadershipTeam from "../../Components/LeadershipTeam";
import BookAppointment from "../../Components/bookingModal";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (<>
    {/* <SEO description={LANDINGPAGE_DESC} title={LANDINGPAGE_TITLE} keywords={LANDINGPAGE_KEYWORDS}/> */}
    <div className="universal-component-wrapper">
      <HospitalHeroSection />
      <HealthcareStats />
      < LeadershipTeam />
      <Specialties />
      <WhyChooseUs />
      <PatientTools onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />

      {/* FAQ + BookAppointment Wrapper for absolute positioning */}
      <div className="relative">
        <FAQCallbackSection />
        <BookAppointment />
      </div>
    </div>

    {/* Hero Modal */}
    <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
  );
};

export default LandingPage;
