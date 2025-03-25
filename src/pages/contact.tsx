import React, { useState, useEffect } from 'react';
import App_layout from '@/layout/app_layout';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AddressIcon, EmailIcon, CallIcon } from '@/components/common/footer-icon';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    place: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setFormData({ name: '', number: '', email: '', place: '', message: '' });
    }, 2000);
  };

  return (
    <App_layout>
      <div className="py-5 mt-22 bg-gradient-to-br from-blue-50 to-gray-100">
        <div data-aos="fade-up" className="">
          <h3 className="text-3xl font-bold text-center text-gray-800">Get in touch with us</h3>

          <div className="pt-10 flex flex-col md:flex-row max-w-[1300px] mx-auto justify-evenly max-md:px-4">
            {/* Contact Form Section (Left) */}
            <div data-aos="fade-right" className="w-full md:w-6/12">
              <div className="bg-white border border-gray-300 shadow-xl rounded-2xl p-8 max-w-[600px] mx-auto backdrop-blur-md bg-opacity-60">
                <h3 className="text-blue-500 text-2xl pb-4 text-center font-bold">Let&apos;s Work Together</h3>
                <h1 className="text-[26px] font-bold">Contact us</h1>
                    <p className="mt-3 text-gray-600">
                      Email us at techbeeshive@gmail.com or message us here:
                    </p>
                    <form onSubmit={handleSubmit} className="mt-10">
                  <div className="grid gap-6 sm:grid-cols-2">


                  <div className="relative z-0">
                          <input
                            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                            name="name"
                            id="name"
                            type="text"
                            maxLength={30}
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                            Your Name
                          </label>
                        </div>
                   
                    <div className="relative z-0">
                          <input
                            name="number"
                            id="number"
                            type="text"
                            maxLength={14}
                            required
                            pattern="\d*"
                            value={formData.number}
                            onChange={handleInputChange}
                            className="peer block w-full border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                          />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                            Contact Number
                          </label>
                        </div>
                  
                  
                    <div className="relative z-0 col-span-2">
                          <input
                            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                            name="email"
                            id="email"
                            type="email"
                            maxLength={30}
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                            Your Email
                          </label>
                        </div>   
                    <div className="relative z-0 col-span-2">
                          <input
                            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                            name="place"
                            id="place"
                            type="text"
                            maxLength={30}
                            value={formData.place}
                            onChange={handleInputChange}
                          />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                            Your Place
                          </label>
                        </div>
                        
                        
                           <div className="relative z-0 col-span-2">
                          <textarea
                            rows={3}
                            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                            Type Your Message here...
                          </label>
                        </div>
                        </div>
                  <button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-600 transition duration-300 px-8 py-2 text-white flex items-center gap-2 rounded-lg shadow-lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <Image src="/paper.svg" width={35} height={35} alt="sent-icon" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details (Right) */}
            <div className="w-full md:w-5/12 max-md:mt-10">
            <div className="border border-gray-300 shadow-lg rounded-md p-6 py-10 bg-white flex flex-col items-center gap-10 max-md:gap-5">
              {/* Location Section */}
              <div className="leading-snug w-full md:w-80 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-200 p-5 -px-3">
                <h2 className="font-bold text-lg capitalize flex items-center md:text-xl">
                  <AddressIcon className="mr-3 icons-color text-blue-500 h-5 w-5 md:h-7 md:w-7" />
                  Location
                </h2>
                <p className="text-[16px] text-gray-600 md:pt-5 text-center">
                  21A, Phase 2, New Housing Board, <br /> Wahab Nagar,
                  Krishnagiri, <br /> Tamil Nadu 635001
                </p>
              </div>

              {/* Phone Number Section */}
              <div className="leading-snug w-full md:w-80 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-200 p-5 -px-3">
                <h2 className="font-bold flex items-center md:text-xl">
                  <CallIcon className="mr-3 icons-color text-blue-500  h-5 w-5 md:h-7 md:w-7" />
                  Phone Number
                </h2>
                <p className="text-[16px] text-gray-600 md:pt-5 text-center">
                  +91 80153 11592
                </p>
                <p className="text-[16px] text-gray-600 md:pt-2 text-center">
                  +91 90809 02363
                </p>
              </div>

              {/* Email Section */}
              <div className="leading-snug w-full md:w-80 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-200 p-5 -px-3">
                <h2 className="font-bold flex items-center md:text-xl">
                  <EmailIcon className="mr-3 icons-color text-blue-500 h-5 w-5 md:h-7 md:w-7" />
                  Email
                </h2>
                <p className="text-[16px] text-gray-600 md:pt-5 text-center">
                  techbeeshive@gmail.com
                </p>
              </div>
            </div>
          </div>


          </div>
        </div>
      </div>


      <div className="pb-16 bg-gradient-to-br from-blue-50 to-gray-100">
        <h2 className="text-center font-semibold text-4xl p-8">
          Other ways to <span className="text-primary">Reach Us</span>
        </h2>

        <div className="flex flex-wrap justify-center max-md:p-4 max-xl:px-6">
          {" "}
          {/* Centering the iframe */}
          <div className="relative w-full max-w-[1300px]">
            <iframe
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              className="w-full h-96" // This makes the iframe full width
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31158.799177045417!2d78.1810060347656!3d12.526101200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3369a3c3b071%3A0xa286ad83966b805a!2sTechbeeshive%20Technologies!5e0!3m2!1sen!2sin!4v1686810239080!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }} // Optional: remove iframe border
              title="Google Maps"
            />
          </div>
        </div>
      </div>
    </App_layout>
  );
}

export default Contact;
