import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import dwn from "../assets/Button.png";
import pdf from "../assets/pdf.pdf";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const formRef = useRef(null);

  // Function to handle the 'Invest Now' button click
  const handleInvestNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the download button click (to show the form)
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
    <div className="flex flex-col gap-20 bg-cover bg-center py-8 md:px-20 px-8 lg:px-20 xl:px-36 sm:bg-bg font-inter">
      <div className="header bg-black rounded-full flex justify-between items-center w-full py-4 px-4 md:px-16">
        <div className="logo text-xl font-bold flex items-center">
          <img src={logo} alt="Mailbox Money" className="w-[100px] md:h-auto md:w-auto" />
        </div>
        <div className="actions flex gap-4">
          <button onClick={handleDownloadClick} className="download hidden md:block bg-transparent border-none">
            <img src={dwn} alt="Download PDF" />
          </button>
          <button onClick={handleInvestNow} className="invest bg-[#9ECD54] text-white py-1 md:py-2 px-3 md:px-8 rounded-lg border-none">
            Invest Now
          </button>
        </div>
      </div>

      <div className="form sm:bg-none md:flex items-center gap-4 justify-between">
        <div className="sm:bg-none bg-bg4 bg-cover bg-bottom text lg:w-2/3 xl:w-1/2 flex flex-col justify-center">
          <h1 data-aos="fade-down" data-aos-duration="1000" className="text-3xl lg:text-5xl xl:text-5xl 2xl:text-7xl text-center md:text-start font-semibold mb-6">
            Invest in Your Future with Real Estate
          </h1>
          <p data-aos="fade-down" data-aos-duration="1000" className="text-black font-medium text-center md:text-start md:text-lg leading-7 mb-4">
            A private investment opportunity for accredited investors seeking passive income, tax efficiency, and proven risk management.
          </p>
          <button onClick={handleInvestNow} data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="bg-[#9ECD54] self-center md:self-start mb-10 md:mb-0 text-white py-2 px-8 rounded-lg border-none">
            Invest Now
          </button>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="investment-form bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl mb-4 font-bold">Speak With An Expert Investment Manager</h1>
          <form className="flex flex-col">
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
            <div className="phone flex gap-2 items-center mb-4">
              <input className="phonenumber flex-1 w-full border border-gray-300 rounded-lg p-3" type="tel" placeholder="Phone Number" required />
            </div>
            <label className="text-lg font-medium">
              City<span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Type Here" required className="mb-4 p-3 text-base border border-gray-300 rounded-lg" />

            <button type="submit" className="bg-black text-white py-3 px-8 rounded-lg border-none mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal for the form */}
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
    </div>
  );
};

export default HeroSection;
