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

  const handleminimuninvestment = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 bg-black flex flex-col lg:flex-row lg:items-center gap-10 font-inter overflow-hidden">
        <div className="lg:w-2/3">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-white text-4xl lg:text-4xl xl:text-5xl font-bold"
          >
            Jefferson Reserve
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl font-bold mb-9"
          >
            Phase II
          </h2>
          <p className=" mb-6 text-white  md:text-lg">
            <span className="font-medium ">Exclusive “Maximize Your Profits” Bonus</span> 
          </p>
          <p className="md:text-lg text-white mb-4">
            <span className="font-medium">Investors in Jefferson Reserve Phase II gain access to three powerful wealth-boosting advantages:</span>,
            <ul>
              <li>1: Immediate depreciation write-offs</li>
              <li>2: Instant tax credits from energy-efficient construction</li>
              <li>3: Opportunity Zone deferral of capital gains from recent asset sales</li>
            </ul>
          </p>
          <button className="text-white bg-[#f20808] px-7 py-3 " onClick={handleminimuninvestment}>
            Minimum investment starting from $50,000
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-white rounded-lg lg:w-[40%] h-full"
        >
          <div className="relative h-56 lg:h-48 w-full mb-4 rounded-t-lg">
              <img src={img3} alt="" className="h-full w-full rounded-t-lg" />
              <p className="px-3 py-1 rounded-xl absolute top-2 right-4  bg-[#9ECD54] text-white">
                Ongoing
              </p>
            </div>
          <div className="px-8 ">
            <h3 className="mb-2 text-xl font-medium">Jefferson Reserve Phase II</h3>
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
              Schedule a call
            </button>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-24 font-inter bg-[#D6F0AD] bg-opacity-30 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="lg:w-1/2 ">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Providing the Best
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
            <button onClick={handleInvestNow} className="bg-[#1a94c2] text-white py-2 px-8 rounded-lg border-none">
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
