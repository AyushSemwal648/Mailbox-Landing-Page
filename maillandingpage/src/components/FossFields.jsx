import React from "react";
import img3 from "../assets/image.png";
import img4 from "../assets/img3.png";

const FossFields = () => {

  const handleInvestNow = () => {

    window.open("https://calendly.com/nate-9mwv", "_blank")
    // const contactSection = document.getElementById('contact');
    // if (contactSection) {
    //   contactSection.scrollIntoView({ behavior: 'smooth' });
    // }

  };


  return (
    <>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 bg-black flex flex-col lg:flex-row lg:items-center gap-10 font-inter">
        <div className="lg:w-2/3">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-white text-4xl lg:text-4xl xl:text-5xl font-bold"
          >
            Foss Fields
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl font-bold mb-9"
          >
            Phase 1
          </h2>
          <p className=" mb-6 text-white  md:text-lg">
            <span className="font-medium ">Foss Fields Phase 1</span> is our
            latest multifamily real estate investment opportunity created to
            generate growth, income and tax efficiency for accredited investors.{" "}
          </p>
          <p className="md:text-lg text-white mb-4">
            Located in{" "}
            <span className="text-[#9ECD54]">Sioux Falls, South Dakota</span>,
            this 100-unit development phase (for a projected total of 508 units)
            will capitalize on the region’s stellar economy: higher-than-average
            personal incomes, low unemployment and rapid growth. Combined with
            Boardwalk’s quick-lease construction model, unique risk management
            framework, and discounted finance terms, early investor demand is
            high.
          </p>
          <button className="text-white bg-[#f20808] px-7 py-3 ">
            Minimum investment starting from $50,000
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-white rounded-lg"
        >
          <img src={img3} alt="" className="mb-4 w-full" />
          <div className="px-8 ">
            <h3 className="mb-2 text-xl font-medium">Foss Fields Phase 1</h3>
            <div className="flex gap-2 text-sm mb-9">
              <img src={location} alt="" className="" />
              <p>Sioux Falls, South Dakota</p>
            </div>
            <div className="space-y-2 mb-9">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54] ...  p-2 rounded">
                <span className="text-sm">Asset Value</span>
                <span className="font-semibold">$15.2m</span>
              </div>
              <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54] ... p-2 rounded">
                <span className="text-sm">IRR</span>
                <span className="font-semibold">19.6%</span>
              </div>
              <div className="flex justify-between items-center bg-gradient-to-r from-[#9ECD54] ... p-2 rounded">
                <span className="text-sm">
                  Targeted Equity
                </span>
                <span className="font-semibold">$5.6m</span>
              </div>
            </div>
            <button onClick={handleInvestNow} className="bg-[#1a94c2] rounded-lg text-white w-full py-4 mb-8">
              invest Now
            </button>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 font-inter">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="lg:w-1/2 ">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Provideing the Best
              <br /> Real Estate{" "}
              <span className="text-[#9ECD54]">Sevices in the Industry</span>
            </h2>
            <p className="mb-4 text-lg">
              We are a dedicated team of professionals committed to delivering
              high-quality real estate services to our clients. With years of
              experience in the industry, we have deep knowledge of the local
              property market and are ready to assist you in achieving your
              goals in property investment. Meet our team and learn more about
              our vision and values.
            </p>
            <button onClick={handleInvestNow} className="bg-[#9ECD54] text-white py-2 px-8 rounded-lg border-none">
              Schedule a call
            </button>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="lg:w-1/2">
            <img src={img4} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FossFields;
