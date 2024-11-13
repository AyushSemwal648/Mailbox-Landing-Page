import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name ,setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner on submit

    // Define the template parameters for EmailJS
    const templateParams = {
      from_name: name,
      name,
      email,
      phone,
      state: city, // Map 'city' to 'state' for the template
    };

    // Send email using EmailJS
    emailjs.send(
      'service_50gog5c', // replace with your EmailJS service ID
      'template_a76avl7', // replace with your EmailJS template ID
      templateParams,
      '1Syzwm4o4ohzImUq8' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setLoading(false); // Hide loading spinner after submission is complete
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setTimeout(() => setIsSubmitted(false), 5000);

      // Redirect to the Thank You page
      console.log('Navigating to /thank-you'); // Log this for debugging
  navigate('/thank-you');
    })
    .catch((error) => {
      console.error('EmailJS failed:', error.text);  // Log the error message
      setLoading(false); // Hide the loading spinner if there's an error
    });
    
};

  return (
    <>
    <section id='contact' className="contact-form px-8 md:px-20 lg:px-20 xl:px-36 py-24 font-inter">
        <div data-aos="fade-right" data-aos-duration="1000" className="mb-11">
          <p className="text-2xl mb-4">Get Started</p>
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold">Want to learn more about</h2>
          <h2 className="text-[#9ECD54] text-4xl lg:text-4xl xl:text-5xl font-bold">Mail Box Money</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="lg:flex gap-8 mb-5 lg:mb-0">
              <div className="flex flex-col lg:w-full">
                <label className="text-lg font-medium">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
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
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
            </div>
            <label className="text-lg font-medium">
               Region
            </label>
            <input
              type="text"
              placeholder="Type Here"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="mb-4 p-3 text-base border border-gray-300 rounded-lg"
            />
            <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-lg border-none mt-4 flex items-center justify-center self-start"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loader animate-spin border-4 border-t-transparent border-white rounded-full h-5 w-5 mr-4"></span>
                    Submitting...{" "}
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              {isSubmitted && (
              <p className="text-[#9ECD54] mt-4 font-medium">
                Form submitted successfully! Thank you for reaching out.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact