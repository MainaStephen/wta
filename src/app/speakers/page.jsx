'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaMicrophone,
  FaUsers,
  FaArrowRight,
  FaUserTie,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaUserCircle,
  FaTimes,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Speaker Data
const speakers = [
  // Keynote Speakers
  {
    id: 'martha-karua',
    name: 'Hon. Martha Wangari Karua, SC',
    title: 'Senior Counsel',
    type: 'keynote',
    image: '/assets/martha-karua.webp',
    bio: `Kenya's "Iron Lady", Hon. Martha Wangari Karua, SC, brings over four decades of trailblazing leadership in law, governance, and justice reform. She has consistently championed accountability, integrity, and judicial independence. From her early days as a fearless lawyer, she defended the democratic rights of political prisoners such as Mirugi Kariuki and Koigi wa Wamwere. She later became the only woman in Kofi Annan's mediation team for the Peace Accord and played a pivotal role in facilitating the Waki Commission's work that led to the presentation of evidence before the International Criminal Court.

As a parliamentarian, Karua was instrumental in ensuring judicial safeguards, gender equity, and other critical reforms were enshrined in Kenya's 2010 Constitution.

Today, she serves as lead counsel and convenor of the Pan African Progressive Leaders' Solidarity Network, representing Uganda's opposition leaders Dr. Kizza Besigye and Hajji Lutale, as well as Tanzania's opposition leader Tundu Lissu.

In 2013, she contested the presidency of Kenya and, though unsuccessful, has remained steadfast in her advocacy. As a contender in the upcoming 2027 elections, she continues to uphold her core values while navigating complex political landscapes. Her unwavering principles and resilience mark her as one of Africa's most distinguished voices for democracy and justice.`,
  },
  {
    id: 'hanna-salian',
    name: 'Hanna Salian',
    title: 'Programme Director for Energy, Transport and Climate Change, GIZ-Kenya',
    type: 'keynote',
    image: '/assets/Hanna_GIZ.webp',
    bio: "Hanna Salian is the Programme Director for Energy, Transport, and Climate Change at GIZ Kenya, where she leads a dynamic portfolio of projects advancing renewable energy, e-mobility, and climate resilience. With over a decade of international experience across Africa, Latin America, and Europe, she has managed large-scale initiatives in Uganda, Brazil, and Germany, building strong partnerships that drive sustainable impact. Hanna holds an MSc in Environmental Governance and is recognized for her strategic leadership in guiding Kenya's transition toward a fully renewable power supply by 2030, while laying the foundation for a green hydrogen industry. At GIZ Kenya, she directs a team of more than 100 professionals, ensuring that energy and transport solutions are not only technically sound but also inclusive and climate-smart. Her career reflects a deep commitment to sustainability, innovation, and collaboration in shaping pathways for a low-carbon future.",
  },
  {
    id: 'rehema-jaldesa',
    name: 'Hon. Rehema Jaldesa',
    title: 'Chairperson, National Gender and Equality Commission',
    type: 'keynote',
    image: '/assets/keynote.webp',
    bio: "Hon. Rehema Jaldesa is the current Chairperson of Kenya's National Gender and Equality Commission (NGEC), appointed in December 2024. A passionate advocate for gender equality and social justice, she brings extensive leadership experience from her previous roles as Woman Representative for Isiolo County, Board Chairperson of Kenya Industrial Estates, and Chairperson of Ewaso Nyiro North Development Authority. Throughout her career, she has championed transformative legislative initiatives including amendments to the Health Act for organ donor banks, pastoralist community legislation, and advocacy against gender-based violence, early marriages, and FGM. She holds multiple academic qualifications and is driven by the belief that inclusivity and good governance are fundamental to national development.",
  },
  // Speakers (all other speakers)
  {
    id: 'vivian-oyugi',
    name: 'Vivian Oyugi',
    title: 'Head of Operations-Kenya, Ampersand',
    type: 'speaker',
    image: '/assets/vivian.webp',
    bio: 'Vivian Oyugi is a visionary operations and customer experience leader with 14 years of cross-sector experience in civil engineering, renewable energy, and e-mobility. She has led initiatives in project management, PAYG systems, policy development, and customer service—always centering technology and people.',
  },
  {
    id: 'teddy-john',
    name: 'Teddy John',
    title: 'Programs Manager, Our Voices Against Harassment',
    type: 'speaker',
    image: '/assets/modesta.webp',
    bio: 'Teddy John Kalimsenga is a Tanzanian psychologist and project manager with deep expertise in educational psychology, gender advocacy, and social entrepreneurship. She currently leads the Pink Bajaji Initiative (PBI) at Our Voices Against Harassment (OVAH), championing safe, inclusive urban transport by empowering women to operate electric bajajis.',
  },
  {
    id: 'carly-gilbert',
    name: 'Carly Gilbert-Patrick',
    title: 'Team Leader - Active Mobility, UNEP',
    type: 'speaker',
    image: '/assets/gilbert.webp',
    bio: 'Carly Gilbert-Patrick is the Team Leader for Active Mobility, Digitalisation, and Modal Integration at the United Nations Environment Programme (UNEP) Sustainable Mobility Unit. She leads two teams: one championing the rights of pedestrians and cyclists, and another advancing digital innovation across the transport sector.',
  },
  {
    id: 'betty-kanyiri',
    name: 'Betty Kanyiri Njoni',
    title: 'Gender Officer, State Department for Gender',
    type: 'speaker',
    image: '/assets/betty.webp',
    bio: "Betty Kanyiri is a Gender Officer with the State Department for Gender and Affirmative Action, overseeing Machakos County. A former educator with over a decade of experience, she is deeply committed to women's empowerment, social equity, peacebuilding, and conflict resolution.",
  },
  {
    id: 'rithvika-rajiv',
    name: 'Rithvika Madhummal Rajiv',
    title: 'Assistant Program Manager, Safetipin',
    type: 'speaker',
    image: '/assets/rithvika.webp',
    bio: 'Rithvika Rajiv is an Assistant Program Manager at Safetipin, where she works at the intersection of gender and mobility to advance inclusive, safe, accessible, and affordable public transport systems.',
  },
  {
    id: 'sarah-kamau',
    name: 'Sarah Muthoni Kamau',
    title: 'Chair, Association of Professional Women with Disabilities',
    type: 'speaker',
    image: '/assets/speakers/sarah-kamau.webp',
    bio: 'Sarah Kamau is a seasoned disability rights advocate with over 30 years of experience across public and private sectors. She currently serves as Chair of the Association of Professional Women with Disabilities (APWD) and the Commonwealth Disabled Peoples Forum (CDPF).',
  },
  {
    id: 'maureen-mwangi',
    name: 'Eng. Maureen Wangari Mwangi',
    title: 'Project Engineer, One Craft Construction Ltd',
    type: 'speaker',
    image: '/assets/speakers/maureen-mwangi.webp',
    bio: 'Eng. Maureen Mwangi is a licensed civil engineer and certified Project Management Professional (PMP) with six years of experience in rural road construction. She has led key infrastructure projects across Kenya, specializing in road design, supervision, and contract management.',
  },
  {
    id: 'mary-abungu',
    name: 'Mary Abungu',
    title: 'Founding Director, SUMO Africa',
    type: 'speaker',
    image: '/assets/speakers/mary-abungu.webp',
    bio: 'Mary Abungu is a Transportation Engineer and Road Safety Specialist with a Master of Science in Transport Engineering, Planning, and Management from Newcastle University, UK. She is the founder of SUMO Africa, an NGO committed to enhancing sustainable transportation solutions.',
  },
  {
    id: 'magdalene-nafula',
    name: 'Eng. Magdalene Nafula Otieno',
    title: 'Lecturer, Dedan Kimathi University',
    type: 'speaker',
    image: '/assets/speakers/magdalene-nafula.webp',
    bio: 'Eng. Magdalene Nafula is a seasoned civil engineer with over a decade of experience in road and highway infrastructure, including bridges and interchanges. She also lectures in transportation engineering at Dedan Kimathi University.',
  },
  {
    id: 'hekandjo-palesa',
    name: 'Hekandjo Palesa',
    title: 'Engineer: Technology Transfer, Roads Authority of Namibia',
    type: 'speaker',
    image: '/assets/speakers/hekandjo-palesa.webp',
    bio: 'Palesa Hekandjo is an Incorporated Engineer and a leading voice in sustainable, inclusive transport across Africa. With over 18 years of experience, she currently serves as Engineer: Technology Transfer at the Roads Authority of Namibia.',
  },
  {
    id: 'lawrence-mbugua',
    name: 'Dr. Lawrence Mbugua',
    title: 'Senior Manager - Transport & Infrastructure, KPMG',
    type: 'speaker',
    image: '/assets/speakers/lawrence-mbugua.webp',
    bio: 'Dr. Lawrence Mbugua is an experienced project and programme manager; a chartered quantity surveyor and an expert in real estate, construction and infrastructure matters. He has over 25 years of experience in supporting clients in both UK and Kenya.',
  },
  {
    id: 'phoebe-okoth',
    name: 'Phoebe Okoth',
    title: 'Women Coordinator for Eastern and Southern Africa, ITF',
    type: 'speaker',
    image: '/assets/speakers/phoebe-okoth.webp',
    bio: "For more than a decade, Phoebe Okoth has served within the International Transport Workers' Federation (ITF) in various capacities. She currently serves as the ITF Women Coordinator for Eastern and Southern Africa.",
  },
  {
    id: 'judith-nafula',
    name: 'Judith Nafula',
    title: 'Vice Chair, Africa Railway Workers, ITF',
    type: 'speaker',
    image: '/assets/speakers/judith-nafula.webp',
    bio: "Judith Nafula is a dedicated labour rights advocate serving as the Africa Railway Vice Chair at the International Transport Workers' Federation (ITF) and the Organising Secretary of the Railway Workers Union – Nairobi Branch.",
  },
  {
    id: 'pamela-wangari',
    name: 'Pamela Wangari',
    title: 'Member, Matatu Workers Union',
    type: 'speaker',
    image: '/assets/speakers/pamela-wangari.webp',
    bio: "Pamella Wangari is an experienced transport professional with over ten years of service in Kenya's matatu industry. As a long-standing conductor and proud member of the Matatu Workers Association, she brings passion, resilience, and deep practical knowledge.",
  },
  {
    id: 'morrine-mangoja',
    name: 'Morrine Mangoja',
    title: 'Women Rep, East Africa, ITF',
    type: 'speaker',
    image: '/assets/speakers/morrine-mangoja.webp',
    bio: "Morrine Mangoja is a dedicated labour rights advocate serving as the Women Representative for East Africa at the International Transport Workers' Federation (ITF). She also works with the Kenya Hotels & Allied Workers Union (KHAWU).",
  },
  {
    id: 'catherine-musa',
    name: 'Catherine Musa',
    title: 'Member, Kenya Truck Drivers & Allied Workers Union',
    type: 'speaker',
    image: '/assets/speakers/catherine-musa.webp',
    bio: 'Catherine Musa is an experienced truck driver with six years in the trucking industry. She is dedicated to ensuring goods reach their destinations safely and on time, upholding professionalism and reliability in every assignment.',
  },
  {
    id: 'agnes-mwongera',
    name: 'Agnes Mwongera',
    title: 'Director, Women Affairs & Digital Cab Drivers Rep at ITF',
    type: 'speaker',
    image: '/assets/speakers/agnes-mwongera.webp',
    bio: 'Agnes Gacheri Mwongera is a dedicated labor rights advocate with over 10 years of experience in the transport sector. She is the Kenya National Coordinating Committee Women Chair and Director of Women Affairs and Digital Cab Drivers Representative at Transport Workers Union Kenya (TAWU).',
  },
  {
    id: 'peter-kinyua',
    name: 'Peter Kinyua',
    title: 'Director, ROG Sacco',
    type: 'speaker',
    image: '/assets/speakers/peter-kinyua.webp',
    bio: 'With over 28 years of experience in the transport sector, Peter has grown from his early days as a conductor to serving as a driver, and ultimately rising to the position of Director at ROG Sacco.',
  },
  {
    id: 'kays-kimatu',
    name: 'Kays Ndanu Kimatu',
    title: 'Student / Disability Champion, Mount Kenya University',
    type: 'speaker',
    image: '/assets/speakers/kays-kimatu.webp',
    bio: 'Kays Kimatu is a final-year student at Mount Kenya University, pursuing a Bachelor of Arts in Mass Media and Communication. She is a media and communication practitioner with a background in Kenyan Sign Language (KSL).',
  },
  {
    id: 'abigail-muigai',
    name: 'Abigail Muigai',
    title: 'Senior Officer Network Management, NaMATA',
    type: 'speaker',
    image: '/assets/speakers/abigail-muigai.webp',
    bio: 'Abigail Muigai is a Civil Engineer specializing in urban transportation and traffic engineering, with extensive experience working alongside Government institutions, Civil Society Organizations, and Development Partners.',
  },
  {
    id: 'charity-muraguri',
    name: 'Dr. Charity Muraguri',
    title: 'Asst. Professor of Strategic Management, USIU - Africa',
    type: 'speaker',
    image: '/assets/speakers/charity-muraguri.webp',
    bio: "Dr. Charity Wairimu Muraguri is an Assistant Professor of Strategic Management at USIU-Africa's Chandaria School of Business. She holds a PhD in Business Administration from Kenyatta University and an MBA from the University of Nairobi.",
  },
  {
    id: 'daniel-gatura',
    name: 'Daniel Gatura',
    title: 'CEO & Co-Founder, Ace Mobility',
    type: 'speaker',
    image: '/assets/speakers/daniel-gatura.webp',
    bio: 'Daniel Gatura is the Co-Founder and CEO of AceMobility, a Kenyan startup transforming transport systems to be inclusive, sustainable, and disability-friendly. He is a graduate of Moi University with a BSc in Strategic Management.',
  },
  {
    id: 'dorcus-kamotho',
    name: 'Dorcus Wanjiru Kamotho-Mureithi',
    title: 'Head of Marketing & Communication, BasiGo',
    type: 'speaker',
    image: '/assets/speakers/dorcus-kamotho.webp',
    bio: 'Wanjiru Kamotho-Mureithi is an award-winning, relationship-driven strategic communication professional and the Head of Marketing and Communications at BasiGo, an electric mobility company transforming public transport in Kenya and Rwanda.',
  },
  {
    id: 'evans-sumba',
    name: 'Evans Sumba',
    title: 'Program Officer, Flone Initiative',
    type: 'speaker',
    image: '/assets/speakers/evans-sumba.webp',
    bio: 'Evans Sumba is a Program Officer at Flone Initiative and a built environment professional with over 4 years of experience. He looks at transport through the lens of Urban Planning and Integrated Systems.',
  },
  {
    id: 'ariadne-baskin',
    name: 'Ariadne Baskin',
    title: 'Project Manager, UN Environment',
    type: 'speaker',
    image: '/assets/speakers/ariadne-baskin.webp',
    bio: 'Ariadne Baskin is the Gender Lead for Sustainable Mobility at UN Environment (UNEP) and supports the Clean Fuels and Vehicles agenda in Africa, working with governments to accelerate the transition to safer, cleaner, and more inclusive transport systems.',
  },
  {
    id: 'henry-ochieng',
    name: 'Henry Ochieng',
    title: 'CEO, Kenya Alliance of Resident Associations',
    type: 'speaker',
    image: '/assets/speakers/henry-ochieng.webp',
    bio: 'Henry Ochieng is the Chief Executive Officer of the Kenya Alliance of Resident Associations (KARA), the apex body representing the voice and proactive action of Resident Associations in Kenya.',
  },
  {
    id: 'celeste-vogel',
    name: 'Celeste Vogel',
    title: 'Founder & CEO, eWAKA Mobility Ltd',
    type: 'speaker',
    image: '/assets/speakers/celeste-vogel.webp',
    bio: 'Celeste Vogel is the Co-Founder and CEO of eWAKA Mobility Ltd, a trailblazing e-mobility company transforming urban transport across Africa. With a career spanning law, finance, and engineering, Celeste brings global expertise to local solutions.',
  },
  {
    id: 'wendy-sigey',
    name: 'Wendy Sigey',
    title: 'Advocacy Officer, eBee Africa',
    type: 'speaker',
    image: '/assets/speakers/wendy-sigey.webp',
    bio: 'Wendy Sigey is an Advocacy Officer at eBee Africa, where she champions cycling, climate action, and inclusive urban mobility. A law graduate from the University of Nairobi, Wendy blends legal expertise with grassroots activism.',
  },
  {
    id: 'jackline-ringo',
    name: 'Jackline Ringo',
    title: 'Woman Driver, Our Voices Against Harassment',
    type: 'speaker',
    image: '/assets/speakers/jackline-ringo.webp',
    bio: 'Jackline Ringo is a resilient 24-year-old woman whose journey reflects determination and courage. Raised in a low-income neighborhood in Dar es Salaam, she worked tirelessly to support herself while dreaming of a more stable future.',
  },
  {
    id: 'regina-orina',
    name: 'Regina Orina',
    title: 'Long-distance Conductor',
    type: 'speaker',
    image: '/assets/speakers/regina-orina.webp',
    bio: 'Regina Orina is a long-distance conductor based in Nakuru. Her story is one of grit and transformation. Starting as a makanga, she faced daily challenges, from public disdain to harassment by male colleagues.',
  },
  {
    id: 'lucy-kihonge',
    name: 'Lucy Kihonge',
    title: 'Head of Programmes, Flone Initiative',
    type: 'speaker',
    image: '/assets/speakers/lucy-kihonge.webp',
    bio: 'Lucy Wambui Kihonge is Head of Programmes at Flone Initiative and a leading voice in gender and transport. With over 7 years of experience as a Gender and Human Rights Specialist, she structures strategic change.',
  },
  {
    id: 'felistus-watanu',
    name: 'Felistus Watanu',
    title: 'Matatu Investor, Chairperson WIT Machakos',
    type: 'speaker',
    image: '/assets/speakers/felistus-watanu.webp',
    bio: 'Felistus Katanu is a seasoned Matatu Investor and the current Chairperson for the WIT (Women in Transport) Machakos Chapter. With 15 years of experience in the matatu business, she embodies hands-on leadership.',
  },
  {
    id: 'alice-wangeci',
    name: 'Alice Wangeci',
    title: 'Boda Boda Rider, WIT Nakuru Chapter',
    type: 'speaker',
    image: '/assets/speakers/alice-wangeci.webp',
    bio: 'Alice Wangeci is a resilient member of the WIT (Women in Transport) Nakuru Chapter with 7 years of experience as a Boda Boda rider. She recently achieved a significant milestone by securing her A2 and D1 licenses.',
  },
  {
    id: 'nancy-gacheru',
    name: 'Nancy Gacheru',
    title: 'Professional Driver, WIT Nairobi Chapter',
    type: 'speaker',
    image: '/assets/speakers/nancy-gacheru.webp',
    bio: 'Nancy Gacheru is a veteran member of the WIT (Women in Transport) Nairobi Chapter with 15 years of experience as a professional driver. She holds licenses in categories A2, D1, D2, and G.',
  },
  {
    id: 'reuben-gachau',
    name: 'Reuben Wanjihia Gachau',
    title: 'Development Economist',
    type: 'speaker',
    image: '/assets/speakers/reuben-gachau.webp',
    bio: 'Reuben Wanjihia Gachau is a Development Economist with over 12 years of experience steering system-level initiatives that strengthen market ecosystems, expand financial inclusion, and advance climate-resilient livelihoods across East Africa.',
  },
  {
    id: 'richard-kamami',
    name: 'Richard Kamami',
    title: 'Senior Superintending Engineer, Government of Makueni County',
    type: 'speaker',
    image: '/assets/speakers/richard-kamami.webp',
    bio: 'Kamami Musyoka is a mechanical engineer with over 15 years of experience in sustainable infrastructure development, specializing in energy planning and transport systems within Kenya.',
  },
  {
    id: 'santa-mukabanah',
    name: 'Santa Mukabanah',
    title: 'Administrator at KBS Driving School',
    type: 'speaker',
    image: '/assets/speakers/santa-mukabanah.webp',
    bio: "Santa Mukabanah is the administrator at KBS Driving School, where she leads curriculum development, oversees training quality, and serves as the school's primary liaison for strategic partnerships.",
  },
  {
    id: 'ernest-agyemang',
    name: 'Prof. Ernest Agyemang',
    title: 'Associate Professor of Transportation Geography, University of Ghana',
    type: 'speaker',
    image: '/assets/speakers/ernest-agyemang.webp',
    bio: 'Prof. Ernest Agyemang is an Associate Professor of Transportation Geography at the University of Ghana. He specializes in travel behavior, informal and shared mobility, ride-hailing services, and inclusivity in transportation.',
  },
  {
    id: 'belzenia-matsimbe',
    name: 'Belzénia Matsimbe',
    title: 'Independent Consultant and Researcher',
    type: 'speaker',
    image: '/assets/speakers/belzenia-matsimbe.webp',
    bio: 'Belzénia Matsimbe is an Independent Consultant and Researcher specializing in sustainable mobility, road safety, and transport systems across Africa. She is a Civil and Transport Engineer pursuing a PhD in Civil Engineering.',
  },
];

