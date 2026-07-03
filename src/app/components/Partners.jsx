"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHandshake, FaArrowRight } from "react-icons/fa";

const partners = [
  { name: "Partner 1", logo: "/assets/partner1.webp" },
  { name: "Partner 2", logo: "/assets/partner2.webp" },
  { name: "Partner 3", logo: "/assets/partner3.webp" },
  { name: "Partner 4", logo: "/assets/partner4.webp" },
  { name: "Partner 5", logo: "/assets/partner5.webp" },
  { name: "Partner 6", logo: "/assets/partner6.webp" },
  { name: "Partner 7", logo: "/assets/partner7.webp" },
  { name: "Partner 8", logo: "/assets/partner8.webp" },
  { name: "Partner 9", logo: "/assets/partner9.webp" },
  { name: "Partner 10", logo: "/assets/partner10.webp" },
  { name: "Partner 11", logo: "/assets/partner11.webp" },
  { name: "Partner 12", logo: "/assets/partner12.webp" },
  { name: "Partner 13", logo: "/assets/partner13.webp" },
  { name: "Partner 14", logo: "/assets/partner14.webp" },
];

export default function Partners() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
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
            Our Partners
          </span>
        
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20 flex items-center justify-center h-28 md:h-32 relative overflow-hidden">
                <div className="relative w-full h-12 md:h-16">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Hover overlay - Brand color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E1251B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E1251B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}