import React, { useState, useEffect, useRef } from "react";
import dwn from "../assets/Button.png";
import logo from "../assets/logo.png";
import pdf from "../assets/pdf.pdf";
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
import Table from "../components/Table";
import img12 from "../assets/image15.png";
import img13 from "../assets/image16.png";
import img14 from "../assets/image17.png";
import Founder from "../components/Founder";

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
    }, 5000); 

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Jefferson Reserve Phase II.pdf";
    link.click(); // Programmatically click the link to download the PDF
  };

  const handleInvestNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="relative overflow-hidden">
      <div className="header border-b border-[#9ECD54] sticky top-0 z-50 bg-black flex justify-between items-center w-full py-4 px-4 md:px-16">
        <div className="logo text-xl font-bold flex items-center">
          <img
            src={logo}
            alt="Mailbox Money"
            className="w-[100px] md:h-auto md:w-auto"
          />
        </div>
        <div className="actions flex gap-4">
          <button
            onClick={handleDownloadClick}
            className="download hidden md:block bg-transparent border-none"
          >
            <img src={dwn} alt="Download PDF" />
          </button>
          <button
            onClick={handleInvestNow}
            className="invest bg-[#9ECD54] text-white py-1 md:py-2 px-3 md:px-8 rounded-lg border-none"
          >
            Invest Now
          </button>
        </div>
      </div>
      <HeroSection />
      <section className="project bg-black py-14 px-8 md:px-20 lg:px-20 xl:px-36 font-inter">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold md:mb-3"
        >
          About <span className="text-[#9ECD54]">Projects</span>
        </h2>
        <ul className=" text-base text-white">
          <li><span className="font-bold">Project: </span>96 unit second phase development (for a total of 180 units) in Sioux Falls, SD</li>
          <li><span className="font-bold">Opportunity Zone: </span>Investors may use the sale of other assets to reinvest capital gains and defer taxes on those gains</li>
          <li><span className="font-bold">Bonus Depreciation & Tax Credits: </span>Investors get 2024 and 2025 tax breaks: ~20% of their invested capital</li>
        </ul>
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
      <PastOpportunity />
      <Table/>
      <WhySioux />
      <ClientTestimonial />
      <SitePlan />
      {/* <Gallery /> */}
      <div className=" px-8 md:px-36 py-24 font-inter bg-[#D6F0AD] bg-opacity-30">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-9 "
          >
            Jefferson Reserve Hands-On <br />
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
        <Founder/>
      <LatestProject />
      {showModal && (
        <div className="modal transition-opacity transform ease-in-out duration-1000  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" bg-black relative  bg-opacity-70 border  border-[#9ECD54]  lg:h-4/5 p-14 md:flex gap-5 md:w-[90%] lg:w-3/4 items-center">
            <div className="md:w-[50%] hidden sm:block">
              <h2 className="text-3xl md:text-5xl font-bold text-white md:mb-4 ">
                Unlock the Secrets of Profitable <br />
                <span className="text-[#9ecd54]">Real Estate Investments!</span>
              </h2>
              <p className="text-white mb-8">
                Join our exclusive community of smart investors and learn how to
                build wealth through real estate!
              </p>
              <p className="text-white">
                Get access to insider tips on the best investment
                properties.Stay updated with market trends, investment
                opportunities, and expert advice.
              </p>
            </div>
            <div
              ref={formRef}
              className="bg-white p-8 rounded shadow-lg  sm:h-[400px] md:h-auto md:w-[45%] "
            >
              <h2 className="text-2xl md:mb-3 md:text-xl 2xl:text-3xl  font-inter font-bold text-center">
                Please fill the form first
              </h2>
              <form className="flex flex-col">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              height="40px"
              viewBox="0 0 384 512"
              className="absolute top-4 right-5 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </div>
      )}

      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default LandingPage;
