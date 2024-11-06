import React, { useState, useEffect, useRef } from "react";
import dwn from "../assets/Button.png";
import pdf from '../assets/pdf.pdf'

const LatestProject = () => {

  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const formRef = useRef(null);

  const handleDownloadClick = () => {
    // setShowModal(true); // Show the form modal
     // Create an anchor element to trigger PDF download
     const link = document.createElement("a");
     link.href = pdf;
     link.download = "Jefferson Reserve Phase II.pdf";
     link.click(); // Programmatically click the link to download the PDF
  };

  // Function to handle form submission
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setShowModal(false); // Close the modal after submission

   
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (formRef.current && !formRef.current.contains(event.target)) {
  //       setShowModal(false);
  //     }
  //   };

  //   if (showModal) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showModal]);

  return (
    <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-9 bg-black font-inter overflow-hidden" >
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-2xl lg:text-4xl xl:text-5xl text-white font-bold"
          >
            To know more download the <br />{" "}
            <span className="text-[#9ECD54]">Latest Project Deck</span>
          </h2>
          <button
            onClick={handleDownloadClick}
            data-aos="fade-left"
            data-aos-duration="1000"
            className="download bg-transparent border-none"
          >
            <img src={dwn} alt="" />
          </button>
        </div>
        {/* {showModal && (
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
      )} */}
        </section>
  )
}

export default LatestProject