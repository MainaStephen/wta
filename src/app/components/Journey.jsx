"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Journey() {
  const conferences = [
    {
      // year: "2024",
      title: "4th Annual Women & Transport Conference",
      theme: "Inspiring Action for a More Inclusive and Equitable Public Transport System in Africa",
      description:
        "This 4th conference built on the foundations of previous conferences and brought together catalytic change-makers, leaders from different sectors, pioneers in research, practitioners, government officials, non-governmental agencies and the public for a three-day discussion and interaction on inclusivity within the transport sector.",
      color: "from-[#E1251B] to-[#A61F1F]",
    },
    {
      // year: "2023",
      title: "3rd Annual Women & Transport Conference",
      theme: "Inspiring Action for a More Inclusive and Equitable Public Transport System in Africa",
      description:
        "This 3rd conference brought together catalytic change-makers, leaders from different sectors, pioneers in research, practitioners, government officials, non-governmental agencies and the public for a three-day discussion and interaction on inclusivity within the transport sector.",
      color: "from-[#D9726A] to-[#E1251B]",
    },
    // {
    //   // year: "2022",
    //   title: "2nd Annual Women & Transport Conference",
    //   theme: "Building Bridges: Women in Transport Leadership",
    //   description:
    //     "The 2nd conference focused on women's leadership in the transport sector, bringing together emerging leaders and established professionals to share experiences, mentor, and create pathways for women to take on leadership roles across the industry.",
    //   color: "from-[#A61F1F] to-[#D9726A]",
    // },
    // {
    //   // year: "2021",
    //   title: "Inaugural Women & Transport Conference",
    //   theme: "Breaking Barriers: Women in Transport",
    //   description:
    //     "The inaugural conference laid the foundation for what would become Africa's premier platform for women in transport. It brought together pioneers, advocates, and changemakers to address the systemic challenges facing women in the sector.",
    //   color: "from-[#E1251B] to-[#D9726A]",
    // },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Our History
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            Our Journey of Impact
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Transforming transportation, one conference at a time
          </p>
        </motion.div>

  

        {/* Conference Timeline */}
        <div className="relative">
        

          <div className="space-y-8">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0 relative z-10">
                  {/* <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#E1251B]/20">
                    {conf.year}
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#f7f0f2] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Mobile year badge */}
                  <div className="md:hidden inline-block bg-[#E1251B] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {conf.year}
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 h-8 bg-[#E1251B] rounded-full flex-shrink-0"></div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {conf.title}
                    </h4>
                  </div>

                  <h6 className="text-[#E1251B] font-semibold text-sm mb-3">
                    THEME: {conf.theme}
                  </h6>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {conf.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}