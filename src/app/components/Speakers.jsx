"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMicrophone, FaUsers, FaArrowRight } from "react-icons/fa";

export default function Speakers() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Featured Speakers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
            Look Out For Our 2026 Speakers
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Meet the visionary leaders shaping Africa&apos;s mobility future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E1251B]/10 rounded-full blur-xl"></div>
              
              <div className="relative">
                {/* Stats badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-[#f7f0f2] px-4 py-2 rounded-full">
                    <FaMicrophone className="text-[#E1251B] w-4 h-4" />
                    <span className="text-sm font-semibold text-gray-700">49+ Speakers</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#f7f0f2] px-4 py-2 rounded-full">
                    <FaUsers className="text-[#E1251B] w-4 h-4" />
                    <span className="text-sm font-semibold text-gray-700">76% Women</span>
                  </div>
                </div>

                <h3 className="text-[#E1251B] font-bold text-2xl md:text-3xl font-['Josefin_Sans'] leading-tight">
                  Visionary Leaders. <br />
                  <span className="text-gray-800">Transformative Voices.</span>
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  We are excited to share that preparations for the 2026 Women in
                  Transport Africa Conference are well underway. Our distinguished speaker 
                  lineup brings together an impressive group of experts, innovators, and 
                  leaders in the field of women&apos;s transportation issues across Africa.
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  Stay tuned as we update this space with details about the inspirational 
                  voices who will be sharing their insights and experiences at this year&apos;s 
                  event.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Link
                    href="/speakers#pastspeakers"
                    className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                  >
                    See 2026 Speakers
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/program"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-[1em_0] font-semibold hover:border-[#E1251B] hover:text-[#E1251B] transition-all duration-300"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/speakers.webp"
                  alt="Women and Transport Africa Conference Speakers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-[#E1251B] px-3 py-1 rounded-full text-xs font-semibold">
                      2026 Edition
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      49+ Speakers
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E1251B]/5 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#E1251B]/5 rounded-full blur-2xl"></div>
              
              {/* Brand accent border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-[#E1251B]/20 group-hover:ring-[#E1251B]/40 transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}