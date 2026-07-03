"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/assets/images1.webp",
  "/assets/image2.webp",
  "/assets/image3.webp",
  "/assets/image4.webp",
  "/assets/image5.webp",
  
];

export default function ImageCarousel() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation = {false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="carousel-container"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-video">
                <Image
                  src={src}
                  alt={`Conference image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}