// Speaker Card Component with Modal
const SpeakerCard = ({ speaker, index, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/20 h-full flex flex-col">
        {/* Image */}
        <div
          className="relative aspect-square overflow-hidden bg-[#f7f0f2] cursor-pointer"
          onClick={() => onOpenModal(speaker)}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={400}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Type Badge */}
          {speaker.type === 'keynote' && (
            <div className="absolute top-4 left-4 bg-[#E1251B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Keynote
            </div>
          )}
          {/* View Profile Overlay */}
          <div className="absolute inset-0 bg-[#E1251B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              <FaUserCircle className="w-5 h-5" />
              View Profile
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-bold text-gray-800 group-hover:text-[#E1251B] transition-colors line-clamp-2">
            {speaker.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {speaker.title}
          </p>

          {/* Bio Preview */}
          <div className="mt-3 flex-1">
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {speaker.bio}
            </p>
            <button
              onClick={() => onOpenModal(speaker)}
              className="text-xs text-[#E1251B] font-semibold hover:underline mt-2 inline-flex items-center gap-1"
            >
              Read more
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Speaker Modal Component
const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  if (!speaker) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition text-white flex items-center justify-center"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Image Header */}
              <div className="relative h-64 md:h-80 bg-[#f7f0f2] overflow-hidden rounded-t-3xl">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  {speaker.type === 'keynote' && (
                    <span className="bg-[#E1251B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Keynote Speaker
                    </span>
                  )}
                  {speaker.type === 'speaker' && (
                    <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Speaker
                    </span>
                  )}
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold font-['Josefin_Sans']">
                    {speaker.name}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base mt-1">
                    {speaker.title}
                  </p>
                </div>
              </div>

              {/* Bio Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-[#E1251B] mb-4">
                  <FaQuoteLeft className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    About
                  </span>
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {speaker.bio}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f7f0f2] rounded-xl p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Role
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      {speaker.title}
                    </p>
                  </div>
                  <div className="bg-[#f7f0f2] rounded-xl p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Type
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-1 capitalize">
                      {speaker.type}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E1251B] text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                  >
                    <FaMicrophone className="w-4 h-4" />
                    Hear {speaker.name.split(' ')[0]} Speak at WTA 2026
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedSpeaker(null), 300);
  };

  const keynoteSpeakers = speakers.filter((s) => s.type === 'keynote');
  const regularSpeakers = speakers.filter((s) => s.type === 'speaker');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="relative h-[70vh] min-h-[400px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/assets/speakers-hero.jpg')" }}
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
                  <FaMicrophone className="w-3 h-3" />
                  <span>2026 Speakers</span>
                </div>
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Josefin_Sans'] leading-tight">
                  Women and Transport Africa
                  <span className="block text-[#E1251B] mt-2">
                    Conference Speakers
                  </span>
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                  Meet the visionary leaders, innovators, and changemakers
                  shaping Africa&apos;s inclusive and climate-resilient
                  transport future.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link
                    href="#keynote"
                    className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                  >
                    View Speakers
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdppV9-W_tm297q2LRb7znw9br_mut_k_TCSNRag1AG5cbf8A/viewform"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-[1em_0] font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                  >
                    Submit Abstract
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-[#f7f0f2] border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                  {speakers.length}+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Speakers
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                  3
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Keynotes
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                  76%
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Women Speakers
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E1251B] font-['Josefin_Sans']">
                  9+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  African Countries
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Introducing Our Speakers
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Josefin_Sans']">
                Visionary Leaders. Transformative Voices.
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
                As we gear up towards our 2026 Women and Transport Africa
                Conference, we are thrilled to introduce our distinguished
                speaker lineup who are experts, innovators, and leaders in the
                field of women&apos;s transportation issues across Africa.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdppV9-W_tm297q2LRb7znw9br_mut_k_TCSNRag1AG5cbf8A/viewform"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-2.5 rounded-[1em_0] font-semibold text-sm hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                >
                  Submit Your Abstract
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Keynote Speakers */}
        <section className="py-12 md:py-16 bg-[#f7f0f2]" id="keynote">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Keynote Speakers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Inspiring Keynotes
              </h2>
              <p className="text-gray-600 text-lg mt-3">
                Hear from Africa&apos;s most influential voices in transport,
                governance, and climate action
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {keynoteSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => openModal(speaker)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E1251B]/20 h-full">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f0f2]">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="bg-[#E1251B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg inline-block mb-2">
                          Keynote Speaker
                        </div>
                      </div>
                      {/* View Profile Overlay */}
                      <div className="absolute inset-0 bg-[#E1251B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm flex items-center gap-2">
                          <FaUserCircle className="w-5 h-5" />
                          View Full Profile
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#E1251B] transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {speaker.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Speakers (Full Lineup) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Full Lineup
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Full Speaker Lineup
              </h2>
              <p className="text-gray-600 text-lg mt-3">
                Meet all the inspiring voices joining us at the 8th Women and
                Transport Africa Conference
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularSpeakers.map((speaker, index) => (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  index={index}
                  onOpenModal={openModal}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#f7f0f2]">
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
                  Join Us at WTA 2026
                </h3>
                <p className="text-white/80 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                  Be part of Africa&apos;s premier platform for mobility
                  justice, inclusion, and transformation. Register now to secure
                  your seat.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-6">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
                    className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 duration-300"
                  >
                    Register Now
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdppV9-W_tm297q2LRb7znw9br_mut_k_TCSNRag1AG5cbf8A/viewform"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E1251B] transition-all duration-300"
                  >
                    Submit Abstract
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <Footer />
    </>
  );
}