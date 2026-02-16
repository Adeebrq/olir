import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D4C]">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm">Last Updated: February 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Olir Super Speciality Hospital ("<strong>OLIR</strong>") is committed to respecting the privacy of every person who shares information with OLIR. Your privacy is important to us, and we strive to take reasonable care and protection of the information we receive from you, the User. In this regard, we adhere to the applicable governing laws in India.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy ("<strong>Privacy Policy</strong>") applies to the collection, storage, processing, disclosure and transfer of your Personal Information (defined below) as per the above-mentioned laws, particularly when you use the website of{' '}
            <a href="https://www.olirhospital.com/" target="_blank" rel="noopener noreferrer" className="text-[#1B6B7A] font-semibold hover:underline">
              https://www.olirhospital.com/
            </a>{' '}
            ("<strong>Website</strong>") operated by OLIR for any information or services ("<strong>Services</strong>").
          </p>
          <p className="text-gray-700 leading-relaxed">
            The terms 'You' or 'Your' refer to you as the User (registered or unregistered) of the Website and/or Services and the terms 'We', 'Us' and 'Our' refer to OLIR.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">

          {/* Section 1 */}
          <Section number="1" title="Access">
            <p className="text-gray-700 leading-relaxed mb-3">
              We collect Your Personal Information directly from You, from third parties and automatically through Our Website. This Personal Information may include device information, login time, IP address and other data listed in Clause 5 below.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may access the Personal Information shared by You with Us by writing to the email address mentioned under Clause 15.1.
            </p>
          </Section>

          {/* Section 2 */}
          <Section number="2" title="Consent">
            <p className="text-gray-700 leading-relaxed mb-3">
              By choosing the Opt-In option on the Website, providing personal information, or using OLIR's services, You freely consent to the collection, storage, processing, disclosure and transfer of Your Personal Information in accordance with this Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You acknowledge that such information is shared voluntarily and understand how it will be used.
            </p>
          </Section>

          {/* Section 3 */}
          <Section number="3" title="Control Over Your Personal Information">
            <p className="text-gray-700 leading-relaxed mb-3">
              You may withdraw consent at any time by writing to{' '}
              <a href="mailto:contactus@olirhospital.com" className="text-[#1B6B7A] font-semibold hover:underline">contactus@olirhospital.com</a>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Requests for correction or rectification of Personal Information may be sent to the Grievance Officer mentioned in Clause 15.1.
            </p>
          </Section>

          {/* Section 4 */}
          <Section number="4" title="Changes to the Privacy Policy">
            <p className="text-gray-700 leading-relaxed">
              OLIR may update this Privacy Policy from time to time without prior notice. The latest update date will be displayed on the Website.
            </p>
          </Section>

          {/* Section 5 */}
          <Section number="5" title="Personal Information Collected">
            <p className="text-gray-700 leading-relaxed mb-3">This includes but is not limited to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm pl-2">
              <li>Patient/Attender/Caregiver/Doctor name</li>
              <li>Age and gender</li>
              <li>Address and contact details</li>
              <li>Email address</li>
              <li>Medical history and health condition</li>
              <li>Financial information for payments</li>
              <li>User registration details</li>
              <li>Interaction records with OLIR representatives</li>
              <li>Website usage data</li>
              <li>IP address, cookies, browser details</li>
              <li>Any voluntarily shared information</li>
            </ul>
            <p className="text-gray-600 text-sm mt-3 italic">(Collectively referred to as "Personal Information")</p>
          </Section>

          {/* Section 6 */}
          <Section number="6" title="How We Collect Personal Information">
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm pl-2">
              <li>Patient registration forms</li>
              <li>During medical consultations</li>
              <li>Website registrations</li>
              <li>Use of website features</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </Section>

          {/* Section 7 */}
          <Section number="7" title="Use of Personal Information">
            <p className="text-gray-700 leading-relaxed mb-3">Personal Information may be used for:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm pl-2">
              <li>Delivering healthcare services</li>
              <li>Improving website and services</li>
              <li>Research and service enhancement</li>
              <li>Appointment reminders and communication</li>
              <li>Promotions and service updates</li>
              <li>Legal compliance</li>
              <li>Business transfers or restructuring</li>
              <li>Fraud prevention</li>
              <li>Aggregated research and analytics</li>
            </ul>
          </Section>

          {/* Section 8 */}
          <Section number="8" title="Sharing and Transfer">
            <p className="text-gray-700 leading-relaxed mb-3">
              You authorize OLIR to share and transfer Personal Information with cloud providers, affiliates, service partners, financial institutions, and regulatory authorities as required for services and legal obligations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              OLIR ensures contractual protection when transferring data internationally.
            </p>
          </Section>

          {/* Section 9 */}
          <Section number="9" title="Cookies">
            <p className="text-gray-700 leading-relaxed">
              OLIR may use cookies to improve website functionality and user experience. Third-party cookies may also be used for service optimization. OLIR does not control external websites and recommends reviewing their privacy policies.
            </p>
          </Section>

          {/* Section 10 */}
          <Section number="10" title="Security">
            <p className="text-gray-700 leading-relaxed mb-3">
              OLIR implements reasonable security measures including encryption, restricted access, and authentication systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we strive to protect Personal Information, no online system is completely secure.
            </p>
          </Section>

          {/* Section 11 */}
          <Section number="11" title="Third-Party Links">
            <p className="text-gray-700 leading-relaxed mb-4">
              Links to third-party websites do not imply endorsement. OLIR is not responsible for their content, policies, or practices.
            </p>
            <h4 className="text-sm font-bold text-[#0B3D4C] mb-2">Do Not Track</h4>
            <p className="text-gray-700 leading-relaxed">
              Currently, OLIR does not respond to Do Not Track signals due to lack of universal standards.
            </p>
          </Section>

          {/* Section 12 */}
          <Section number="12" title="Rectification">
            <p className="text-gray-700 leading-relaxed">
              Requests for correction may be sent to{' '}
              <a href="mailto:contactus@olirhospital.com" className="text-[#1B6B7A] font-semibold hover:underline">contactus@olirhospital.com</a>.
            </p>
          </Section>

          {/* Section 13 */}
          <Section number="13" title="Compliance with Laws">
            <p className="text-gray-700 leading-relaxed">
              Use of the Website must comply with applicable laws.
            </p>
          </Section>

          {/* Section 14 */}
          <Section number="14" title="Storage Period">
            <p className="text-gray-700 leading-relaxed">
              OLIR retains Personal Information for at least three years or as required by law.
            </p>
          </Section>

          {/* Section 15 */}
          <Section number="15" title="Grievance Officer">
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

const Section = ({ number, title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
    <h3 className="text-lg font-bold text-[#0B3D4C] mb-4">
      <span className="text-[#1B6B7A] mr-2">{number}.</span>{title}
    </h3>
    {children}
  </div>
);

export default PrivacyPolicyPage;
