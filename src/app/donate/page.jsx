'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  FaHeart,
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaDonate,
  FaUserFriends,
  FaHandshake,
  FaGift,
  FaMoneyBillWave,
  FaCreditCard,
  FaMobileAlt,
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const donationTiers = [
  {
    name: 'Walking',
    amount: '$1 / KES 100',
    period: 'per month',
    description: 'Thank you for sprinkling a little bit of zero-emissions.',
    icon: '🚶',
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
  },
  {
    name: 'Boda Boda',
    amount: '$5',
    period: 'per month',
    description: 'Many thanks for this pledge!',
    icon: '🏍️',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
  },
  {
    name: 'Tuk Tuk',
    amount: '$10',
    period: 'per month',
    description: 'Shukran, our friend.',
    icon: '🛺',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
  },
  {
    name: 'Taxi',
    amount: '$20',
    period: 'per month',
    description: 'Woop! You have given us strength to boldly go forth.',
    icon: '🚕',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
  },
  {
    name: 'Matatu',
    amount: '$50',
    period: 'per month',
    description: "Just like a matatu, I knew you'd come along. Asante!",
    icon: '🚐',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
  },
  {
    name: 'Bus',
    amount: '$100',
    period: 'per month',
    description:
      'We are ready to do some big things! This pledge allows us the freedom to take risks.',
    icon: '🚌',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600',
  },
  {
    name: 'Commuter Train',
    amount: '$200',
    period: 'per month',
    description:
      "Whoa! Donors like you aren't easily found in nature. Attend our community events.",
    icon: '🚆',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-600',
  },
];

const involvementOptions = [
  {
    id: 'donate',
    icon: FaDonate,
    title: 'Donate',
    subtitle: 'Be an Inclusive Mobility Champion',
    color: 'from-[#E1251B] to-[#A61F1F]',
    bgColor: 'bg-[#E1251B]/10',
    iconBg: 'bg-[#E1251B]',
  },
  {
    id: 'friends',
    icon: FaUserFriends,
    title: 'Friends of Flone',
    subtitle: 'Join our community of champions',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-500',
  },
  {
    id: 'corporate',
    icon: FaHandshake,
    title: 'Corporate Partner',
    subtitle: 'Align your company with our mission',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-500',
  },
  {
    id: 'fundraising',
    icon: FaGift,
    title: 'Fundraising Events',
    subtitle: 'Host your own event for a cause',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-500',
  },
];

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState('donate');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="relative h-[70vh] min-h-[400px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/donate2.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-[#E1251B]/10"></div>

            <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full hidden lg:block"></div>
            <div className="absolute bottom-20 right-40 w-32 h-32 border border-white/5 rounded-full hidden lg:block"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#E1251B]/30">
                  <FaHeart className="w-3 h-3 animate-pulse" />
                  <span>Support Our Mission</span>
                </div>
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-['Josefin_Sans'] leading-tight mt-4">
                  Get Involved with
                  <span className="block text-[#E1251B] mt-2">
                    Flone Initiative
                  </span>
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                  Championing women&apos;s safety in public transport. Your
                  contribution, no matter how small, can significantly improve
                  access to public transport for vulnerable communities.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="#ways"
                    className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Ways to Get Involved
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#donate"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                  >
                    <FaHeart className="w-4 h-4" />
                    Donate Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How To Get Involved - Simple Cards */}
        <section className="py-20 md:py-28 bg-white" id="ways">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                How To Get Involved
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {involvementOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.a
                    key={option.id}
                    href={`#${option.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E1251B] cursor-pointer"
                  >
                    <div
                      className={`w-20 h-20 rounded-full ${option.iconBg} flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mt-5 group-hover:text-[#E1251B] transition-colors">
                      {option.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {option.subtitle}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Event Participation */}
        <section className="py-16 md:py-20 bg-[#f7f0f2]">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Josefin_Sans']">
                Event Participation
              </h2>
              <div className="w-12 h-1 bg-[#E1251B] mx-auto mt-3 rounded-full"></div>
              <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                Stay updated on upcoming events, including educational
                workshops, seminars, and awareness campaigns. Attend these
                events to learn, connect, and contribute to our cause.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Become A Partner
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-3 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative">
                <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Explore partnership opportunities with Flone Initiative to
                  align your company&apos;s objectives with our mission. We can
                  create meaningful interventions that benefit your business and
                  vulnerable communities.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a
                    href="https://floneinitiative.org/partner/#becomeapartner"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 duration-300"
                  >
                    Become a partner
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://floneinitiative.org/partner/"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                  >
                    About Our Partners
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="py-20 md:py-28 bg-[#f7f0f2]" id="donate">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Donate
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Become an Inclusive Mobility Champion
              </h2>
              <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-600 text-lg mt-4">
                Your donation helps Flone Initiative achieve sustainability and
                meet the changing needs of the communities we work with.
              </p>
            </motion.div>

            {/* Payment Options */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
              <motion.a
                href="https://www.every.org/flone-initiative-trust-ke"
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <FaCreditCard className="w-14 h-14 mx-auto mb-4 text-white/80 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold font-['Josefin_Sans']">
                    Give Via Card
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Credit or Debit Card
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Monthly, quarterly, or one-off
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-[#E1251B] transition-all">
                    Give Now
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-gray-300 hover:border-[#E1251B] group"
              >
                <FaMoneyBillWave className="w-14 h-14 mx-auto mb-4 text-[#E1251B] group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-800 font-['Josefin_Sans']">
                  Give Via MPesa
                </h3>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-gray-600">
                    Paybill:{' '}
                    <span className="font-bold text-[#E1251B]">4135531</span>
                  </p>
                  <p className="text-gray-600">
                    Account Number: <span className="font-bold">Your Name</span>
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-3 rounded-full text-sm font-semibold">
                  <FaMobileAlt className="w-3 h-3" />
                  MPesa Available
                </div>
              </motion.div>
            </div>

            {/* Donation Tiers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 text-center font-['Josefin_Sans'] mb-8">
                How often would you like to donate?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {donationTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`${tier.bgColor} rounded-2xl p-5 hover:shadow-xl transition-all duration-300 border ${tier.borderColor} hover:border-[#E1251B]/30 group cursor-default`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tier.icon}</span>
                      <div>
                        <h4
                          className={`font-bold text-gray-800 text-sm ${tier.textColor}`}
                        >
                          {tier.name}
                        </h4>
                        <p className="text-[#E1251B] font-bold text-base">
                          {tier.amount}{' '}
                          <span className="text-xs font-normal text-gray-500">
                            {tier.period}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="mt-3">
                      <a
                        href="https://www.every.org/flone-initiative-trust-ke"
                        target="_blank"
                        rel="noopener"
                        className={`${tier.textColor} text-xs font-semibold hover:underline inline-flex items-center gap-1`}
                      >
                        Pledge Now
                        <FaArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://www.every.org/flone-initiative-trust-ke"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 bg-[#E1251B] text-white px-10 py-4 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 shadow-lg shadow-[#E1251B]/20 hover:shadow-xl"
              >
                <FaHeart className="w-5 h-5 animate-pulse" />
                Donate Now
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Friends of Flone */}
        <section className="py-20 md:py-28 bg-white" id="friends">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f7f0f2] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  <FaUserFriends className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-['Josefin_Sans']">
                    Friends of Flone Initiative
                  </h3>
                  <div className="w-12 h-1 bg-[#E1251B] rounded-full mt-2"></div>
                  <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                    Flone Champions are enthusiastic individuals deeply
                    committed to Flone&apos;s mission and vision. They actively
                    elevate Flone&apos;s visibility within their industry and
                    workplaces, offer expertise, share valuable insights, and
                    promote Flone&apos;s events.
                  </p>
                  <a
                    href="mailto:donations@floneinitiative.org"
                    className="inline-flex items-center gap-2 mt-5 text-[#E1251B] font-semibold hover:underline group"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    donations@floneinitiative.org
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Partners */}
        <section className="py-20 md:py-28 bg-[#f7f0f2]" id="corporate">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  <FaHandshake className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-['Josefin_Sans']">
                    Corporate Partners
                  </h3>
                  <div className="w-12 h-1 bg-[#E1251B] rounded-full mt-2"></div>
                  <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                    Contact us today to explore how we can assist you in
                    achieving your Corporate Social Responsibility (CSR)
                    objectives. We collaborate closely with you to craft
                    interventions that align with your goals.
                  </p>
                  <a
                    href="mailto:donations@floneinitiative.org"
                    className="inline-flex items-center gap-2 mt-5 text-[#E1251B] font-semibold hover:underline group"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    donations@floneinitiative.org
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fundraising Events */}
        <section className="py-20 md:py-28 bg-white" id="fundraising">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f7f0f2] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  <FaGift className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-['Josefin_Sans']">
                    Fundraising Events
                  </h3>
                  <div className="w-12 h-1 bg-[#E1251B] rounded-full mt-2"></div>
                  <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                    By hosting your own fundraising event, you have the
                    opportunity to support our cause in a way that is meaningful
                    to you and your community. Whether you&apos;re hosting a
                    charity gala, organizing a bake sale, or planning a fun run,
                    the possibilities are endless.
                  </p>
                  <a
                    href="https://www.every.org/flone-initiative-trust-ke/fundraiser"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 mt-5 bg-[#E1251B] text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                  >
                    Start Your Fundraiser
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white" id="contact">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#f7f0f2] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                  Get Involved Today: <br />
                  <span className="text-[#E1251B]">
                    Take Action for Mobility Rights!
                  </span>
                </h2>
                <div className="w-20 h-1 bg-[#E1251B] mx-auto mt-4 rounded-full"></div>

                <div className="mt-6 space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Whether you&apos;re passionate about improving access to
                    public transport, eager to join a community of changemakers,
                    or interested in collaborating with us to drive positive
                    change, there&apos;s a place for you here.
                  </p>
                  <p>
                    Donate, become a member, or explore partnership
                    opportunities – every action counts in our mission to
                    advance mobility rights for vulnerable groups. Join us in
                    building a more inclusive society and creating a lasting
                    impact. Together, we can make a difference. Get involved
                    with Flone Initiative today!
                  </p>
                  <p>
                    Have questions or need more information? Don&apos;t hesitate
                    to reach out to us! Contact our team to learn more about how
                    you can get involved and make a difference with Flone
                    Initiative.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 shadow-lg shadow-[#E1251B]/20 hover:shadow-xl"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Contact Us
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#donate"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-[#E1251B] text-[#E1251B] px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-[#E1251B] hover:text-white transition-all duration-300"
                  >
                    <FaHeart className="w-4 h-4" />
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
