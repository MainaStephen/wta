"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptop,
  FaClock,
  FaTicketAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export default function Details() {
  const details = [
    {
      icon: FaCalendarAlt,
      title: "Dates",
      content: "December 2 - 4, 2026",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Simba Corp (Mitsubishi) Aspire Centre, Westlands, Nairobi, Kenya",
    },
    {
      icon: FaLaptop,
      title: "Attendance Mode",
      content: "Physical (Group or individual attendance)",
    },
    {
      icon: FaClock,
      title: "Time",
      content: "9:00 am - 5:00 pm, EAT",
    },
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
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
            Event Details
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Join us for Africa&apos;s premier transport conference
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left - Description (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E1251B]/10 rounded-full blur-xl"></div>
              <div className="relative">
                <h3 className="text-[#E1251B] font-bold text-2xl md:text-3xl font-['Josefin_Sans'] leading-tight">
                  Women and Transport Africa <br />Conference 2026
                </h3>
                <h4 className="text-gray-700 font-semibold mt-3 text-lg">
                  8th Annual Conference
                </h4>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  The 8th Women and Transport Africa Conference is a flagship continental 
                  and international high-level convening designed to accelerate people-centered, 
                  gender-responsive, inclusive, and climate-resilient transport systems across Africa.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    href="/registration#tickets"
                    className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                  >
                    <FaTicketAlt className="w-4 h-4" />
                    Get Tickets
                  </Link>
                  <Link
                    href="/program"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-[1em_0] font-semibold hover:border-[#E1251B] hover:text-[#E1251B] transition-all duration-300"
                  >
                    <FaCalendarCheck className="w-4 h-4" />
                    View Program
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Image (spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-1"
          >
            <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/image6.png"
                alt="Women and Transport Africa Conference"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[#E1251B]/20 group-hover:ring-[#E1251B]/40 transition-all duration-300"></div>
              {/* Brand accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E1251B] to-transparent opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#E1251B] to-transparent opacity-20"></div>
            </div>
          </motion.div>

          {/* Right - Details (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#f7f0f2] rounded-2xl p-6 md:p-8">
              <h4 className="text-[#E1251B] font-bold text-xl mb-6 font-['Josefin_Sans']">
                Conference Details
              </h4>

              <div className="space-y-4">
                {details.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E1251B] shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
                            {item.title}
                          </h5>
                          <p className="text-gray-600 text-sm md:text-base">
                            {item.content}
                          </p>
                        </div>
                      </div>
                      {index < details.length - 1 && (
                        <hr className="border-gray-200/60 my-3" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick stats */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#E1251B]">400+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#E1251B]">35+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#E1251B]">49</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Speakers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}