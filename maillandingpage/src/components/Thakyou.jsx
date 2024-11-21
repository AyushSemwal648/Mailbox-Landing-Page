import React, { useState, useEffect } from "react";
import dwn from "../assets/Button.png";
import logo from "../assets/logo.png";
import pdf from "../assets/pdf.pdf";
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Initialize countdown to 3 seconds

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Jefferson Reserve Phase II.pdf";
    link.click();
  };

  const handleInvestNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      navigate("/"); // Redirect to the Contact page after countdown reaches 0
    } else {
      // Set a timer to update the countdown every second
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);

      // Clear the timer on component unmount or countdown reset
      return () => clearTimeout(timer);
    }
  }, [countdown, navigate]);

  const handleHomeClick = () => {
    window.location.href = "https://mailboxmoneyre.com/";
  };

  return (
    <>
      <Helmet>
        <script type="text/javascript">
          {`
          gtag('event', 'conversion', {
              'send_to': 'AW-16652663635/zvU-CKPy-uUZENP2zYQ-',
              'value': 1.0,
              'currency': 'USD'
          });
        `}
        </script>
      </Helmet>
      <div className="relative">
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

        <div className="w-full flex justify-center items-center py-24 font-inter">
          <div className="w-[80%] sm:w-[50%] bg-[#9ECD54] bg-opacity-25 px-6 py-12 flex flex-col justify-center items-center rounded-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#9ECD54] mb-4 ">
              Thank You
            </h1>
            <p className="mb-2 text-sm sm:text-base text-center">
              You will be redirected back to the Contact page in{" "}
              <span className="font-bold text-blue-700">
                {countdown} seconds.{" "}
              </span>
            </p>
            <p className="text-sm sm:text-base text-center">
              Or click here to go to the Official Website:
            </p>
            <button
              onClick={handleHomeClick}
              className="py-2 px-4 border border-black bg-black text-white rounded-lg mt-2"
            >
              Click Here
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ThankYou;
