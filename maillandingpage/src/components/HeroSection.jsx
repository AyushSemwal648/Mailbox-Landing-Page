import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  // const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  // Function to handle the 'Invest Now' button click
  const handleInvestNow = () => {
    const contactSection = document.getElementById("tax-benefit");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the download button click (to show the form)
  // const handleDownloadClick = () => {
  //   setShowModal(true); // Show the form modal
  // };

  // Function to handle form submission
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setShowModal(false); // Close the modal after submission

  //   // Create an anchor element to trigger PDF download
  //   const link = document.createElement("a");
  //   link.href = pdf;
  //   link.download = "Foss Fields Phase 1.pdf";
  //   link.click(); // Programmatically click the link to download the PDF
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
    <div className=" bg-center bg-cover bg-black bg-opacity-75 sm:bg-bg ">
      <div className="font-inter py-8 md:px-20 px-8 lg:px-20 xl:px-36 bg-black bg-opacity-50 flex flex-col gap-20">
        <div className="form sm:bg-none md:flex items-center gap-4 justify-between">
          <div className="sm:bg-none  bg-cover text-white bg-bottom text lg:w-2/3 xl:w-1/2 flex flex-col justify-center">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl lg:text-5xl xl:text-5xl 2xl:text-7xl text-center md:text-start font-semibold mb-6"
            >
              Invest in{" "}
              <span className="text-[#9ECD54]">
                Jefferson Reserve Phase II:
              </span>{" "}
              Secure Wealth Today
            </h1>
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              className="font-medium text-center md:text-start md:text-lg leading-7 mb-4"
            >
              Exclusive opportunity for accredited investors. Earn passive
              income with tax benefits and proven risk management.
            </p>
            <button
              onClick={handleInvestNow}
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="bg-[#9ECD54] self-center md:self-start mb-10 md:mb-0 text-white py-2 px-8 rounded-lg border-none"
            >
              Check Tax Benefits
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="investment-form bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-2xl mb-4 font-bold">
              Speak With An Expert Investment Manager
            </h1>
            <form className="flex flex-col">
              <label className="text-lg font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                required
                className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
              />

              <label className="text-lg font-medium">
                Email ID<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Type Here"
                required
                className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
              />

              <label className="text-lg font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="phone flex gap-2 items-center mb-4">
                <input
                  className="phonenumber flex-1 w-full border border-gray-300 rounded-lg p-3"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <label className="text-lg font-medium">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                required
                className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-lg border-none mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Modal for the form */}
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
      </div>
    </div>
  );
};

export default HeroSection;
