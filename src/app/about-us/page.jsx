'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaEye,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaQuoteLeft,
  FaHandshake,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaArrowRight,
  FaUserTie,
  FaUserGraduate,
  FaCity,
  FaMicroscope,
  FaCheckCircle,
  FaBullseye,
} from 'react-icons/fa';
import Header from '../components/Header';
import CodeOfConduct from '../components/CodeOfConduct';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faq';
import Footer from '../components/Footer';


export default function AboutUs() {


  return (
    <>
    <Header/>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/about-hero2.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-[#E1251B]/5"></div>

            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E1251B]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-[#E1251B]/5 to-transparent rounded-tr-full"></div>

            <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block"></div>
            <div className="absolute bottom-20 right-40 w-32 h-32 border border-white/5 rounded-full hidden lg:block"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-white font-bold text-5xl font-['Josefin_Sans'] leading-tight">
                    Annual Women and Transport
                    <span className="block text-[#E1251B] mt-2">
                      Africa Conference
                    </span>
                  </h1>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-12 h-0.5 bg-[#E1251B]"></div>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold font-['Josefin_Sans']">
                      Empowering Women, Transforming Transport
                    </h2>
                  </div>

                  <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
                    The Women and Transport Africa (WTA) Conference is an annual
                    gathering dedicated to advancing gender equality,
                    inclusivity, and innovation in Africa&apos;s transport
                    sector.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
                      className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                      Register Now
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="#sections"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] hover:border-white transition-all duration-300"
                    >
                      Learn More
                      <span className="w-5 h-5 rounded-full border border-white/30 hover:border-[#E1251B] flex items-center justify-center text-xs transition-all duration-300">
                        ↓
                      </span>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden lg:grid grid-cols-2 gap-4"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                      400+
                    </div>
                    <div className="text-white/70 text-sm mt-1">Attendees</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                      <div className="w-3/4 h-full bg-[#E1251B] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                      35+
                    </div>
                    <div className="text-white/70 text-sm mt-1">Countries</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                      <div className="w-2/3 h-full bg-[#E1251B] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                      76%
                    </div>
                    <div className="text-white/70 text-sm mt-1">
                      Women Speakers
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                      <div className="w-[76%] h-full bg-[#E1251B] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                      8+
                    </div>
                    <div className="text-white/70 text-sm mt-1">
                      Years of Impact
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                      <div className="w-full h-full bg-[#E1251B] rounded-full"></div>
                    </div>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-[#E1251B]/20 to-transparent rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-6 text-white/60 text-xs">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Trusted by leading organizations
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span className="hidden sm:inline">
                        UNEP • World Bank • FIA Foundation
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* All Sections as Cards - Redesigned */}
        <section className="py-20 md:py-28 bg-[#f7f0f2]" id="sections">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                About WTA
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
                Driving Change in African Transport
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision Card - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] p-10 md:p-12 shadow-xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                  <div className="absolute top-1/2 right-10 w-32 h-32 border border-white/5 rounded-full"></div>

                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0">
                      <FaEye className="w-9 h-9" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-2xl md:text-3xl font-bold font-['Josefin_Sans']">
                        Our Vision
                      </h3>
                      <p className="text-white/90 text-base md:text-lg mt-2 leading-relaxed max-w-3xl">
                        We envision an African transport sector that is
                        equitable, sustainable, and responsive to the needs of
                        all its users, with women playing pivotal roles at every
                        level – from policy-making to implementation.
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-white/60 text-sm">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                          Equity
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                          Sustainability
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                          Inclusion
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why We Convene Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white text-xl shadow-lg shadow-[#E1251B]/20">
                    <FaUsers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                      Why We Convene
                    </h3>
                    <div className="w-10 h-1 bg-[#E1251B] rounded-full mt-1"></div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  The transport sector has traditionally been male-dominated.
                  Our conferences serve as a catalyst for change.
                </p>

                <div className="space-y-2.5">
                  {[
                    { icon: FaHandshake, text: 'Fostering Dialogue' },
                    { icon: FaUsers, text: 'Promoting Leadership' },
                    { icon: FaLightbulb, text: 'Driving Innovation' },
                    { icon: FaGlobe, text: 'Influencing Policy' },
                    { icon: FaBullseye, text: 'Building Networks' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-600 group hover:text-[#E1251B] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#E1251B] flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Our Objectives Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white text-xl shadow-lg shadow-[#E1251B]/20">
                    <FaRocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                      Our Objectives
                    </h3>
                    <div className="w-10 h-1 bg-[#E1251B] rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: FaUserTie,
                      text: "Increase women's participation in the transport workforce",
                    },
                    {
                      icon: FaShieldAlt,
                      text: 'Improve safety and security of women in public transport',
                    },
                    {
                      icon: FaMicroscope,
                      text: 'Promote research and data collection on gender and transport',
                    },
                    {
                      icon: FaCity,
                      text: "Encourage inclusive urban planning for women's mobility needs",
                    },
                    {
                      icon: FaLightbulb,
                      text: "Foster innovations for women's access to transport",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <item.icon className="w-4 h-4 text-[#E1251B] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#E1251B] rounded-full"></span>
                    5 Key Goals
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#E1251B] rounded-full"></span>
                    Actionable Impact
                  </span>
                </div>
              </motion.div>

              {/* The Impact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="bg-gradient-to-r from-[#f7f0f2] to-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E1251B] to-[#A61F1F] flex items-center justify-center text-white text-xl shadow-lg shadow-[#E1251B]/20">
                          <FaChartLine className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                            The Impact of Our Commitment
                          </h3>
                          <div className="w-10 h-1 bg-[#E1251B] rounded-full mt-1"></div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Since its inception, the WTA Conference has made
                        significant strides in transforming Africa&apos;s
                        transport sector.
                      </p>
                      <div className="space-y-2.5">
                        {[
                          'Brought together thousands of stakeholders from across Africa and beyond',
                          'Facilitated implementation of gender-responsive transport policies in several African countries',
                          "Inspired initiatives aimed at improving women's safety in public spaces",
                          'Contributed to a growing body of research on gender and transport in Africa',
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <FaCheckCircle className="w-4 h-4 text-[#E1251B] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="flex-shrink-0 grid grid-cols-2 gap-4 min-w-[200px]">
                      <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                          400+
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                          Attendees
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                          35+
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                          Countries
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                          76%
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                          Women Speakers
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                          8+
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                          Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <CodeOfConduct />
      <Partners />
      <Testimonials/>
      <Faqs/>
      <Footer/>
    </>
  );
}
