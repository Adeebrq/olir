import React, { useEffect } from 'react';
import { CheckCircle, Shield, FileText, Phone, HelpCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookAppointment from '../Components/bookingModal';

const insurancePartners = [
  'Star Health Insurance',
  'HDFC ERGO Health Insurance',
  'ICICI Lombard',
  'Bajaj Allianz',
  'New India Assurance',
  'United India Insurance',
  'National Insurance Company',
  'Oriental Insurance',
  'Niva Bupa (formerly Max Bupa)',
  'Care Health Insurance',
  'ManipalCigna Health Insurance',
  'Aditya Birla Health Insurance',
  'Religare Health Insurance',
  'Cholamandalam MS General Insurance',
  'SBI General Insurance',
  'Tata AIG General Insurance',
];

const tpaPartners = [
  'Medi Assist',
  'Vidal Health (TTK Healthcare)',
  'Heritage Health Insurance TPA',
  'MD India Healthcare TPA',
  'Paramount Health Services TPA',
  'FHPL (Family Health Plan Ltd)',
  'Raksha TPA',
  'Good Health Plan TPA',
  'Medsave Health Insurance TPA',
  'Genins India TPA',
];

const cashlessBenefits = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Minimal Paperwork',
    desc: 'Our dedicated insurance desk handles most of the documentation on your behalf.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Pre-Authorization Support',
    desc: 'We initiate and follow up on pre-authorization requests with your insurer before planned procedures.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'No Upfront Payment',
    desc: 'For cashless claims, you only pay the non-covered or co-pay amount, if any.',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Dedicated Insurance Desk',
    desc: 'Our in-house team is available to assist you with queries, claims, and coordination with your insurer.',
  },
];

const faqs = [
  {
    question: 'What documents do I need for cashless treatment?',
    answer: 'You will need your insurance health card or policy copy, a valid government-issued photo ID (Aadhaar/PAN/Passport), and any referral or previous medical reports. Our insurance desk will guide you through the process.',
  },
  {
    question: 'How do I avail cashless hospitalization?',
    answer: 'At the time of admission, inform our front desk that you wish to avail cashless treatment. Provide your insurance details and our team will send a pre-authorization request to your insurer/TPA. Once approved, you can proceed without upfront payment for covered expenses.',
  },
  {
    question: 'What if my insurance claim is partially approved?',
    answer: 'If the insurer approves only a partial amount, you will need to pay the remaining balance. Our team will clearly communicate the approved and non-covered amounts before your procedure.',
  },
  {
    question: 'Can I get reimbursement if I pay out of pocket?',
    answer: 'Yes. If you pay out of pocket, you can file a reimbursement claim with your insurer. We will provide all necessary documents including discharge summary, bills, investigation reports, and prescriptions.',
  },
  {
    question: 'Is pre-authorization required for emergency admissions?',
    answer: 'For emergencies, treatment begins immediately. Pre-authorization is initiated within 24 hours of admission. Most insurers cover genuine emergencies without prior approval.',
  },
  {
    question: 'Do you accept government health insurance schemes?',
    answer: 'Yes, we accept CGHS (Central Government Health Scheme), ECHS (Ex-Servicemen Contributory Health Scheme), and applicable state government schemes. Please check with our insurance desk for the latest coverage details.',
  },
];

const InsurancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Cashless Benefits */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Hassle-Free Cashless Treatment
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Olir Super Speciality Hospital, we make insurance claims simple. Our in-house team coordinates directly with your insurer so you can focus on recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cashlessBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#1B6B7A]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#1B6B7A]/10 flex items-center justify-center text-[#1B6B7A] mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#0B3D4C] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F0F8FF] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              How Cashless Admission Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Share Insurance Details', desc: 'Present your health insurance card or policy number at the admission desk.' },
              { step: '02', title: 'Pre-Authorization', desc: 'Our team sends a request to your insurer/TPA for approval of the proposed treatment.' },
              { step: '03', title: 'Approval & Treatment', desc: 'Once approved, your treatment proceeds without any upfront payment for covered expenses.' },
              { step: '04', title: 'Settlement', desc: 'The hospital settles the bill directly with your insurer. You only pay co-pay or non-covered charges, if any.' },
            ].map((item, index) => (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="text-4xl font-black text-[#1B6B7A]/20 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-base font-bold text-[#0B3D4C] mb-2 mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
            Empanelled Insurance Companies
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl">
          We are empanelled with all major public and private sector insurance companies in India. If your insurer is not listed below, please contact our insurance desk — we may still be able to assist.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-[#1B6B7A]/50 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-[#1B6B7A] flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TPA Partners */}
      <section className="bg-[#FAFAFA] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Third Party Administrators (TPAs)
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We work with all major TPAs for seamless claim processing and cashless authorization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tpaPartners.map((tpa, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-[#1B6B7A]/50 transition-colors"
              >
                <Shield className="w-5 h-5 text-[#1B6B7A] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{tpa}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
            Government Health Schemes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'CGHS', full: 'Central Government Health Scheme', desc: 'Available for central government employees and pensioners. We are an empanelled hospital under CGHS Chennai.' },
            { name: 'ECHS', full: 'Ex-Servicemen Contributory Health Scheme', desc: 'Healthcare services for ex-servicemen and their dependents. We provide cashless treatment for ECHS cardholders.' },
            { name: 'State Schemes', full: 'Tamil Nadu Government Health Insurance', desc: 'We participate in applicable Tamil Nadu state health insurance schemes for eligible beneficiaries.' },
          ].map((scheme, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#1B6B7A]/10 px-3 py-1 rounded-full inline-block mb-3">
                <span className="text-sm font-bold text-[#1B6B7A]">{scheme.name}</span>
              </div>
              <h3 className="text-base font-bold text-[#0B3D4C] mb-2">{scheme.full}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{scheme.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F0F8FF] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D4C]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#1B6B7A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B3D4C] mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <BookAppointment isInline={true} />
      </div>
    </div>
  );
};

export default InsurancePage;
