import React from 'react'


const Contact = () => {
  return (
    <>
    <section id='contact' className="contact-form px-8 md:px-20 lg:px-20 xl:px-36 py-24 font-inter">
        <div data-aos="fade-right" data-aos-duration="1000" className="mb-11">
          <p className="text-2xl mb-4">Get Started</p>
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold">Want to learn more about</h2>
          <h2 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl font-bold">Mail Box Money</h2>
        </div>
        <div>
          <form className="flex flex-col ">
            <div className="lg:flex gap-8 mb-5 lg:mb-0">
              <div className="flex flex-col lg:w-full">
                <label className="text-lg font-medium">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  required
                  className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col lg:w-full">
                <label className="text-lg font-medium">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type Here"
                  required
                  className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-lg font-medium">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="phone flex gap-2 items-center">
                  <input
                    className="phonenumber flex-1 w-full border border-gray-300 rounded-lg p-3"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
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
              className="bg-black self-start text-white py-3 px-8 rounded-lg border-none mt-4 "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact