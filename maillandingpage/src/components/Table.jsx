import React from "react";

const Table = () => {
  const handleInvestNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div id="projects-return" className="w-full  bg-[#D6F0AD] bg-opacity-30 px-4 md:px-10 lg:px-20 xl:px-36 py-16 md:py-24 flex flex-col justify-center">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 self-center text-center"
        >
          Project <span className="text-[#9ECD54]">Return</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-center">
                <th className="text-xs md:text-sm font-bold text-gray-800"></th>
                <th className="text-xs md:text-sm font-bold text-gray-800">
                  Preferred Return
                </th>
                <th className=" text-xs md:text-sm font-bold text-gray-800">IRR</th>
                <th className="text-xs md:text-sm font-bold text-gray-800">
                  Equity Multiple
                </th>
                <th className=" text-xs md:text-sm font-bold text-gray-800">AAR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#9ECD54] text-white text-left ">
                <td className="p-2 md:p-4">
                  <div className="font-bold">Class A</div>
                  <div className="text-xs md:text-sm">$50K - $75K Investment</div>
                </td>
                <td className="p-2 md:p-4 text-center">5%</td>
                <td className=" p-2 md:p-4 text-center">19.6%</td>
                <td className="p-2 md:p-4 text-center">1.90x</td>
                <td className=" p-2 md:p-4 text-center">24.1%</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="p-2 md:p-4">
                  <div className="font-bold">Class B</div>
                  <div className="text-xs md:text-sm">$80K - $145K Investment</div>
                </td>
                <td className="p-2 md:p-4 text-center">6%</td>
                <td className=" p-2 md:p-4 text-center">19.8%</td>
                <td className="p-2 md:p-4 text-center">1.92x</td>
                <td className=" p-2 md:p-4 text-center">24.4%</td>
              </tr>
              <tr className="bg-black text-white">
                <td className="p-2 md:p-4">
                  <div className="font-bold">Class C</div>
                  <div className="text-xs md:text-sm">$150K + Investment</div>
                </td>
                <td className="p-2 md:p-4 text-center">7%</td>
                <td className=" p-2 md:p-4 text-center">20.0%</td>
                <td className="p-2 md:p-4 text-center">1.93x</td>
                <td className=" p-2 md:p-4 text-center">24.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={handleInvestNow}
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="bg-[#9ECD54] self-center my-8 md:my-10 md:mb-0 text-white py-2 px-4 md:px-8 rounded-lg"
        >
          Invest Now
        </button>
      </div>
      <div className="w-full  px-4 md:px-10 lg:px-20 xl:px-36 py-16 md:py-24 flex flex-col justify-center">
        <h2
          id="tax-benefit"
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 self-center text-center"
        >
          Potential <span className="text-[#9ECD54]">Tax Benefits</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">
                  FOR EVERY $100K IN INVESTMENT
                </th>
                <th className=" p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">UNITS</th>
                <th className="p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">EQUITY/COST</th>
                <th className=" p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">TAX CREDIT/DEP %</th>
                <th className="p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">TOTAL CREDITS/DEP.</th>
                <th className="p-2 md:p-4 text-xs md:text-sm font-bold text-gray-800 text-left">TOTAL TO $100K INVESTOR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-2 md:p-4">Tax credits (estimate)</td>
                <td className=" p-2 md:p-4 text-center">96</td>
                <td className="p-2 md:p-4 text-center">$4,888,664</td>
                <td className=" p-2 md:p-4 text-center">$2,500</td>
                <td className="p-2 md:p-4 text-center">$240,000</td>
                <td className="p-2 md:p-4 text-center">$3,437</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 md:p-4">Depreciation* % (estimate)</td>
                <td className=" p-2 md:p-4 text-center">96</td>
                <td className="p-2 md:p-4 text-center">$13,100,000</td>
                <td className=" p-2 md:p-4 text-center">8.6%</td>
                <td className="p-2 md:p-4 text-center">$1,126,000</td>
                <td className="p-2 md:p-4 text-center">$16,132</td>
              </tr>
              <tr className="bg-black text-white font-bold">
                <td className="p-2 md:p-4">Total Benefits</td>
                <td className=" p-2 md:p-4"></td>
                <td className="p-2 md:p-4"></td>
                <td className=" p-2 md:p-4"></td>
                <td className="p-2 md:p-4 text-center">$1,366,600</td>
                <td className="p-2 md:p-4 text-center">$19,568</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={handleInvestNow}
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="bg-[#9ECD54] self-center my-8 md:my-10 md:mb-0 text-white py-2 px-4 md:px-8 rounded-lg"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default Table;
