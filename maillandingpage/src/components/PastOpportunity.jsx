import React, { useRef , useEffect } from "react";
import img9 from "../assets/image12.png";
import img10 from "../assets/image13.png";
import img11 from "../assets/image14.png";
import img12 from "../assets/image15.png";
import img13 from "../assets/image16.png";
import img14 from "../assets/image17.png";
import location from "../assets/location.svg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import left from "../assets/Vector 29.png";
import right from "../assets/Vector 28.png";

const PastOpportunity = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  

  

  return (
    <>
      <section className="px-10 md:px-20 lg:px-20 xl:px-36 py-24 font-inter ">
        <h2 data-aos="fade-down" data-aos-duration="1000" className="text-center text-4xl lg:text-4xl xl:text-5xl font-bold mb-12">
          Past <span className="text-[#9ECD54]">Opportunities</span>
        </h2>

        {/* for Small screen*/}
        <div className=" lg:hidden   md:flex items-center  justify-between mb-24 ">
          <button
            ref={prevRef}
            className="hidden border-black bg-black border rounded-full w-24 h-10 md:flex justify-center items-center "
          >
            <img src={left} alt="" className="h-4" />
          </button>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Move updateNavigation logic directly inside onInit
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update(); // Ensure navigation is updated
              }
            }}
            className="flex justify-center"
          >
            <SwiperSlide className="flex justify-center">
              <div className="bg-white border rounded-lg md:w-2/3 ">
                <img src={img9} alt="" className="mb-4 w-full" />
                <div className="px-8 pb-4">
                  <h3 className="mb-2 text-xl font-medium">
                    Briarwood Reserve Phase 2
                  </h3>
                  <div className="flex gap-2 text-sm mb-9">
                    <img src={location} alt="" className="" />
                    <p className="text-xs xl:text-base">
                      132 Units - Jacksoniville, FL
                    </p>
                  </div>
                  <div className="space-y-2 mb-9">
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ...  p-2 rounded">
                      <span className="text-sm">Acq, Price</span>
                      <span className="font-semibold">$12.1 M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                      <span className="text-sm">Sale Price</span>
                      <span className="font-semibold">$17.9 M</span>
                    </div>
                    <div className="flex justify-between items-center  bg-gradient-to-r  from-[#9ECD54]/50  ... p-2 rounded">
                      <span className="text-sm">Units</span>
                      <span className="font-semibold">138</span>
                    </div>
                  </div>
                  <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                    <p className="font-bold"> Oct-2021</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-white border rounded-lg font-inter md:w-2/3">
                <img src={img10} alt="" className="mb-4 w-full" />
                <div className="px-8 pb-4">
                  <h3 className="mb-2 text-xl font-medium">
                    Equinox at Knight
                  </h3>
                  <div className="flex gap-2 text-sm mb-9">
                    <img src={location} alt="" className="" />
                    <p>Atlanta, GA</p>
                  </div>
                  <div className="space-y-2 mb-9">
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ...  p-2 rounded ">
                      <span className="text-sm">Acq, Price</span>
                      <span className="font-semibold">$23.9 M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ... p-2 rounded ">
                      <span className="text-sm">Sale Price</span>
                      <span className="font-semibold">$39.5 M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ... p-2 rounded ">
                      <span className="text-sm">Units</span>
                      <span className="font-semibold">194</span>
                    </div>
                  </div>
                  <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                    <p className="font-bold"> Dec-2023</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-white border rounded-lg md:w-2/3">
                <img src={img11} alt="" className="mb-4 w-full" />
                <div className="px-8 pb-4 ">
                  <h3 className="mb-2 text-xl font-medium">Brighton Farms</h3>
                  <div className="flex gap-2 text-sm mb-9">
                    <img src={location} alt="" className="" />
                    <p>Atlanta, GA</p>
                  </div>
                  <div className="space-y-2 mb-9">
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ...  p-2 rounded">
                      <span className="text-sm">Development Cost</span>
                      <span className="font-semibold">$16.6 M</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ... p-2 rounded">
                      <span className="text-sm">Sale Price</span>
                      <span className="font-semibold">-</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50 ... p-2 rounded">
                      <span className="text-sm">Units</span>
                      <span className="font-semibold">128</span>
                    </div>
                  </div>
                  <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                    <p className="font-bold">Dev, Start: Oct-2021</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
          <button
            ref={nextRef}
            className=" hidden border-black bg-black rounded-full w-24 h-10  md:flex justify-center items-center"
          >
            <img src={right} alt="" className="h-4" />
          </button>

          <div className="md:hidden  flex justify-center  gap-5 mt-10">
            <button
              ref={prevRef}
              className=" border-black bg-black border  w-10 h-10 flex justify-center items-center "
            >
              <img src={left} alt="" className="h-4" />
            </button>
            <button
              ref={nextRef}
              className=" border-black bg-black  w-10 h-10  flex justify-center items-center"
            >
              <img src={right} alt="" className="h-4" />
            </button>
          </div>
        </div>

        {/* for large screen */}

        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div data-aos="flip-left" data-aos-duration="1000" className="bg-white border rounded-lg">
            <img src={img9} alt="" className="mb-4 w-full" />
            <div className="px-8 pb-4">
              <h3 className="mb-2 text-xl font-medium">
                Briarwood Reserve Phase 2
              </h3>
              <div className="flex gap-2 text-sm mb-9">
                <img src={location} alt="" className="" />
                <p className="text-xs xl:text-base">
                  132 Units - Jacksoniville, FL
                </p>
              </div>
              <div className="space-y-2 mb-9">
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ...  p-2 rounded">
                  <span className="text-sm">Acq, Price</span>
                  <span className="font-semibold">$12.1 M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Sale Price</span>
                  <span className="font-semibold">$17.9 M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Units</span>
                  <span className="font-semibold">138</span>
                </div>
              </div>
              <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                <p className="font-bold"> Oct-2021</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="bg-white border rounded-lg font-inter">
            <img src={img10} alt="" className="mb-4 w-full" />
            <div className="px-8 pb-4">
              <h3 className="mb-2 text-xl font-medium">Equinox at Knight</h3>
              <div className="flex gap-2 text-sm mb-9">
                <img src={location} alt="" className="" />
                <p>Atlanta, GA</p>
              </div>
              <div className="space-y-2 mb-9">
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ...  p-2 rounded">
                  <span className="text-sm">Acq, Price</span>
                  <span className="font-semibold">$23.9 M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Sale Price</span>
                  <span className="font-semibold">$39.5 M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Units</span>
                  <span className="font-semibold">194</span>
                </div>
              </div>
              <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                <p className="font-bold"> Dec-2023</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="bg-white border rounded-lg">
            <img src={img11} alt="" className="mb-4 w-full" />
            <div className="px-8 pb-4 ">
              <h3 className="mb-2 text-xl font-medium">Brighton Farms</h3>
              <div className="flex gap-2 text-sm mb-9">
                <img src={location} alt="" className="" />
                <p>Atlanta, GA</p>
              </div>
              <div className="space-y-2 mb-9">
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ...  p-2 rounded">
                  <span className="text-sm">Development Cost</span>
                  <span className="font-semibold">$16.6 M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Sale Price</span>
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54]/50  ... p-2 rounded">
                  <span className="text-sm">Units</span>
                  <span className="font-semibold">128</span>
                </div>
              </div>
              <div className="border-t-8 border-[#9ECD54] rounded pt-3">
                <p className="font-bold">Dev, Start: Oct-2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-inter">
          <h2 data-aos="fade-down" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-9 ">
            Foss Fields Hands-On <br />
            <span className="text-[#9ECD54]">Leadership Team</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="zoom-in" data-aos-duration="1000" className="">
              <img src={img12} alt="" className="w-full" />
              <div className="text-center">
                <h3 className="font-bold text-2xl">Dusten Hendrickson</h3>
                <p className="text-lg">Developer, Mailbox Money </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="">
              <img src={img13} alt="" className="w-full" />
              <div className="text-center">
                <h3 className="font-bold text-2xl">Omar Khan</h3>
                <p className="text-lg">Principal, Boardwalk Wealth </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="">
              <img src={img14} alt="" className="w-full" />
              <div className="text-center">
                <h3 className="font-bold text-2xl">Caleb Veldhouse</h3>
                <p className="text-lg">Construction, Veldhouse Companies </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastOpportunity;
