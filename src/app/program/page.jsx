'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaCalendarDay,
  FaClock,
  FaUser,
  FaUsers,
  FaMicrophone,
  FaCoffee,
  FaUtensils,
  FaBus,
  FaArrowRight,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload,
  FaRegClock,
  FaRegCalendar,
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Day 1 Schedule
const day1Schedule = [
  {
    time: '9:00-4pm',
    event: 'Medical Camp',
    details: 'AAR Insurance',
    type: 'health',
  },
  {
    time: '09:00-09:10',
    event: 'MC and Housekeeping',
    details: 'Calling the event to order and housekeeping rules',
    type: 'opening',
  },
  {
    time: '09:10-09:30',
    event: 'Official Opening',
    details: 'Flone Initiative and Partners',
    type: 'opening',
  },
  {
    time: '09:30-10:00',
    event: 'Keynote Speech',
    details: 'Hon. Martha Karua • Hon. Rehema Jaldesa • Hanna Salian',
    type: 'keynote',
  },
  {
    time: '10:00-10:30',
    event: 'Coffee Break',
    details: 'Networking and refreshments',
    type: 'break',
  },
  {
    time: '10:40-10:45',
    event: 'Spotlight on the Medical Camp',
    details: 'AAR Kenya',
    type: 'presentation',
  },
  {
    time: '10:45-11:00',
    event: 'Enhancing Data and Technology',
    details: 'Safetipin, India',
    type: 'presentation',
  },
  {
    time: '11:00-11:45',
    event: 'Breaking Barriers - Women Leading in Transport',
    details: 'Women in Transport members from Nakuru, Machakos and Nairobi',
    type: 'panel',
  },
  {
    time: '12:45-12:00',
    event: 'Strengthening Multisectoral Collaboration',
    details: 'Mary Abungu, SUMO',
    type: 'presentation',
  },
  {
    time: '12:10-1pm',
    event: 'Government Agencies Leading the Way in Road Safety',
    details:
      'Eng. Monica (KENHA) • Sarah Muthoni Kamau (APWD) • Moderator: Mary Abungu',
    type: 'panel',
  },
  {
    time: '1-2pm',
    event: 'Networking Lunch',
    details: 'Connect with fellow attendees',
    type: 'break',
  },
  {
    time: '2:00-2:10',
    event: 'Financing through PPPs',
    details: 'Eng. Maureen Mwangi, One Craft Construction Ltd',
    type: 'presentation',
  },
  {
    time: '2:10-3:15pm',
    event: 'Innovative, Inclusive, and Gender-Responsive Financing',
    details:
      'Carly Gilbert-Patrick (UNEP) • Lawrence Mbugua (KPMG) • Henry Ochieng (KARA) • Betty Kanyiri',
    type: 'panel',
  },
  {
    time: '3:00-3:15pm',
    event: 'Reframing Accessibility',
    details: 'Eng. Magdalene Nafula, Dedan Kimathi University',
    type: 'presentation',
  },
  {
    time: '3:15-4pm',
    event: 'Accessibility: Walking the Talk',
    details:
      'Dr. Charity (USIU) • Santa Mukabana (KBS) • Dan (ACEMobility) • Eng. Magdalene Nafula • Kays Ndanu Kimatu',
    type: 'panel',
  },
  {
    time: '4pm',
    event: 'Tea Break/Networking',
    details: 'End of Day 1',
    type: 'break',
  },
];

