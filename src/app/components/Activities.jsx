// "use client";

// import { motion } from "framer-motion";
// import {
//   FaMicrophone,
//   FaUsers,
//   FaHandshake,
//   FaGlassCheers,
//   FaArrowRight,
// } from "react-icons/fa";

// export default function Activities() {
//   const activities = [
//     {
//       icon: FaMicrophone,
//       label: "Speeches",
//       description: "Inspiring talks from industry leaders",
//       color: "from-red-500 to-red-600",
//       delay: 0,
//     },
//     {
//       icon: FaUsers,
//       label: "Breakout Sessions",
//       description: "Deep-dive discussions on key topics",
//       color: "from-purple-500 to-purple-600",
//       delay: 0.1,
//     },
//     {
//       icon: FaHandshake,
//       label: "Networking",
//       description: "Connect with changemakers",
//       color: "from-blue-500 to-blue-600",
//       delay: 0.2,
//     },
//     {
//       icon: FaGlassCheers,
//       label: "Side Events",
//       description: "Gala dinners & cocktail receptions",
//       color: "from-green-500 to-green-600",
//       delay: 0.3,
//     },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-b from-[#f7f0f2] to-white relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 right-20 w-72 h-72 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#E1251B]/5 rounded-full"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center max-w-2xl mx-auto mb-14"
//         >
//           <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
//             Conference Experience
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
//             Key Activities
//           </h2>
//           <p className="text-gray-600 text-lg mt-3">
//             Engaging sessions designed to inspire, connect, and drive change
//           </p>
//         </motion.div>

//         {/* Activities Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {activities.map((activity, index) => {
//             const Icon = activity.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: activity.delay }}
//                 viewport={{ once: true }}
//                 className="group relative"
//               >
//                 <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/20 h-full flex flex-col items-center">
//                   {/* Icon with gradient background */}
//                   <div className="relative">
//                     <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white text-3xl shadow-lg shadow-[#E1251B]/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#E1251B]/30 transition-all duration-300">
//                       <Icon className="w-8 h-8" />
//                     </div>
//                     {/* Glow effect */}
//                     <div className="absolute -inset-2 bg-[#E1251B]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
//                   </div>

//                   {/* Content */}
//                   <div className="mt-6 flex-1">
//                     <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#E1251B] transition-colors duration-300">
//                       {activity.label}
//                     </h4>
//                     <p className="text-sm text-gray-500 mt-2 leading-relaxed">
//                       {activity.description}
//                     </p>
//                   </div>

//                   {/* Decorative line */}
//                   <div className="mt-4 w-12 h-0.5 bg-[#E1251B]/20 group-hover:w-16 group-hover:bg-[#E1251B] transition-all duration-300 rounded-full"></div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
//             {/* Decorative elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
//             <div className="relative">
//               <h3 className="text-white text-2xl md:text-3xl font-bold font-['Josefin_Sans']">
//                 Ready to be part of the movement?
//               </h3>
//               <p className="text-white/80 mt-2 text-sm md:text-base">
//                 Join us at the 8th Women and Transport Africa Conference
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center mt-6">
//                 <a
//                   href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
//                   className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 duration-300"
//                 >
//                   Register Now
//                   <FaArrowRight className="w-4 h-4" />
//                 </a>
//                 <a
//                   href="/program"
//                   className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
//                 >
//                   View Full Program
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaBook,
  FaBus,
  FaArrowRight,
} from "react-icons/fa";

export default function Activities() {
  const activities = [
    {
      icon: FaMicrophone,
      label: "High-Level Plenary Sessions",
      description:
        "Ministers, development partners, financiers, and global experts deliberating on systemic reforms for inclusive, gender-responsive, & climate-smart mobility.",
      color: "from-red-500 to-red-600",
      delay: 0,
    },
    {
      icon: FaUsers,
      label: "Technical Breakout Sessions",
      description:
        "In-depth engagement on gender-responsive transport, climate-smart mobility, e-mobility financing, safety, GBV prevention, data systems, & informal transport.",
      color: "from-purple-500 to-purple-600",
      delay: 0.1,
    },
    {
      icon: FaLightbulb,
      label: "Innovation & Investment Labs",
      description:
        "Women-led enterprises present solutions; investors engage in structured matchmaking; stakeholders co-design financing models for scalable mobility innovations.",
      color: "from-blue-500 to-blue-600",
      delay: 0.2,
    },
    {
      icon: FaHandshake,
      label: "Policy Co-Creation Workshops",
      description:
        "Multi-sector actors develop actionable frameworks, policy tools, & implementation roadmaps with alignment between policy, finance, and practice.",
      color: "from-green-500 to-green-600",
      delay: 0.3,
    },
    {
      icon: FaBook,
      label: "Knowledge & Research Hub",
      description:
        "Evidence, case studies, & comparative learning from across Africa and globally, supporting evidence-based decision-making & innovation scaling.",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.4,
    },
    {
      icon: FaBus,
      label: "Field Immersion Visits",
      description:
        "Experiential learning at Nairobi's e-mobility hubs and women-led transport enterprises, demonstrating practical models of inclusive mobility in action.",
      color: "from-orange-500 to-orange-600",
      delay: 0.5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f7f0f2] to-white relative overflow-hidden">
      {/* Decorative elements */}
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
            Conference Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            Key Activities
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Engaging sessions designed to inspire, connect, and drive change
          </p>
        </motion.div>

        {/* Activities Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: activity.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/20 h-full flex flex-col items-center">
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white text-xl shadow-lg shadow-[#E1251B]/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#E1251B]/30 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-[#E1251B]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex-1">
                    <h4 className="text-base font-bold text-gray-800 group-hover:text-[#E1251B] transition-colors duration-300 leading-tight">
                      {activity.label}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="mt-4 w-12 h-0.5 bg-[#E1251B]/20 group-hover:w-16 group-hover:bg-[#E1251B] transition-all duration-300 rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <h3 className="text-white text-2xl md:text-3xl font-bold font-['Josefin_Sans']">
                Ready to be part of the movement?
              </h3>
              <p className="text-white/80 mt-2 text-sm md:text-base">
                Join us at the 8th Women and Transport Africa Conference
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <a
                  href="/registration"
                  className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 duration-300"
                >
                  Register Now
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/program"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                >
                  View Full Program
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}