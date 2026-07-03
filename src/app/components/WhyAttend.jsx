// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const reasons = [
//   {
//     icon: "fa-users-crown",
//     title: "Network & Share Knowledge",
//     items: [
//       "Connect with change-makers from across the continent",
//       "Engage in dynamic brainstorming sessions",
//       "Learn from diverse researchers, policymakers, and practitioners",
//     ],
//     color: "from-blue-500 to-blue-600",
//   },
//   {
//     icon: "fa-podium-star",
//     title: "Showcase Your Ideas",
//     items: [
//       "Present innovative solutions to a global audience",
//       "Gain exposure for donor funding and grants",
//       "Influence policy, research, and transport sector interventions",
//     ],
//     color: "from-purple-500 to-purple-600",
//   },
//   {
//     icon: "fa-user-chart",
//     title: "Accelerate Your Growth",
//     items: [
//       "Empower yourself with knowledge about your rights",
//       "Unlock entrepreneurial opportunities",
//       "Develop skills to overcome industry challenges",
//     ],
//     color: "from-green-500 to-green-600",
//   },
//   {
//     icon: "fa-box-check",
//     title: "Create Actionable Influence",
//     items: [
//       "Develop public transport principles for equity and accessibility",
//       "Form working groups driving long-term change",
//     ],
//     color: "from-orange-500 to-orange-600",
//   },
// ];

// export default function WhyAttend() {
//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
//               Why Attend
//             </span>
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']"
//           >
//             Why You Should Attend
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-lg mt-4"
//           >
//             Network, showcase, grow, and influence change at Africa&apos;s premier mobility convening
//           </motion.p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid lg:grid-cols-2 gap-8 items-start">
//           {/* Left Column - Cards */}
//           <div className="space-y-6">
//             {reasons.map((reason, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20"
//               >
//                 <div className="flex items-start gap-5">
//                   {/* Icon */}
//                   <div className="relative flex-shrink-0">
                    
//                     <div className="absolute -inset-1 bg-[#E1251B]/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 min-w-0">
//                     <h5 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#E1251B] transition-colors">
//                       {reason.title}
//                     </h5>
//                     <ul className="space-y-1.5">
//                       {reason.items.map((item, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
//                           <span className="text-[#E1251B] mt-1 flex-shrink-0">▸</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Column - Image & Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             {/* Main Image */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//               <div className="relative w-full aspect-[4/5]">
//                 <Image
//                   src="/assets/image6.png"
//                   alt="Women in Transport Africa Conference"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
              
//               {/* Overlay with stats */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-white">8+</div>
//                     <div className="text-xs text-white/70 uppercase tracking-wider">Years</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-white">300+</div>
//                     <div className="text-xs text-white/70 uppercase tracking-wider">Participants</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-white">9</div>
//                     <div className="text-xs text-white/70 uppercase tracking-wider">African Countries</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
//                 <div className="text-2xl font-bold text-[#E1251B]">76%</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wider">Women Speakers</div>
//               </div>
//               <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
//                 <div className="text-2xl font-bold text-[#E1251B]">49</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wider">Speakers</div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-2xl p-6 text-white text-center">
//               <p className="font-semibold text-sm mb-2">Ready to make an impact?</p>
//               <a
//                 href="/registration"
//                 className="inline-block bg-white text-[#E1251B] px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
//               >
//                 Secure Your Seat →
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    icon: "fa-users-crown",
    title: "Network & Share Knowledge",
    items: [
      "Connect with change-makers from across the continent",
      "Engage in dynamic brainstorming sessions",
      "Learn from diverse researchers, policymakers, and practitioners",
    ],
  },
  {
    icon: "fa-podium-star",
    title: "Showcase Your Ideas",
    items: [
      "Present innovative solutions to a global audience",
      "Gain exposure for donor funding and grants",
      "Influence policy, research, and transport sector interventions",
    ],
  },
  {
    icon: "fa-user-chart",
    title: "Accelerate Your Growth",
    items: [
      "Empower yourself with knowledge about your rights",
      "Unlock entrepreneurial opportunities",
      "Develop skills to overcome industry challenges",
    ],
  },
  {
    icon: "fa-box-check",
    title: "Create Actionable Influence",
    items: [
      "Develop public transport principles for equity and accessibility",
      "Form working groups driving long-term change",
    ],
  },
];

export default function WhyAttend() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Why Attend
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']"
          >
            Why You Should Attend
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mt-4"
          >
            Network, showcase, grow, and influence change at Africa&apos;s premier mobility convening
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Cards */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    
                    <div className="absolute -inset-1 bg-[#E1251B]/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h5 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#E1251B] transition-colors">
                      {reason.title}
                    </h5>
                    <ul className="space-y-1.5">
                      {reason.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-[#E1251B] mt-1 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/assets/image6.png"
                  alt="Women in Transport Africa Conference"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">8+</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">300+</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">9</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">African Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#E1251B]">76%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Women Speakers</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#E1251B]">49</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Speakers</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-2xl p-6 text-white text-center">
              <p className="font-semibold text-sm mb-2">Ready to make an impact?</p>
              <a
                href="/registration"
                className="inline-block bg-white text-[#E1251B] px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
              >
                Secure Your Seat →
              </a>
            </div>
          </motion.div>
        </div>

        {/* ILO Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#f7f0f2] rounded-3xl p-8 md:p-12 border border-[#E1251B]/10 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1251B]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E1251B]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-12 bg-[#E1251B] rounded-full flex-shrink-0"></div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                According to the{" "}
                <span className="text-[#E1251B]">International Labor Organization (ILO)</span>,
                poor working conditions render the transport sector unappealing to women
              </h3>
            </div>

            <div className="ml-4 pl-4 border-l-2 border-[#E1251B]/30">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Most notably, working time, shift-working (24/7), and the location of employment 
                (e.g. on-board a vessel at sea, driving a truck long distance from home) makes it 
                difficult and at times impossible to reconcile their work and family commitments.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_dialogue/@sector/documents/briefingnote/wcms_234882.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-2.5 rounded-[1em_0] font-semibold text-sm hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
              >
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}