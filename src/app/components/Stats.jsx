"use client";

import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaGlobe, 
  FaMicrophone, 
  FaCalendarCheck,
  FaUserTie,
  FaChalkboard,
  FaEye,
  FaArrowUp
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    { 
      value: 690, 
      label: "Attendees", 
      icon: FaUsers,
      delay: 0
    },
    { 
      value: 35, 
      label: "Countries", 
      icon: FaGlobe,
      delay: 0.05
    },
    { 
      value: 64, 
      label: "Panelists", 
      icon: FaMicrophone,
      delay: 0.1
    },
    { 
      value: 135, 
      label: "Avg. Attendees", 
      icon: FaUsers,
      delay: 0.15
    },
    { 
      value: 48, 
      label: "Female Panelists", 
      icon: FaUserTie,
      delay: 0.2
    },
    { 
      value: 23, 
      label: "Sessions", 
      icon: FaChalkboard,
      delay: 0.25
    },
    { 
      value: 62761, 
      label: "Impressions", 
      icon: FaEye,
      delay: 0.3
    },
  ];

  // Split stats into two rows
  const firstRow = stats.slice(0, 4);
  const secondRow = stats.slice(4);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f7f0f2] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Driving Change Across Continents, One Connection at a Time
          </p>
        </motion.div>

        {/* Stats Grid - Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {firstRow.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/30 relative overflow-hidden">
                  {/* Decorative gradient bar - Brand colors */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#E1251B] group-hover:h-2 transition-all duration-300"></div>
                  
                  {/* Icon - Brand color */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E1251B] flex items-center justify-center text-white text-2xl mx-auto shadow-lg shadow-[#E1251B]/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#E1251B]/30 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Value - Brand color on hover */}
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 font-['Josefin_Sans'] group-hover:text-[#E1251B] transition-colors duration-300">
                    {stat.value.toLocaleString()}
                    {stat.label === "Impressions" && "+"}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Decorative number background - Brand color */}
                  <div className="absolute -right-4 -bottom-4 text-8xl font-bold text-[#E1251B]/5 select-none">
                    {stat.value.toString().charAt(0)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid - Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-3xl mx-auto">
          {secondRow.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/30 relative overflow-hidden">
                  {/* Decorative gradient bar - Brand colors */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#A61F1F] group-hover:h-2 transition-all duration-300"></div>
                  
                  {/* Icon - Brand color */}
                  <div className="w-14 h-14 rounded-2xl bg-[#A61F1F] flex items-center justify-center text-white text-2xl mx-auto shadow-lg shadow-[#A61F1F]/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#A61F1F]/30 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Value - Brand color on hover */}
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 font-['Josefin_Sans'] group-hover:text-[#A61F1F] transition-colors duration-300">
                    {stat.value.toLocaleString()}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Decorative number background - Brand color */}
                  <div className="absolute -right-4 -bottom-4 text-8xl font-bold text-[#A61F1F]/5 select-none">
                    {stat.value.toString().charAt(0)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#f7f0f2] px-6 py-3 rounded-full border border-[#E1251B]/10">
            <FaArrowUp className="text-[#E1251B] w-4 h-4" />
            <span className="text-sm text-gray-600">
              <span className="font-bold text-[#E1251B]">8+</span> years of impact and growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}