"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaHeart,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaQuoteLeft
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interested: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative h-[65vh] min-h-[350px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/contact.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-[#E1251B]/10"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#E1251B]/30">
                  <FaEnvelope className="w-3 h-3" />
                  <span>Get in Touch</span>
                </div>
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-['Josefin_Sans'] leading-tight mt-4">
                  Contact Us
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                  Have questions about the conference? We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f7f0f2] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] text-2xl mx-auto group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                  <FaPhone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">Call Us</h3>
                <p className="text-[#E1251B] font-semibold text-lg mt-2">+254 768 052 577</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri: 9:00-20:00</p>
                <p className="text-gray-500 text-sm">Sat: 11:00-15:00</p>
                <a
                  href="tel:+254768052577"
                  className="inline-flex items-center gap-2 text-[#E1251B] text-sm font-semibold mt-3 hover:underline"
                >
                  Call Now
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Card 2 - WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#f7f0f2] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl mx-auto group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">WhatsApp</h3>
                <p className="text-gray-600 text-sm mt-2">Chat with us on WhatsApp</p>
                <p className="text-gray-500 text-xs mt-1">Quick responses during business hours</p>
                <a
                  href="https://wa.me/+254768052577"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold mt-3 hover:underline"
                >
                  Chat Now
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Card 3 - Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#f7f0f2] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-4 font-['Josefin_Sans']">Email Us</h3>
                <p className="text-gray-600 text-sm mt-2">Send us an email</p>
                <p className="text-gray-500 text-xs mt-1">We&apos;ll respond within 24 hours</p>
                <a
                  href="mailto:witconference@floneinitiative.org"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mt-3 hover:underline"
                >
                  Send Email
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-16 bg-[#f7f0f2]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                  Do You Have Some <br className="hidden md:block" />
                  <span className="text-[#E1251B]">Questions?</span>
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  We are at your disposal 7 days a week! Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] flex-shrink-0">
                      <FaClock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Working Hours</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9:00-20:00</p>
                      <p className="text-sm text-gray-500">Sat: 11:00-15:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] flex-shrink-0">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Phone</p>
                      <a href="tel:+254768052577" className="text-sm text-[#E1251B] hover:underline">
                        +254 768 052 577
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] flex-shrink-0">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Email</p>
                      <a href="mailto:witconference@floneinitiative.org" className="text-sm text-[#E1251B] hover:underline">
                        witconference@floneinitiative.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] flex-shrink-0">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Location</p>
                      <p className="text-sm text-gray-500">Kenya Police Sacco Plaza, Ngara, Nairobi</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/+254768052577"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-green-700 transition-all duration-300"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp
                </a>

               
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
              >
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-4xl mx-auto">
                      <FaCheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mt-4 font-['Josefin_Sans']">Message Sent!</h3>
                    <p className="text-gray-600 mt-2">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-2xl font-bold text-gray-800 font-['Josefin_Sans']">Send Us a Message</h3>
                    <p className="text-gray-500 text-sm">Fill in the form below and we&apos;ll respond within 24 hours.</p>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name <span className="text-[#E1251B]">*</span>
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E1251B] focus:ring-2 focus:ring-[#E1251B]/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-[#E1251B]">*</span>
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E1251B] focus:ring-2 focus:ring-[#E1251B]/20 transition-all duration-300"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested In
                      </label>
                      <div className="relative">
                        <FaComment className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="interested"
                          value={formData.interested}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E1251B] focus:ring-2 focus:ring-[#E1251B]/20 transition-all duration-300"
                          placeholder="Sponsorship, Registration, Speaking, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message <span className="text-[#E1251B]">*</span>
                      </label>
                      <div className="relative">
                        <FaPaperPlane className="absolute left-4 top-4 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E1251B] focus:ring-2 focus:ring-[#E1251B]/20 transition-all duration-300 resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 shadow-lg shadow-[#E1251B]/20 hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section with Google Maps */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Find Us Here
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="bg-[#f7f0f2] rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] text-2xl flex-shrink-0">
                  <FaMapMarkerAlt className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">Visit Our Office</h3>
                  <p className="text-gray-600 mt-2">
                    Kenya Police Sacco Plaza, Ngara Road, 4th Floor Wing B, Nairobi, Kenya
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href="https://maps.app.goo.gl/SxWtUK2HE6m2iMMy7"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-[#E1251B] font-semibold hover:underline"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Get Directions
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href="tel:+254768052577"
                      className="inline-flex items-center gap-2 text-[#E1251B] font-semibold hover:underline"
                    >
                      <FaPhone className="w-3 h-3" />
                      +254 768 052 577
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3609.6839004953567!2d36.8163143!3d-1.2749612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f179c817c4ea3%3A0xa06d11d867c03079!2sKenya%20police%20Sacco%20Headquarters!5e1!3m2!1sen!2ske!4v1783113313928!5m2!1sen!2ske"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="rounded-2xl"
                  title="Flone Initiative Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}