// Day 2 Schedule
const day2Schedule = [
  {
    time: '9:00-4pm',
    event: 'Medical Camp',
    details: 'AAR Insurance',
    type: 'health',
  },
  {
    time: '08:30-09:00',
    event: 'Registration',
    details: 'Check-in and welcome',
    type: 'opening',
  },
  {
    time: '09:00-09:10',
    event: 'Welcome & Recap',
    details: 'MC',
    type: 'opening',
  },
  {
    time: '09:20-09:45',
    event: 'Keynote Speech',
    details: 'Cecilia Anderson, UN-Habitat',
    type: 'keynote',
  },
  {
    time: '9:45-10:15',
    event: 'HIV/AIDS and General Health Awareness',
    details: 'AAR Kenya',
    type: 'presentation',
  },
  {
    time: '10:15-10:45',
    event: 'Coffee Break',
    details: 'Networking and refreshments',
    type: 'break',
  },
  {
    time: '10:45-11:45',
    event: 'Women Leading the Way in Transport',
    details: 'International Federation of Transport Workers',
    type: 'panel',
  },
  {
    time: '11:45-12:30',
    event: 'Women Shaping the Mobility Business in Tanzania',
    details: 'Teddy John (OVAH) • Jackline Ringo • Amina Omary',
    type: 'presentation',
  },
  {
    time: '12:30-13:00',
    event: 'Rethinking the Safe System Approach Under Climate Pressure',
    details: 'Belzénia Matsimbe, Portugal/Mozambique',
    type: 'presentation',
  },
  {
    time: '13:00-14:00',
    event: 'Networking Lunch',
    details: 'Connect with fellow attendees',
    type: 'break',
  },
  {
    time: '14:10-15:10',
    event: 'Advancing Gender Inclusive Business Models in E-Mobility',
    details:
      'Celeste Vogel (eWAKA) • Evans Sumba • Vivian Oyugi (Ampersand) • Dorcus Kimotho (BasiGo)',
    type: 'panel',
  },
  {
    time: '15:10-15:45',
    event: 'Spotlight Presentation',
    details: 'Rithvika Rajiv, Assistant Program Manager Safetipin',
    type: 'presentation',
  },
  {
    time: '15:45-16:00',
    event: 'Inclusion Powered by Research',
    details:
      'Ernest Agyemang (Univ. of Ghana) • Dr. Josephine Malonza (Univ. of Rwanda) • Gladys Nyachieo (MMU)',
    type: 'presentation',
  },
  {
    time: '16:00',
    event: 'Tea Break/Networking',
    details: 'End of Day 2',
    type: 'break',
  },
];

// Day 3 Schedule
const day3Schedule = [
  {
    time: '08:00-09:00',
    event: 'Arrival & Registration',
    details: 'Check-in at venue',
    type: 'opening',
  },
  {
    time: '09:00-9:10',
    event: 'Introduction to Workshops and Site Visits',
    details: 'Flone Initiative + Partners',
    type: 'opening',
  },
  {
    time: '09:10-12:00',
    event: 'PARALLEL Site Visit: BasiGo',
    details: 'Experience electric bus operations firsthand',
    type: 'site-visit',
  },
  {
    time: '09:10-12:00',
    event: 'PARALLEL Site Visit: eBee',
    details: 'Explore electric mobility solutions',
    type: 'site-visit',
  },
  {
    time: '09:10-12:00',
    event: 'PARALLEL Workshop: Women in E-Mobility Network Strategic Plan',
    details: "Co-creating the network's 3-year Strategic Plan with GIZ Kenya",
    type: 'workshop',
  },
];

// Helper to get icon for event type
const getEventIcon = (type) => {
  const icons = {
    keynote: FaMicrophone,
    panel: FaUsers,
    presentation: FaUser,
    break: FaCoffee,
    opening: FaCalendarDay,
    lunch: FaUtensils,
    health: FaBus,
    'site-visit': FaBus,
    workshop: FaUsers,
  };
  return icons[type] || FaCalendarDay;
};

// Helper to get color for event type
const getEventColor = (type) => {
  const colors = {
    keynote: 'bg-[#E1251B]',
    panel: 'bg-[#D9726A]',
    presentation: 'bg-[#A61F1F]',
    break: 'bg-gray-400',
    opening: 'bg-[#1a1a1a]',
    lunch: 'bg-emerald-600',
    health: 'bg-blue-600',
    'site-visit': 'bg-purple-600',
    workshop: 'bg-amber-600',
  };
  return colors[type] || 'bg-gray-500';
};

