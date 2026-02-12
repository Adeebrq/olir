import React from 'react';
import BannerSection from '../Components/Department/BannerSection';
import CentresOfExcellence from '../Components/Department/CentresOfExcellence';
import DiseaseSearch from '../Components/Department/DiseaseSearch';
import DepartmentBlogSection from '../Components/Department/DepartmentBlogSection';
import FAQCallbackSection from './LandingPage/FAQCallbackSection';
import BookAppointment from '../Components/bookingModal';

const Department = () => {
  return (
    <div className="w-full">
      <div className="relative pt-10 pb-10">
        <CentresOfExcellence />
        {/* <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
          <DiseaseSearch />
        </div> */}
      </div>
      
      <DepartmentBlogSection />

      {/* FAQ + BookAppointment Wrapper for absolute positioning */}
      <div className="relative">
          <FAQCallbackSection />
          <BookAppointment />
      </div>
    </div>
  );
};

export default Department;
