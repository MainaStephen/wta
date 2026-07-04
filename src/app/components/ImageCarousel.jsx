"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/assets/home-slider/slider21.jpg",
  "/assets/home-slider/slider1.jpg",
  "/assets/home-slider/slider2.jpg",
  "/assets/home-slider/slider3.jpg",
  "/assets/home-slider/slider4.jpg",
  "/assets/home-slider/slider5.jpg",
  "/assets/home-slider/slider6.jpg",
   "/assets/home-slider/slider17.jpg",
  "/assets/home-slider/slider7.jpg",
  "/assets/home-slider/slider8.jpg",
  "/assets/home-slider/slider19.jpg",
  "/assets/home-slider/slider9.jpg",
  "/assets/home-slider/slider10.jpg",
  "/assets/home-slider/slider11.jpg",
  "/assets/home-slider/slider12.jpg",
  "/assets/home-slider/slider13.jpg",
  "/assets/home-slider/slider14.jpg",
  "/assets/home-slider/slider15.jpg",
  "/assets/home-slider/slider16.jpg",
 
  "/assets/home-slider/slider18.jpg",
  
  "/assets/home-slider/slider20.jpg",
  
 
  
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