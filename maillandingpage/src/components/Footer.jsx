import React from 'react'
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
    <section className="px-8 md:px-20 lg:px-20 xl:px-36 py-12 bg-black font-inter">
        <h2 data-aos="fade-down" data-aos-duration="1000" className="text-center text-[#9ECD54] text-2xl mb-8 font-semibold">
          DISCLOSURE OF INTERESTS:
        </h2>
        <p  className="text-white text-center mb-20">
          “ All securities offered by Mailbox Money RE and its affiliates are
          made pursuant to an exemption from registration under the Securities
          Act of 1933. The Securities offered are only done so to certain
          qualified investors through the offering documents and may involve
          certain risk factors as discussed therein. Nothing on this website can
          be constituted to be an offer or sale of securities. We make no
          representation or guarantee as to the success of any investment.
          Investors should always consult a qualified financial professional
          before making any investment decisions."
        </p>
        <div className="logo text-xl font-bold flex items-center justify-center">
          <img src={logo} alt="Mailbox Money" />
        </div>
      </section>
    </>
  )
}

export default Footer