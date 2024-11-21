import React, { useState, useRef, useEffect } from "react";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 8.png";
import img3 from "../assets/image 9.png";
import img4 from "../assets/image 2.png";

const SitePlan = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null); // Create a ref for the form container
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewClick = (img) => {
    setSelectedImage(img);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormOpen(false);
    setIsBlurred(false);
  };

  // Close popup if clicked outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  const handleInvestNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="site-plan" className="px-8 md:px-36 py-24 flex flex-col justify-center overflow-hidden">
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center text-5xl font-bold mb-14"
      >
        Site <span className="text-[#9ECD54]">Plans</span>
      </h2>

      {/* First Image */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="relative mb-10 flex items-center justify-center cursor-pointer">
          <img
            src={img1}
            alt="Site Plan 1"
            className={`w-full h-auto`}
            onClick={() => handleViewClick(img1)}
          />
        </div>
        <div className="relative mb-10 flex items-center justify-center cursor-pointer">
          <img
            src={img2}
            alt="Site Plan 1"
            className={`w-full h-auto`}
            onClick={() => handleViewClick(img2)}
          />
        </div>
      </div>
      {/* <div className="sm:hidden flex gap-2 items-center">
        <div className="flex flex-col gap-2">
          <img
            src={img2}
            alt="Thumbnail 1"
            onClick={() => handleImageClick(img2)}
            className="cursor-pointer  w-20 border-2 hover:border-[#9ECD54]"
          />
          <img
            src={img3}
            alt="Thumbnail 2"
            onClick={() => handleImageClick(img3)}
            className="cursor-pointer w-20 border-2 hover:border-[#9ECD54]"
          />
          <img
            src={img4}
            alt="Thumbnail 3"
            onClick={() => handleImageClick(img4)}
            className="cursor-pointer w-20 border-2 hover:border-[#9ECD54]"
          />
        </div>

        <div className="relative text-center flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Selected Site Plan"
            className={`w-full ${isBlurred ? "blur-sm" : ""}`}
          />
          {isBlurred && (
            <button
              onClick={handleViewClick}
              className="absolute  px-4 py-2 border border-black bg-[#222222] text-white  flex items-center justify-center font-bold p-2 rounded"
            >
              View Site Plans
            </button>
          )}
        </div>
      </div> */}

      {/* <div className="hidden sm:flex flex-col gap-8 sm:flex-row justify-center mb-4">
        
        <div className="relative text-center flex items-center justify-center">
          <img
            src={img2}
            alt="Site Plan 2"
            className={`w-full ${isBlurred ? "blur-sm" : ""}`}
          />
          {isBlurred && (
            <button
              onClick={handleViewClick}
              className="absolute border border-black bg-[#222222] text-white py-2 px-4   flex items-center justify-center font-bold  rounded"
            >
              View Main Floor
            </button>
          )}
        </div>

        <div className="relative text-center flex items-center justify-center">
          <img
            src={img3}
            alt="Site Plan 3"
            className={`w-full ${isBlurred ? "blur-sm" : ""}`}
          />
          {isBlurred && (
            <button
              onClick={handleViewClick}
              className="absolute border border-black bg-[#222222] text-white   py-2 px-4 flex items-center justify-center font-bold p-2 rounded"
            >
              View Second Floor
            </button>
          )}
        </div>

       
        <div className="relative text-center flex items-center justify-center">
          <img
            src={img4}
            alt="Site Plan 4"
            className={`w-full ${isBlurred ? "blur-sm" : ""}`}
          />
          {isBlurred && (
            <button
              onClick={handleViewClick}
              className="absolute border border-black bg-[#222222] text-white  py-2 px-4 flex items-center justify-center font-bold p-2 rounded"
            >
              View Third Floor
            </button>
          )}
        </div>
      </div> */}
      <button
        onClick={handleInvestNow}
        className="bg-[#9ECD54] text-white self-center py-2 px-8 rounded-lg border-none"
      >
        Invest Now
      </button>

      {isFormOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={formRef}
            className="bg-white p-8 rounded shadow-lg w-[700px]"
          >
            <img src={selectedImage} alt="Enlarged Site Plan" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default SitePlan;
