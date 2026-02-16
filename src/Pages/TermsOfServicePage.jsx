import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-[#1B6B7A] rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D4C]">Terms &amp; Conditions</h1>
          </div>
          <p className="text-gray-500 text-sm">Last Updated: February 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h3 className="text-lg font-bold text-[#0B3D4C] mb-4">Authorization for Investigations, Treatment &amp; Payments</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I/We authorize Olir Super Speciality Hospital ("<strong>OLIR</strong>") to collect and process personal, medical, financial, and insurance information for healthcare services, record maintenance, communication, service improvement, legal compliance, and research.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">OLIR may use this information for:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm pl-2">
            <li>Service registration and patient records</li>
            <li>Electronic health record management</li>
            <li>Personalized healthcare communication</li>
            <li>Research and protocol improvement</li>
            <li>Legal and regulatory compliance</li>
            <li>Grievance handling</li>
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-6">

          {/* Disclosure & Transfer */}
          <Section title="Disclosure & Transfer">
            <p className="text-gray-700 leading-relaxed">
              OLIR may share information with affiliated hospitals, doctors, diagnostic centres, service providers, financial institutions, and authorities as required, including entities outside India where legally permitted.
            </p>
          </Section>

          {/* Retention */}
          <Section title="Retention">
            <p className="text-gray-700 leading-relaxed">
              Information is stored as long as necessary for services, compliance, or fraud prevention.
            </p>
          </Section>

          {/* Your Rights */}
          <Section title="Your Rights">
            <p className="text-gray-700 leading-relaxed mb-3">
              You may request access, correction, deletion (where legally allowed), or withdraw consent by contacting the grievance office.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Limiting information may impact service delivery.
            </p>
          </Section>

          {/* Research Use of Samples */}
          <Section title="Research Use of Samples">
            <p className="text-gray-700 leading-relaxed">
              Residual diagnostic samples and anonymized data may be used for medical research unless you opt out.
            </p>
          </Section>

          {/* Communication Consent */}
          <Section title="Communication Consent">
            <p className="text-gray-700 leading-relaxed">
              You consent to receiving SMS, WhatsApp messages, and calls related to healthcare services.
            </p>
          </Section>

          {/* Acknowledgement */}
          <div className="bg-[#1B6B7A]/5 rounded-2xl border border-[#1B6B7A]/20 p-8">
            <p className="text-gray-700 leading-relaxed font-medium">
              By agreeing or using OLIR services, you acknowledge understanding and consent to these Terms &amp; Conditions.
            </p>
          </div>

          {/* Contact */}
          <Section title="Contact Us">
            <p className="text-gray-700 leading-relaxed mb-4">For concerns, contact:</p>
            <div className="flex items-center gap-3 bg-[#1B6B7A]/10 rounded-xl px-5 py-4 w-fit">
              <Mail className="w-5 h-5 text-[#1B6B7A]" />
              <a href="mailto:contactus@olirhospital.com" className="text-[#1B6B7A] font-semibold hover:underline">
                contactus@olirhospital.com
              </a>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
    <h3 className="text-lg font-bold text-[#0B3D4C] mb-4">{title}</h3>
    {children}
  </div>
);

export default TermsOfServicePage;
