
import React, { useState } from "react";
import "./DirectorsTabs.css"; // same CSS you wrote (see below)
import image1 from "../../assets/senthil.jpg"
import image2 from "../../assets/charumathi.png"
import image3 from "../../assets/DrNatarajan.png"
import image4 from "../../assets/choa.png"

const DirectorsTabs = () => {
  const [activeTab, setActiveTab] = useState("chairman");

  return (
    <div className="page-wrapper">
      <div className="container-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "chairman" ? "active" : ""}`}
            onClick={() => setActiveTab("chairman")}
          >
            Chairman
          </button>
          <button
            className={`tab ${activeTab === "managing" ? "active" : ""}`}
            onClick={() => setActiveTab("managing")}
          >
            Managing Director
          </button>
          <button
            className={`tab ${activeTab === "medical" ? "active" : ""}`}
            onClick={() => setActiveTab("medical")}
          >
            Medical Director
          </button>
          <button
            className={`tab ${activeTab === "pranic" ? "active" : ""}`}
            onClick={() => setActiveTab("pranic")}
          >
            Pranic Healing
          </button>
        </div>

        {/* Chairman */}
        <div
          className={`tab-content ${activeTab === "chairman" ? "active" : ""
            }`}
        >
          <div className="content-text">
            <h3 className="big-text semi-bold">MEET OUR MEDICAL DIRECTOR</h3>
            <h1 className="title bold">Message From Our Chairman</h1>
            <p className="text">
              Dr. B. Chendil Nathan, MBBS, M.Ch (Neuro), is the founder of the
              London Neuro Clinic located in Velachery, Chennai. With 30 years
              of experience in neurosurgery, he began his journey in 1986 after
              completing a 5-year M.Ch. program in Neurosurgery at Madras
              Medical College. He achieved his Diplomate in Neurosurgery from
              AIIMS, Delhi, in 1992 on his first attempt. From 1992 to 1998, he
              worked at the renowned Walton Neurosurgical Centre in Liverpool,
              UK, where he also passed the FRCS and the Intercollegiate
              Neurosurgery examination, a distinction awarded by all four Royal
              Colleges of the UK, making him the only neurosurgeon in South
              India to receive this honor.
            </p>
            <br />
            <p className="text">
              Upon returning to India in 1998, he served as a Professor in the
              Neurosurgery Department at GH, Chennai, until 2005. In 2000, he
              established his clinic in Velachery and practiced at Xcellent Care
              Hospitals, gaining a stellar reputation among neurological
              specialists in Chennai.
            </p>
            <br />
            <p className="text">
              In June 2006, he launched the Xcellent Care Centre in
              Ekkattuthangal, Chennai. By September 2010, he opened the Xcellent
              Care Super Specialty Hospital (P) Ltd in Velachery, where he
              serves as Chairman. This hospital caters to a diverse patient
              base, supported by 40 specialized visiting consultants and 24/7
              emergency services.
            </p>
          </div>
          <div className="content-image">
            <img
              src={image1}
              alt="Chairman"
            />
          </div>
        </div>

        {/* Managing Director */}
        <div
          className={`tab-content ${activeTab === "managing" ? "active" : ""
            }`}
        >
          <div className="content-text">
            <h3 className="big-text semi-bold">MEET OUR MANAGING DIRECTOR</h3>
            <h1 className="title bold">Message From Our Managing Director</h1>
            <p className="text">
              Our Managing Director brings over 25 years of healthcare
              management experience, having worked with leading hospitals across
              India and internationally. With an MBA from a premier business
              school and specialized training in healthcare administration, they
              have been instrumental in shaping our hospital&apos;s vision and
              operational excellence.
            </p>
            <br />
            <p className="text">
              Under their leadership, the hospital has achieved numerous
              accreditations and has been recognized for patient care
              excellence. They have implemented cutting-edge management
              practices that have improved patient outcomes while maintaining
              cost-effectiveness.
            </p>
            <br />
            <p className="text">
              Their strategic vision focuses on integrating advanced medical
              technology with compassionate care, ensuring that our hospital
              remains at the forefront of medical innovation while staying true
              to our core values of patient-centered care.
            </p>
          </div>
          <div className="content-image">
            <img
              src={image2}
              alt="Managing Director"
            />
          </div>
        </div>

        {/* Medical Director */}
        <div
          className={`tab-content ${activeTab === "medical" ? "active" : ""}`}
        >
          <div className="content-text">
            <h3 className="big-text semi-bold">MEET OUR MEDICAL DIRECTOR</h3>
            <h1 className="title bold">Message From Our Medical Director</h1>
            <p className="text">
              Dr. Sarah Williams, MD, FRCP, serves as our Medical Director with
              over 20 years of clinical excellence in internal medicine and
              hospital administration. She completed her medical education at
              Johns Hopkins University and her residency at Massachusetts
              General Hospital.
            </p>
            <br />
            <p className="text">
              As Medical Director, she oversees all clinical operations,
              ensuring the highest standards of medical care across all
              departments. Her expertise in quality improvement and patient
              safety has led to significant enhancements in our clinical
              protocols and patient outcomes.
            </p>
            <br />
            <p className="text">
              Dr. Williams is passionate about medical education and regularly
              conducts training programs for our medical staff. She believes in
              evidence-based medicine combined with personalized patient care,
              making sure every patient receives treatment tailored to their
              specific needs.
            </p>
          </div>
          <div className="content-image">
            <img
              src={image3}
              alt="Medical Director"
            />
          </div>
        </div>

        {/* Pranic Healing */}
        <div
          className={`tab-content ${activeTab === "pranic" ? "active" : ""}`}
        >
          <div className="content-text">
            <h3 className="big-text semi-bold">HOLISTIC HEALING APPROACH</h3>
            <h1 className="title bold">Pranic Healing Department</h1>
            <p className="text">
              Our Pranic Healing department represents our commitment to
              integrative medicine, combining traditional medical approaches
              with complementary healing therapies. Pranic Healing is a no-touch
              energy healing system that works on the principle that the body
              has the innate ability to heal itself.
            </p>
            <br />
            <p className="text">
              Led by certified Pranic Healing practitioners trained under Master
              Choa Kok Sui&apos;s lineage, our team offers treatments for
              various conditions including stress, anxiety, chronic pain, and
              recovery support for post-surgical patients. The therapy works by
              manipulating the body&apos;s energy field to accelerate the
              healing process.
            </p>
            <br />
            <p className="text">
              We have integrated Pranic Healing into our comprehensive care
              approach, working alongside our medical treatments to provide
              holistic healing. Many of our patients have reported improved
              recovery times and enhanced well-being through this complementary
              therapy. Our department offers individual sessions, group healing
              sessions, and also conducts workshops to teach patients
              self-healing techniques.
            </p>
          </div>
          <div className="content-image">
            <img
              src={image4}
              alt="Pranic Healing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsTabs;
