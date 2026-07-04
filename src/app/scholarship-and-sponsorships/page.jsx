'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


import {
  FaHandshake,
  FaArrowRight,



  FaTicketAlt,
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sponsorships from '../components/Sponsorships';





export default function ScholarshipsSponsorshipsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="h-[60vh] relative overflow-hidden">
          <div
            className="relative h-[60vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/sponsorship.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-[#E1251B]/5"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 shadow-lg shadow-[#E1251B]/30">
                  <FaHandshake className="w-3 h-3" />
                  <span>Sponsorship & Scholarships</span>
                </div>
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-['Josefin_Sans'] leading-tight">
                  Scholarships and
                  <span className="block text-[#E1251B] mt-2">
                    Sponsorship Packages
                  </span>
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                  Partner with us to drive inclusive mobility across Africa.
                  Explore our sponsorship opportunities and scholarship options
                  to support participation in the 8th Women and Transport Africa
                  Conference.
                </p>
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-5 md:py-5 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Partner With Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Josefin_Sans']">
                Conference Scholarships & Corporate Sponsorships
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
                The Conference offers individual scholarships and a variety of
                corporate sponsorship options to accommodate diverse attendance
                needs and budgets. Scholarships are available to support
                participants who may require financial assistance to attend.
              </p>
            </motion.div>
          </div>
        </section>
        <Sponsorships />
      </div>
      <Footer />
    </>
  );
}