// Schedule Day Component
const ScheduleDay = ({ day, date, title, schedule, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
              <FaCalendarDay className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-['Josefin_Sans']">
                Day {day}
              </h3>
              <p className="text-white/80 text-sm">{date}</p>
            </div>
          </div>
          <div className="md:ml-auto">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Schedule Items */}
      <div className="divide-y divide-gray-100">
        {schedule.map((item, idx) => {
          const Icon = getEventIcon(item.type);
          const colorClass = getEventColor(item.type);
          const isBreak = item.type === 'break' || item.type === 'lunch';

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className={`p-4 md:p-5 hover:bg-[#f7f0f2]/50 transition-colors duration-200 group ${
                isBreak ? 'bg-[#fafafa]' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Time */}
                <div className="flex-shrink-0 w-24 text-sm font-bold text-gray-700 pt-0.5">
                  <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                    {item.time}
                  </span>
                </div>

                {/* Icon Badge */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm ${colorClass} shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className={`font-semibold text-sm md:text-base ${
                        isBreak
                          ? 'text-gray-500'
                          : 'text-gray-800 group-hover:text-[#E1251B]'
                      } transition-colors`}
                    >
                      {item.event}
                    </h4>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        isBreak
                          ? 'bg-gray-100 text-gray-400'
                          : 'bg-[#E1251B]/10 text-[#E1251B]'
                      }`}
                    >
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm mt-0.5 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Main Component
export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    {
      id: 1,
      label: 'Day 1',
      date: 'December 2, 2026',
      title: 'Setting The Scene',
    },
    {
      id: 2,
      label: 'Day 2',
      date: 'December 3, 2026',
      title: 'Jobs / E-Mobility / Equity',
    },
    {
      id: 3,
      label: 'Day 3',
      date: 'December 4, 2026',
      title: 'Proposed Field Visits',
    },
  ];

  const getSchedule = (day) => {
    switch (day) {
      case 1:
        return day1Schedule;
      case 2:
        return day2Schedule;
      case 3:
        return day3Schedule;
      default:
        return day1Schedule;
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="relative h-[60vh] min-h-[350px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/assets/program-hero.jpg')" }}
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
                <FaCalendarAlt className="w-3 h-3" />
                <span>2026 Schedule</span>
              </div>
              <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-['Josefin_Sans'] leading-tight">
                Conference Program
              </h1>
              <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                Join us for three days of transformative dialogue, networking,
                and action towards inclusive and climate-resilient transport
                systems across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-[#f7f0f2] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                3
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Days
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                30+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Sessions
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                49+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Speakers
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                400+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Attendees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Schedule */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Day Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeDay === day.id
                    ? 'bg-[#E1251B] text-white shadow-lg shadow-[#E1251B]/30'
                    : 'bg-[#f7f0f2] text-gray-600 hover:bg-[#E1251B]/10 hover:text-[#E1251B]'
                }`}
              >
                <FaCalendarDay className="w-4 h-4" />
                {day.label}
                <span className="text-xs opacity-70">• {day.date}</span>
              </button>
            ))}
          </div>

          {/* Active Day Schedule */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ScheduleDay
                day={activeDay}
                date={days.find((d) => d.id === activeDay)?.date}
                title={days.find((d) => d.id === activeDay)?.title}
                schedule={getSchedule(activeDay)}
                index={activeDay}
              />
            </motion.div>
          </AnimatePresence>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3.5 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 shadow-lg shadow-[#E1251B]/20"
            >
              <FaDownload className="w-4 h-4" />
              Download Full Program (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Location & Info */}
      <section className="py-12 md:py-16 bg-[#f7f0f2]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] text-2xl flex-shrink-0">
                <FaMapMarkerAlt className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 font-['Josefin_Sans']">
                  Conference Venue
                </h3>
                <p className="text-gray-600 mt-1">
                  TBC | Nairobi Kenya
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a
                    href="https://maps.app.goo.gl/mfs894MrDx9MRkzS7"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-[#E1251B] text-sm font-semibold hover:underline"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Get Directions
                  </a>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/registration"
                    className="inline-flex items-center gap-2 text-[#E1251B] text-sm font-semibold hover:underline"
                  >
                    Register Now
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <FaQuoteLeft className="text-4xl text-white/20 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-['Josefin_Sans']">
                Be Part of the Movement
              </h3>
              <p className="text-white/80 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                Join 400+ leaders, policymakers, and innovators at Africa&apos;s
                premier platform for mobility justice and transformation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Link
                  href="/registration"
                  className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-8 py-3.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 duration-300"
                >
                  Register Now
                  <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/speakers"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                >
                  Meet Our Speakers
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
