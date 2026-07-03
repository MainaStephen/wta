"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The Conference has really helped me. I saw women who were drivers in the big city and had their own fleet, and I was encouraged. I drive around the city very well. Flone, thank you for the platform and opportunity to realize my potential.",
    author: "Caroline Wanjiku",
    company: "Women in Transport",
    rating: 5,
  },
  {
    quote:
      "As a driver, the conference trainings have given me confidence because I know my rights as a woman on the road.",
    author: "Emily Midora Mumata",
    company: "Women in Transport",
    rating: 5,
  },
  {
    quote:
      "WIT conference is a great platform, especially for women social entrepreneurs working toward solving urban challenges. Through these networks, you can learn from other organizations working on similar projects and get advice on leapfrog some challenges.",
    author: "Mary Atieno",
    company: "",
    rating: 5,
  },
  {
    quote:
      "WTA offered my start-up (Wow Mom Ltd) an international platform to showcase work. We were able to present our feasibility study on 'Implication of lack of baby changing facilities to access of space by children and caregiver' to a wider audience.",
    author: "Eninah Ndegwa",
    company: "Wow Mom Kenya",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E1251B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#E1251B]/5 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-[#E1251B]/10 text-[#E1251B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-['Josefin_Sans']">
            What Our Attendees Say
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Real stories from real people who experienced the conference
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation ={false}
            pagination={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="testimonials-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-[#f7f0f2] rounded-2xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500 border border-[#E1251B]/5 hover:border-[#E1251B]/20 relative min-h-[280px] flex flex-col">
                    {/* Quote icons */}
                    <div className="absolute top-6 left-6 text-[#E1251B]/10 group-hover:text-[#E1251B]/20 transition-colors duration-300">
                      <FaQuoteLeft className="w-8 h-8" />
                    </div>
                    <div className="absolute bottom-6 right-6 text-[#E1251B]/10 group-hover:text-[#E1251B]/20 transition-colors duration-300">
                      <FaQuoteRight className="w-8 h-8" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1 relative z-10">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div className="mt-6 pt-4 border-t border-[#E1251B]/10">
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonial.author}
                      </h4>
                      {testimonial.company && (
                        <p className="text-[#E1251B] text-sm font-medium">
                          {testimonial.company}
                        </p>
                      )}
                    </div>

                    {/* Decorative accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E1251B] to-[#A61F1F] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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