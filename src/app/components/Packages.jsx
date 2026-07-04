"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes, 
  FaCheck, 
  FaCrown, 
  FaStar, 
  FaGem, 
  FaMedal,
  FaTicketAlt,
  FaUser,
  FaGlobe,
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const sponsorshipPackages = [
  {
    title: "Bronze Package",
    price: "KSh 650,000.00",
    usd: "USD 5,000",
    slug: "bronze-package",
    image: "/assets/bronze2.jpg",
    tier: "bronze",
    icon: FaGem,
    color: "from-amber-400 to-amber-600",
    benefits: [
      "Acknowledgment during the conference",
      "Logo on official website",
      "2 conference tickets",
      "Exhibition booth",
      "Engagement with delegates & stakeholders",
    ],
  },
  {
    title: "Silver Sponsor",
    price: "KSh 980,000.00",
    usd: "USD 7,500",
    slug: "silver-package",
    image: "/assets/silver2.jpg",
    tier: "silver",
    icon: FaMedal,
    color: "from-gray-400 to-gray-500",
    benefits: [
      "Official recognition throughout the conference",
      "Logo in key visibility spaces",
      "Inclusion in delegate materials",
      "4 conference tickets",
      "Exhibition booth",
      "Brochure in delegate packs",
    ],
  },
  {
    title: "Gold Sponsor",
    price: "KSh 1,300,000.00",
    usd: "USD 10,000",
    slug: "gold-package",
    image: "/assets/gold2.jpg",
    tier: "gold",
    icon: FaStar,
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Strategic session shaping & agenda input",
      "Strong branding within the venue",
      "6 conference tickets",
      "VIP exhibition engagement",
      "Speaking in selected sessions",
      "Sponsor branding across media platforms",
      "Visibility through communications channels",
    ],
  },
  {
    title: "Official Partner",
    price: "KSh 2,000,000.00",
    usd: "USD 15,000",
    slug: "platinum-package",
    image: "/assets/official2.jpg",
    tier: "Official Partner",
    icon: FaCrown,
    color: "from-purple-400 to-purple-600",
    benefits: [
      "Headline recognition on all materials",
      "Prominent logo placement (pre-conference & onsite)",
      "Dedicated speaking opportunities",
      "8 conference tickets",
      "Featured plenary/side event role",
      "Premium exhibition visibility & VIP booth visit",
      "Full-page inclusion in conference materials",
      "Extensive digital & social media recognition",
    ],
  },
];

const ticketPackages = [
  {
    title: "Residents – Single Day Pass",
    price: "KES 12,000",
    icon: FaUser,
    description: "Gives access to the main conference proceedings of that day and meals",
    badge: "Resident",
  },
  {
    title: "Non-Residents – Single Day Pass",
    price: "KES 25,000 (USD 195)",
    icon: FaGlobe,
    description: "Gives access to the main conference proceedings of that day and meals",
    badge: "Non-Resident",
  },
  {
    title: "Residents – Full Conference",
    price: "KES 36,000",
    icon: FaCalendarCheck,
    description: "Gives access to the main conference proceedings for the 2.5 days, meals and all side events",
    badge: "Resident",
  },
  {
    title: "Non-Residents – Full Conference",
    price: "KES 65,000 (USD 500)",
    icon: FaCalendarCheck,
    description: "Gives access to the main conference proceedings for the 2.5 days, meals and all side events",
    badge: "Non-Resident",
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedPackage(null), 300);
  };

  const renderPackageCard = (pkg) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative aspect-square">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
          {pkg.usd}
        </div>
        <div className="absolute bottom-4 left-4 bg-[#E1251B] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {pkg.tier.toUpperCase()}
        </div>
      </div>
      <div className="p-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <pkg.icon className={`text-2xl bg-gradient-to-r ${pkg.color} text-transparent bg-clip-text`} />
          <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
        </div>
        <p className="text-[#E1251B] font-bold text-lg">{pkg.price}</p>
        <button
          onClick={() => openModal(pkg)}
          className="mt-4 inline-flex items-center gap-2 bg-[#E1251B] text-white px-6 py-2.5 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 group-hover:shadow-lg"
        >
          View Details
          <FaStar className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E1251B]/5 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          {/* Sponsorship Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Sponsorship Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
              Sponsorship Packages
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Partner with us to drive inclusive mobility across Africa
            </p>
          </motion.div>

          {/* Sponsorship Packages Carousel with Custom Navigation */}
          <div className="mt-12 relative">
            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-[#E1251B] text-white shadow-lg shadow-[#E1251B]/30 hover:bg-[#A61F1F] hover:shadow-xl hover:shadow-[#E1251B]/40 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-[#E1251B] text-white shadow-lg shadow-[#E1251B]/30 hover:bg-[#A61F1F] hover:shadow-xl hover:shadow-[#E1251B]/40 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
           
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {sponsorshipPackages.map((pkg, index) => (
                <SwiperSlide key={index}>
                  {renderPackageCard(pkg)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Individual Tickets Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                Tickets
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Josefin_Sans']">
                Individual Ticket Packages
              </h3>
              <p className="text-gray-600 text-lg mt-3">
                Join us for the 8th Annual Women and Transport Africa Conference
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ticketPackages.map((ticket, index) => {
                const Icon = ticket.icon;
                const isResident = ticket.badge === "Resident";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#f7f0f2] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E1251B]/20 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E1251B] flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-gray-800 text-sm">
                            {ticket.title}
                          </h4>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            isResident 
                              ? "bg-green-100 text-green-700" 
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {ticket.badge}
                          </span>
                        </div>
                        <p className="text-[#E1251B] font-bold text-lg mt-1">
                          {ticket.price}
                        </p>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                          {ticket.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tickets CTA - commented out as per original */}
            {/* <div className="text-center mt-8">
              <Link
                href="/registration#tickets"
                className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-8 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
              >
                <FaTicketAlt className="w-4 h-4" />
                Purchase Tickets
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className={`h-32 bg-gradient-to-r ${selectedPackage.color} rounded-t-3xl flex items-center justify-center`}>
                  <selectedPackage.icon className="text-white text-6xl" />
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition text-white flex items-center justify-center"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {selectedPackage.tier} Tier
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center font-['Josefin_Sans']">
                  {selectedPackage.title}
                </h3>
                <div className="flex justify-center gap-4 mt-2">
                  <span className="text-[#E1251B] font-bold text-xl">
                    {selectedPackage.price}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    ({selectedPackage.usd})
                  </span>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaCheck className="text-[#E1251B] w-4 h-4" />
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 text-gray-600 text-sm"
                      >
                        <FaCheck className="text-[#E1251B] w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/product/${selectedPackage.slug}`}
                    className="flex-1 bg-[#E1251B] text-white text-center px-6 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
                  >
                    Get This Package
                  </Link>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-100 text-gray-700 text-center px-6 py-3 rounded-[1em_0] font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}