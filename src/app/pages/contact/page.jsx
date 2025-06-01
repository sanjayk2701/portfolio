"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import location from "../../assets/location.png";
import email from "../../assets/email.png";
import call from "../../assets/call.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setInputs((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation before setting loader
  if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
    setMessage("All fields are required.");
    setIsSuccess(false);
    setTimeout(() => setMessage(""), 3000); // Auto-clear message
    return;
  }

  setIsLoading(true); // Start loader after validation

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setMessage(data.message || "Message sent successfully.");
    setIsSuccess(true);
    setInputs({}); // Clear inputs
  } catch (error) {
    setMessage("Failed to send message. Please try again.");
    setIsSuccess(false);
  } finally {
    setIsLoading(false); // Stop loader in all outcomes
    setTimeout(() => setMessage(""), 3000);
  }
};


  return (
<div className="h-full bg-white text-titleColor w-full px-4 sm:px-8 lg:px-12 pb-16">
      <motion.h3
        initial={{ x: -20, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }} 
        viewport={{ once: false }} 
        className="text-5xl font-bold text-titleColor"
      >
        CONTACT <span className="font-medium">ME</span>
      </motion.h3>
      <div className="flex justify-center items-center p-[2rem] ">
    <div className="flex flex-col lg:flex-row w-full max-w-[90rem] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side */}
      <div className="flex flex-col gap-12 bg-primaryColor text-white w-full lg:max-w-xl px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-32">
            <motion.div
              initial={{ x: -20, scale: 0.8, opacity: 0 }} 
              whileInView={{ x: 0, scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              viewport={{ once: false }} 
              className="flex flex-row items-center gap-2"
            >
          <Image src={location} alt="location" width={28} height={28} />
              <div>
                <h2 className="text-xl font-bold text-secondaryTextColor">
                  Address
                </h2>
                <p>
                  No: 11/6, 29th street, Ashok Nagar, Chennai-83, Tamil Nadu,
                  India
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, scale: 0.8, opacity: 0 }} 
              whileInView={{ x: 0, scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }} 
              viewport={{ once: false }} 
              className="flex flex-row items-center gap-2"
            >
              <Image src={email} width={28} height={28}  />
              <div>
                <h2 className="text-xl font-bold text-secondaryTextColor">
                  Email
                </h2>
                <p>sanjaykalidass27@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, scale: 0.8, opacity: 0 }} 
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }} 
              viewport={{ once: false }} 
              className="flex flex-row items-center gap-2"
            >
              <Image src={call} width={28} height={28}  />
              <div>
                <h2 className="text-xl font-bold text-secondaryTextColor">
                  Call
                </h2>
                <p>91+ 7708660262</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-20 bg-#F8F8F8 flex-1 p-6 sm:p-10 lg:p-12 relative">
{/* <div className="flex flex-col gap-10 bg-[#F8F8F8] flex-1 p-6 sm:p-10 lg:p-12 relative w-full"> */}

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <input
    type="text"
    placeholder="Your Name"
    id="name"
    name="name"
    value={inputs.name ?? ""}
    onChange={handleInput}
    className="flex-1 border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black w-full"
  />
  <input
    type="email"
    placeholder="Your Email"
    id="email"
    name="email"
    value={inputs.email ?? ""}
    onChange={handleInput}
    className="flex-1 border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black w-full"
  />
</div>


            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={inputs.subject ?? ""}
              onChange={handleInput}
              className="border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black"
            />

            <textarea
              placeholder="Write your message"
              id="message"
              name="message"
              value={inputs.message ?? ""}
              onChange={handleInput}
              className="border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black h-32"
            />

            <button
              onClick={handleSubmit}
              className="bg-primaryColor w-36 mt-[-3rem] text-white text-md py-2 px-4 rounded-md shadow-md hover:bg-custom-gradient transition flex justify-center items-center"
            >
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="20"
                  width="30"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                "Send Message"
              )}
            </button>

            <div
              className={`absolute bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center transition-opacity duration-300 ${
                message ? "opacity-100" : "opacity-0"
              } ${
                isSuccess
                  ? "bg-green-100 border-green-400 text-green-700"
                  : "bg-red-100 border-red-400 text-red-700"
              }`}
              role="alert"
            >
              <FontAwesomeIcon
                icon={isSuccess ? faCheckCircle : faExclamationCircle}
                className="w-6 h-6 mr-2"
              />
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
