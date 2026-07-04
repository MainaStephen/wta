'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFileDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaTicketAlt,
  FaChevronRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WelcomePacketPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="py-10 relative min-h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/package.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-[#E1251B]/10"></div>

            <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block"></div>
            <div className="absolute bottom-20 right-40 w-32 h-32 border border-white/5 rounded-full hidden lg:block"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#E1251B]/30">
                    <FaFileDownload className="w-3 h-3" />
                    <span>Welcome Packet 2026</span>
                  </div>
                  <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-['Josefin_Sans'] leading-tight mt-4">
                    WELCOME PACKET <br className="hidden sm:block" />
                    <span className="text-[#E1251B]">2026</span>
                  </h1>
                  <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl leading-relaxed font-['Josefin_Sans']">
                    Hujambo! Welcome to the Women and Transport Africa
                    Conference 2026.
                  </p>
                  <p className="text-white/70 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
                    The welcome packet is an information document designed to
                    aid you with your preparations for travel to Nairobi. You
                    will find conference details, travel advice, and
                    accommodation options in it.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <a
                      href="/wp-content/uploads/2025/12/Welcome-Packet-2025-1.pdf"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                      <FaFileDownload className="w-4 h-4" />
                      Get The Brochure
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      href="/registration"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                    >
                      <FaTicketAlt className="w-4 h-4" />
                      Register Now
                    </Link>
                  </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/welcome-packet.webp"
                      alt="Welcome Packet 2026"
                      width={500}
                      height={650}
                      className="w-full h-auto object-cover"
                    />
                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-3xl ring-4 ring-[#E1251B]/20 group-hover:ring-[#E1251B]/40 transition-all duration-300"></div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 hidden md:flex">
                    <div className="w-12 h-12 rounded-full bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B]">
                      <FaFileDownload className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Download</p>
                      <p className="text-sm font-bold text-gray-800">
                        Welcome Packet
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f7f0f2] rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="w-full flex flex-col md:flex-row items-start gap-4 md:gap-6">
                {/* Optional: Add an icon here if needed */}
                {/* <div className="flex-shrink-0">
          <FaEnvelope className="w-8 h-8 text-[#E1251B]" />
        </div> */}

                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    We want to ensure that your experience at the conference is
                    as hassle-free as possible. If you have any questions before
                    or during your travels, contact us:
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                      <span className="font-semibold text-[#E1251B] sm:min-w-[120px]">
                        Juliet Rita
                      </span>
                      <span className="text-gray-600">
                        WIT Conference Organizer
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                      <span className="font-semibold text-[#E1251B] sm:min-w-[120px]">
                        Email
                      </span>
                      <a
                        href="mailto:witconference@floneinitiative.org"
                        className="text-[#E1251B] hover:underline break-words"
                      >
                        witconference@floneinitiative.org
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                      <span className="font-semibold text-[#E1251B] sm:min-w-[120px]">
                        Flone Initiative
                      </span>
                      <a
                        href="mailto:communications@floneinitiative.org"
                        className="text-[#E1251B] hover:underline break-words"
                      >
                        communications@floneinitiative.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conference Details Section */}
        <section className="py-12 md:py-16 bg-[#f7f0f2]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Conference Details
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Everything You Need to Know
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-600 text-lg mt-4">
                Find all the essential information for your travel to Nairobi
                and conference participation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - Venue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">
                  Venue
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Simba Corp (Mitsubishi) Aspire Centre, Westlands, Nairobi,
                  Kenya
                </p>
                <a
                  href="https://maps.app.goo.gl/mfs894MrDx9MRkzS7"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-[#E1251B] text-sm font-semibold mt-3 hover:underline group"
                >
                  Get Directions
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Card 2 - Dates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                  <FaCalendarAlt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">
                  Dates
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  December 2 - 4, 2026
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Three days of transformative dialogue
                </p>
              </motion.div>

              {/* Card 3 - Registration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B]/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                  <FaTicketAlt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">
                  Registration
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Register now to secure your seat at the conference
                </p>
                <Link
                  href="/registration"
                  className="inline-flex items-center gap-1 text-[#E1251B] text-sm font-semibold mt-3 hover:underline group"
                >
                  Register Here
                  <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
