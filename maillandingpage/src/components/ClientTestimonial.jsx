import React, { useRef, useEffect} from "react";
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
        <h2 data-aos="fade-down" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-11">
          Client <span className="text-[#9ECD54]">Testimonial</span>
        </h2>

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
              <div className="bg-[#9ECD54] py-14 px-9 rounded-lg">
                <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold font-inter">
                  "
                </p>
                <p className="px-4 text-white mb-8">
                  OHHHH Thanks god !!!! Finally there is someone making it for
                  me to use on my projects. Love ya{" "}
                </p>
                <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
                  <img src={img5} alt="" className="rounded-full" />
                  <div className="">
                    <h3 className="text-white">Hohn Williams</h3>
                    <p>Texas</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-[#9ECD54] py-14 px-9 rounded-lg">
                <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold">
                  "
                </p>
                <p className="px-4 text-white mb-8">
                  OHHHH Thanks god !!!! Finally there is someone making it for
                  me to use on my projects. Love ya{" "}
                </p>
                <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
                  <img src={img6} alt="" className="rounded-full" />
                  <div className="">
                    <h3 className="text-white">Hohn Williams</h3>
                    <p>Texas</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-[#9ECD54] py-14 px-9 rounded-lg">
                <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold">
                  "
                </p>
                <p className="px-4 text-white mb-8">
                  OHHHH Thanks god !!!! Finally there is someone making it for
                  me to use on my projects. Love ya{" "}
                </p>
                <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
                  <img src={img7} alt="" className="rounded-full" />
                  <div className="">
                    <h3 className="text-white">Jade Will</h3>
                    <p>Florida</p>
                  </div>
                </div>
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
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div data-aos="flip-left" data-aos-duration="1000" className="bg-[#9ECD54] py-14 px-9 rounded-lg">
            <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold font-inter">
              "
            </p>
            <p className="px-4 text-white mb-8">
              OHHHH Thanks god !!!! Finally there is someone making it for me to
              use on my projects. Love ya{" "}
            </p>
            <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
              <img src={img5} alt="" className="rounded-full" />
              <div className="">
                <h3 className="text-white">Hohn Williams</h3>
                <p>Texas</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="bg-[#9ECD54] py-14 px-9 rounded-lg">
            <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold">
              "
            </p>
            <p className="px-4 text-white mb-8">
              OHHHH Thanks god !!!! Finally there is someone making it for me to
              use on my projects. Love ya{" "}
            </p>
            <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
              <img src={img6} alt="" className="rounded-full" />
              <div className="">
                <h3 className="text-white">Hohn Williams</h3>
                <p>Texas</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="bg-[#9ECD54] py-14 px-9 rounded-lg">
            <p className="text-4xl lg:text-4xl xl:text-5xl mb-5 text-white font-bold">
              "
            </p>
            <p className="px-4 text-white mb-8">
              OHHHH Thanks god !!!! Finally there is someone making it for me to
              use on my projects. Love ya{" "}
            </p>
            <div className="border-t-4 rounded border-[#668832] flex gap-4 pt-3">
              <img src={img7} alt="" className="rounded-full" />
              <div className="">
                <h3 className="text-white">Jade Will</h3>
                <p>Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonial;
