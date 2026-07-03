"use client";

import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaHands, 
  FaUserCheck, 
  FaFlag,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle
} from "react-icons/fa";

export default function CodeOfConduct() {
  const avoidBehaviors = [
    "Harassment in any form including sexual harassment",
    "Invasion of privacy, including:",
    "  • Taking photos or requesting selfies without permission",
    "  • Taking screenshots of conversations without consent",
    "  • Posting personal details about someone else without their permission",
    "Disruptive behavior, excessive drinking, stalking, following, or threatening anyone",
    "Abuse of power (including abuses related to position, wealth, race, or gender)",
    "Ignoring health or safety guidelines that place yourself or others at risk",
    "Homophobia, racism, or any behavior that discriminates against a group or class of people",
  ];

  const promoteBehaviors = [
    "Respecting the boundaries of other attendees",
    "Honoring confidentiality requests by speakers and other attendees",
    "Looking out for one another",
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Safe Space
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            Code of Conduct
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            By attending our conference, you agree to
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Avoiding Behaviors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#f7f0f2] rounded-2xl p-8 border border-[#E1251B]/10 hover:border-[#E1251B]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#E1251B]/10 flex items-center justify-center">
                <FaTimesCircle className="w-6 h-6 text-[#E1251B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                Avoiding These Behaviors
              </h3>
            </div>

            <ul className="space-y-3">
              {avoidBehaviors.map((behavior, index) => {
                const isSubItem = behavior.trim().startsWith("•");
                const isMainItem = !isSubItem;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`flex items-start gap-3 text-gray-600 ${
                      isMainItem ? "text-sm font-medium" : "text-xs pl-6"
                    }`}
                  >
                    {isMainItem ? (
                      <FaExclamationTriangle className="w-4 h-4 text-[#E1251B] mt-0.5 flex-shrink-0" />
                    ) : (
                      <span className="text-[#E1251B] text-sm flex-shrink-0">•</span>
                    )}
                    <span className={isSubItem ? "text-gray-500" : ""}>
                      {behavior}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right Column - Promoting Behaviors + Protocol */}
          <div className="space-y-8">
            {/* Promoting Behaviors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f7f0f2] rounded-2xl p-8 border border-[#E1251B]/10 hover:border-[#E1251B]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                  Promoting These Behaviors
                </h3>
              </div>

              <ul className="space-y-3">
                {promoteBehaviors.map((behavior, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{behavior}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Following Protocol */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#E1251B] to-[#A61F1F] rounded-2xl p-8 text-white relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <FaFlag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-['Josefin_Sans']">
                    Following Protocol
                  </h3>
                </div>

                <p className="text-white/90 text-sm mb-4">
                  If you experience or witness a violation of this Code of Conduct during the conference:
                </p>

                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0 backdrop-blur-sm">
                      1
                    </span>
                    <div>
                      <span className="font-semibold">Contact a WTA Conference organizer immediately</span>
                      <div className="mt-1 space-y-1 text-white/80">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="w-3 h-3" />
                          <span>Juliet Rita, WIT Conference Organizer</span>
                        </div>
                        <div className="flex items-center gap-2 pl-5">
                          <span className="text-xs">witconference@floneinitiative.org</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="w-3 h-3" />
                          <span>Flone Initiative</span>
                        </div>
                        <div className="flex items-center gap-2 pl-5">
                          <span className="text-xs">communications@floneinitiative.org</span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0 backdrop-blur-sm">
                      2
                    </span>
                    <div>
                      <span className="font-semibold">Use our name-optional reporting form</span>
                      <div className="mt-1">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSc_qWWxQayiLmkF__GvFJUpEPpuwe442amg_cvQ330QCnHa1g/viewform"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs hover:bg-white/30 transition-all duration-300"
                        >
                          <FaFileAlt className="w-3 h-3" />
                          WTA 2026 Code of Conduct Grievance Form (Confidential)
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-xs italic">
                    We are committed to addressing all reported incidents promptly and fairly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#f7f0f2] px-6 py-2 rounded-full border border-[#E1251B]/10">
            <FaShieldAlt className="w-4 h-4 text-[#E1251B]" />
            <span className="text-xs text-gray-500">
              <span className="font-bold text-[#E1251B]">Safe</span> and <span className="font-bold text-[#E1251B]">Inclusive</span> space for all attendees
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}