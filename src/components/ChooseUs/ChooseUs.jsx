import React from "react";
import { FaBrain, FaIndustry, FaPersonPraying } from "react-icons/fa6";
import { GiMatchHead } from "react-icons/gi";
import { GrResume } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";

const features = [
  {
    title: "Personalized Guidance",
    description:
      "Tailored career paths based on your strengths, goals, and market trends.",
    icon: <FaPersonPraying />,
  },
  {
    title: "Expert Mentorship",
    description:
      "Work with industry professionals who guide you through real-world expectations.",
    icon: <FaBrain />,
  },
  {
    title: "Career Matching",
    description: "Find the best-fit careers aligned with your skills and interests.",
    icon: <GiMatchHead />,
  },
  {
    title: "Resume & Interview Prep",
    description:
      "Get personalized feedback on resumes and sharpen your interview skills.",
    icon: <GrResume />,
  },
  {
    title: "Industry Insights",
    description:
      "Stay informed with up-to-date industry trends and hiring expectations.",
    icon: <FaIndustry />,
  },
  {
    title: "Student-Centered Platform",
    description: "We prioritize your growth, not algorithms. Built for humans, not bots.",
    icon: <PiStudent />,
  },
];

const ChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-4 tracking-wide">
          Why Choose Us
        </h2>
        <p className="text-green-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          We’re not just counselors — we’re partners in your career journey. Here’s what sets us apart.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-green-50 rounded-2xl shadow-lg p-7 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl border border-green-200 hover:border-green-400"
            >
              <div className="bg-gradient-to-tr from-green-400 to-green-600 p-5 rounded-full inline-block mb-5 text-white text-3xl shadow-md group-hover:from-green-500 group-hover:to-green-700 transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-green-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-green-800 text-base leading-snug">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
