import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import left from "../assets/Vector 29.png";
import right from "../assets/Vector 28.png";

const Gallery = () => {
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

  const handleInvestNow = () => {

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

  };


  return (
    <>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 bg-black font-inter">
        <div className="flex justify-between mb-14">
          <h2 data-aos="fade-right" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl text-white font-bold">
            Gallery
          </h2>
          <button onClick={handleInvestNow} data-aos="fade-left" data-aos-duration="1000" className="bg-[#9ECD54] text-white py-2 px-8 rounded-lg border-none">
            Invest Now
          </button>
        </div>

        <div className="md:hidden sm:flex items-center justify-between mb-24">
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
              <div className="relative rounded-lg bg-bg1 h-[500px] w-full  bg-cover pl-8">
                <div className="absolute bottom-4">
                  <h2 className="text-2xl text-white font-bold">The Cottage</h2>
                  <p className="text-white">128 Units - Sioux Falls, SD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative rounded-lg bg-bg2 h-[500px] w-full bg-cover pl-8">
                <div className="absolute bottom-4">
                  <h2 className="text-2xl text-white font-bold">
                    The Velthuis
                  </h2>
                  <p className="text-white">144 Units - Sioux Falls, SD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="relative rounded-lg bg-bg3 h-[500px] w-full  bg-cover pl-8">
                <div className="absolute bottom-4">
                  <h2 className="text-2xl text-white font-bold">
                    The Blu of Lorriane
                  </h2>
                  <p className="text-white">45 Units - Watertown, SD</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="md:hidden flex justify-center gap-5 mt-10">
            <button
              ref={prevRef}
              className="border-black bg-[#9ECD54] border w-10 h-10 flex justify-center items-center"
            >
              <img src={left} alt="" className="h-4" />
            </button>
            <button
              ref={nextRef}
              className="border-black bg-[#9ECD54] w-10 h-10 flex justify-center items-center"
            >
              <img src={right} alt="" className="h-4" />
            </button>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div data-aos="flip-left" data-aos-duration="1000" className="relative rounded-lg bg-bg1 h-[500px]  bg-cover pl-8">
            <div className="absolute bottom-4">
              <h2 className="text-2xl text-white font-bold">The Cottage</h2>
              <p className="text-white">128 Units - Sioux Falls, SD</p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="relative rounded-lg bg-bg2 h-[500px]  bg-cover pl-8">
            <div className="absolute bottom-4">
              <h2 className="text-2xl text-white font-bold">The Velthuis</h2>
              <p className="text-white">144 Units - Sioux Falls, SD</p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="relative rounded-lg bg-bg3 h-[500px]  bg-cover pl-8">
            <div className="absolute bottom-4">
              <h2 className="text-2xl text-white font-bold">
                The Blu of Lorriane
              </h2>
              <p className="text-white">45 Units - Watertown, SD</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
