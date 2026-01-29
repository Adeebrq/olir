import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Building2, Award, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Heart className="w-7 h-7" />,
      iconColor: "text-[#FF6B9D]",
      title: "Holistic Patient Care",
      description: "Comprehensive healthcare services with a patient-centered approach, ensuring complete wellness and recovery."
    },
    {
      icon: <Users className="w-7 h-7" />,
      iconColor: "text-[#4A90E2]",
      title: "Expert Doctors",
      description: "Led by Medical Director Dr. B. Chendil Nathan and a team of highly qualified specialists across all departments."
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      iconColor: "text-[#4A90E2]",
      title: "Modern Infrastructure",
      description: "State-of-the-art medical equipment and facilities designed for accurate diagnosis and effective treatment."
    },
    {
      icon: <Award className="w-7 h-7" />,
      iconColor: "text-[#FFA726]",
      title: "NABH Accredited",
      description: "Nationally recognized for maintaining the highest standards of healthcare quality and patient safety."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#2B6B9E] to-[#1E5A8E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wide">
              WHY CHOOSE US
            </h2>
            <p className="text-white/90 leading-relaxed text-base">
              We are a leading multi-specialty hospital in Chennai, dedicated to delivering world-class healthcare through compassion, expertise, and innovation. With a relentless focus on patient safety and satisfaction, we go beyond expectations to set new standards in medical care.
            </p>
            <button
              onClick={() => navigate('/comingsoon')}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white">
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
