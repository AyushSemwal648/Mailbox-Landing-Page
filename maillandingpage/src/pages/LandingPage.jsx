import React, { useState, useEffect, useRef } from "react";
import dwn from "../assets/Button.png";
import img1 from "../assets/Frame 6.png";
import img2 from "../assets/Frame 7.png";
import SitePlan from "../components/SitePlan";
import HeroSection from "../components/HeroSection";
import FossFields from "../components/FossFields";
import WhySioux from "../components/WhySioux";
import ClientTestimonial from "../components/ClientTestimonial";
import Gallery from "../components/Gallery";
import PastOpportunity from "../components/PastOpportunity";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LatestProject from "../components/LatestProject";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const formRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close modal if clicked outside
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    

    // Add the event listener only when the modal is open
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on unmount or when modal is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // 3000ms = 3 seconds
  
    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
      <HeroSection />
      <section className="project bg-black py-14 px-8 md:px-20 lg:px-20 xl:px-36 font-inter">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold md:mb-3"
        >
          Upcoming <span className="text-[#9ECD54]">Projects</span>
        </h2>
        <p className=" text-base text-white">
          Lorem ipsum dolor sit amet consectetur. Tempus sed odio eleifend
          ullamcorper interdum non est. Enim volutpat massa commodo sed neque at
          semper dignissim. Vitae vulputate condimentum dolor convallis
          scelerisque purus egestas eu. Aliquet massa tortor diam congue.
          Aliquet in netus elementum nam in ac lectus. Amet arcu facilisis nibh
          risus mattis.
        </p>
      </section>
      <section className="md:px-20 px-8 lg:px-20 xl:px-36 py-14 font-inter">
        <div className="md:flex justify-between items-center">
          <div className=" mb-10 md:mb-0">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-4xl lg:text-4xl xl:text-5xl font-bold  "
            >
              Partner & <span className="text-[#9ECD54]">Team</span>
            </h2>
            <p className="text-xl text-[#4b4b4b]">
              Collaborative Excellence : Driving Success
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5  ">
            <img
              src={img1}
              data-aos="flip-right"
              data-aos-duration="1000"
              alt=""
              className="lg:w-[250px] xl:w-auto"
            />
            <img
              src={img2}
              alt=""
              data-aos="flip-left"
              data-aos-duration="1000"
              className="lg:w-[250px] xl:w-auto"
            />
          </div>
        </div>
      </section>
      <FossFields />
      <WhySioux />
      <ClientTestimonial />
      <SitePlan />
      <Gallery />
      <PastOpportunity />
      <LatestProject/>
        {showModal && (
          <div className="modal transition-opacity transform ease-in-out duration-1000  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" bg-black relative bg-bg5 bg-opacity-25   lg:h-4/5 p-14 md:flex gap-5 md:w-[90%] lg:w-3/4 items-center">
            
              <div className="md:w-[50%] hidden sm:block">
                <h2 className="text-3xl md:text-5xl font-bold text-white md:mb-4 ">
                  Unlock the Secrets of Profitable{" "}<br/>
                  <span className="text-[#9ecd54]">
                    Real Estate Investments!
                  </span>
                </h2>
                <p className="text-white mb-8">
                  Join our exclusive community of smart investors and learn how
                  to build wealth through real estate!
                </p>
                <p className="text-white">
                  Get access to insider tips on the best investment
                  properties.Stay updated with market trends, investment
                  opportunities, and expert advice.
                </p>
              </div>
              <div ref={formRef} className="bg-white p-8 rounded shadow-lg  sm:h-[400px] md:h-auto md:w-[45%] ">
                <h2 className="text-2xl md:mb-3 md:text-xl 2xl:text-3xl  font-inter font-bold text-center">
                  Please fill the form first
                </h2>
                <form className="flex flex-col" >
                  <label className=" font-medium">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type Here"
                    required
                    className="md:mb-3 p-2 md:p-3 text-base border border-gray-300 rounded-lg"
                  />

                  <label className=" font-medium">
                    Email ID<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type Here"
                    required
                    className="md:mb-3 p-2 md:p-3 text-base border border-gray-300 rounded-lg"
                  />
                  <label className=" font-medium">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="md:mb-3 p-2 md:p-3 text-base border border-gray-300 rounded-lg"
                  />
                  <label className=" font-medium">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type Here"
                    required
                    className="md:mb-3 p-2 md:p-3 text-base border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-2 lg:py-3 px-8 rounded-lg border-none mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height='40px' viewBox="0 0 384 512" className="absolute top-4 right-5 cursor-pointer" onClick={() => setShowModal(false)}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
          </div>
        )}
      
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
