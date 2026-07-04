"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaPlay, FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const conferences = [
  {
    title: "Technological Innovation Transport - 5th Women and Transport Africa Annual Conference 2022",
    videoId: "H9t_D4cqfMU",
    year: "2022",
    attendees: "300+",
  },
  {
    title: "Women & Transport Africa Conference - 2021",
    videoId: "wzEM4zgYEOg",
    year: "2021",
    attendees: "250+",
  },
  {
    title: "EA Women in Transport (WIT Conference) 2018",
    videoId: "",
    year: "2018",
    attendees: "150+",
    thumbnail: "/images/past/ea-women-in-transport.webp",
  },
  {
    title: "5th Women & Transport Africa Conference 2022",
    videoId: "",
    year: "2022",
    attendees: "300+",
    thumbnail: "/images/past/5th-conference-2022.webp",
  },
  {
    title: "Women & Transport Annual Conference 2021",
    videoId: "",
    year: "2021",
    attendees: "250+",
    thumbnail: "/images/past/annual-2021.webp",
  },
];

export default function PastConferences() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Past Events
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            See Our Past Conferences
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Watch highlights from previous Women and Transport Africa conferences
          </p>
        </motion.div>

        {/* Conferences Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation ={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="past-conferences-carousel"
          >
            {conferences.map((conf, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#f7f0f2] shadow-md hover:shadow-2xl transition-all duration-500">
                    {/* Video or Image Container */}
                    <div className="relative aspect-video">
                      {conf.videoId ? (
                        // YouTube Video Embed
                        <iframe
                          src={`https://www.youtube.com/embed/${conf.videoId}`}
                          title={conf.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="w-full h-full absolute inset-0"
                        />
                      ) : (
                        // Image Placeholder
                        <div className="relative w-full h-full bg-gradient-to-br from-[#E1251B]/20 to-[#A61F1F]/20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-[#E1251B]/10 flex items-center justify-center">
                              <FaPlay className="w-8 h-8 text-[#E1251B] opacity-50" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                      )}
                      
                      {/* Overlay with conference info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="bg-[#E1251B] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                            {conf.year}
                          </span>
                          {conf.attendees && (
                            <span className="flex items-center gap-1 text-white/80 text-xs">
                              <FaUsers className="w-3 h-3" />
                              {conf.attendees}
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
                          {conf.title}
                        </h3>
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-[#E1251B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

   
      </div>
    </section>
  );
}