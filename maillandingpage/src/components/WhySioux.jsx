import React, { useState, useEffect, useRef } from "react";
import dwn from "../assets/Button.png";
import pdf from '../assets/pdf.pdf'

const WhySioux = () => {

  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const formRef = useRef(null);

  const handleDownloadClick = () => {
    setShowModal(true); // Show the form modal
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false); // Close the modal after submission

    // Create an anchor element to trigger PDF download
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Foss Fields Phase 1.pdf";
    link.click(); // Programmatically click the link to download the PDF
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
    <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 bg-black font-inter">
        <div className="md:flex justify-between mb-12">
          <h2 data-aos="fade-right" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 md:mb-0">
            Why <span className="text-[#9ECD54]">Sioux Falls?</span>
          </h2>
          <button onClick={handleDownloadClick}   data-aos="fade-left" data-aos-duration="1000" className="download bg-transparent border-none">
            <img src={dwn} alt="" />
          </button >
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          <div data-aos="flip-right" data-aos-duration="1000" className="border-[#9ECD54] border rounded-lg p-4 md:p-7 ">
            <h3 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl ">#1</h3>
            <p className="md:text-xl text-white ">
              Best City for Young Professionals
            </p>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="border-[#9ECD54] border rounded-lg p-4 md:p-7 ">
            <h3 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl ">#1</h3>
            <p className="md:text-xl text-white ">
              Best Small Places for Business and Careers
            </p>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="border-[#9ECD54] border rounded-lg p-4 md:p-7 ">
            <h3 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl ">#3</h3>
            <p className="md:text-xl text-white ">Hottest Job Market in 2020</p>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="border-[#9ECD54] border rounded-lg p-4 md:p-7 ">
            <h3 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl ">#11</h3>
            <p className="md:text-xl text-white ">
              best Quality of Life in the US
            </p>
          </div>
        </div>
        <div  className=" md:flex justify-between gap-4 text-white items-center">
          <h3 data-aos="fade-right" data-aos-duration="1000" className="text-lg lg:text-xl font-bold">
            SIOUX FALLS MULTIFAMILY MARKET SNAPSHOT
          </h3>
          <div data-aos="fade-left" data-aos-duration="1000" className='flex  gap-4 md:gap-8 lg:gap-10 xl:gap-40'>
          <div>
            <h2 className="text-[#9ECD54] text-2xl lg:text-4xl xl:text-5xl font-bold">94.3%</h2>
            <p className="text-xs lg:text-base">Occupancy</p>
          </div>
          <div className="">
            <h2 className="text-[#9ECD54] text-2xl lg:text-4xl xl:text-5xl font-bold">3.6%</h2>
            <p className="text-xs lg:text-base">YOY Rent Growth</p>
          </div>
          </div>
        </div>

        {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={formRef} className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Download PDF Form</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <label className="text-lg font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Type Here" required className="mb-4 p-3 text-base border border-gray-300 rounded-lg" />

              <label className="text-lg font-medium">
                Email ID<span className="text-red-500">*</span>
              </label>
              <input type="email" placeholder="Type Here" required className="mb-4 p-3 text-base border border-gray-300 rounded-lg" />

              <label className="text-lg font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input type="tel" placeholder="Type Here" required className="mb-4 p-3 text-base border border-gray-300 rounded-lg" />

              <label className="text-lg font-medium">
                City<span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Type Here" required className="mb-4 p-3 text-base border border-gray-300 rounded-lg" />

              <button type="submit" className="bg-black text-white py-3 px-8 rounded-lg border-none mt-4">
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
      
      </section>
    </>
  )
}

export default WhySioux