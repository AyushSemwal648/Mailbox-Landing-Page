import React, { useRef, useEffect } from "react";
import img5 from "../assets/Ellipse1.png";
import img6 from "../assets/Ellipse 2.png";
import img7 from "../assets/Ellipse3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import left from "../assets/Vector 29.png";
import right from "../assets/Vector 28.png";

const ClientTestimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Store swiper instance

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 bg-[#D6F0AD] bg-opacity-30 font-inter">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-11"
        >
          Client <span className="text-[#9ECD54]">Testimonial</span>
        </h2>

        <div className="md:hidden sm:flex items-center justify-between mb-12">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            ref={swiperRef} // Save the swiper instance
            className="flex justify-center"
          >
            <SwiperSlide className="flex justify-center">
              <div className=" py-7 px-9 rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/odbNvZsXYHg?si=G4FoWoUpXaGgQ5BY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="h-56"
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className=" py-7 px-9 rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/0q3I9x-YZ5I?si=WsL-LySgoKr3raAc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="h-56"
                ></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="md:hidden flex justify-center gap-5 mt-10">
            <button
              ref={prevRef}
              className="border-black bg-black border w-10 h-10 flex justify-center items-center"
            >
              <img src={left} alt="" className="h-4" />
            </button>
            <button
              ref={nextRef}
              className="border-black bg-black w-10 h-10 flex justify-center items-center"
            >
              <img src={right} alt="" className="h-4" />
            </button>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:gap-8 ">
          <div className="py-14 px-9 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/odbNvZsXYHg?si=G4FoWoUpXaGgQ5BY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full sm:h-80"
            ></iframe>
          </div>
          <div className="py-14 px-9 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/0q3I9x-YZ5I?si=WsL-LySgoKr3raAc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full sm:h-80"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonial;
