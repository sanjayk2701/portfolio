'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import location from "../assets/location.png";
import email from "../assets/email.png";
import call from "../assets/call.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const ContactForm = () => {
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null); // To differentiate between success and error messages

    const handleInput = (e) => {
        setInputs((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
            setMessage("All fields are required.");
            setIsSuccess(false); // Error state
            setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
            return;
        }

        fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
            method: "POST",
            body: JSON.stringify(inputs),
        })
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message);
                setIsSuccess(true); // Success state
                setInputs({}); // Clear form fields
                setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
            })
            .catch(() => {
                setMessage("Failed to send message. Please try again.");
                setIsSuccess(false); // Error state
                setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
            });
    };

    return (
        <div className="h-ful bg-white text-titleColor h-full w-full p-12 pb-[4rem]">
            <motion.h3
                initial={{ x: -20, opacity: 0 }}  // Start position and scale
                whileInView={{ x: 0, opacity: 1 }} // End position and scale
                transition={{ duration: 1, delay: 0.3 }} // Increased duration
                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport




                className="text-6xl font-bold text-titleColor">
                CONTACT <span className="font-medium">ME</span>
            </motion.h3>
            <div className="flex justify-center items-center p-[4rem]">
                <div className="flex w-full h-[40rem] bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Left Side */}
                    <div className="flex flex-col w-full max-w-2xl gap-12 bg-primaryColor text-white px-20 py-32">
                        <motion.div
                            initial={{ x: -20, scale: 0.8, opacity: 0 }}  // Start position and scale
                            whileInView={{ x: 0, scale: 1, opacity: 1 }} // End position and scale
                            transition={{ duration: 0.5, delay: 0.5 }} // Transition effects
                            viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport


                            className="flex flex-row items-center gap-2">
                            <Image src={location} style={{ width: "2rem" }} />
                            <div>
                                <h2 className="text-xl font-bold text-secondaryTextColor">Address</h2>
                                <p>No: 11/6, 29th street, Ashok Nagar, Chennai-83, Tamil Nadu, India</p>
                            </div>
                        </motion.div>
                        <motion.div

                            initial={{ x: -20, scale: 0.8, opacity: 0 }}  // Start position and scale
                            whileInView={{ x: 0, scale: 1, opacity: 1 }} // End position and scale
                            transition={{ duration: 0.5, delay: 0.8 }} // Transition effects
                            viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport




                            className="flex flex-row items-center gap-2">
                            <Image src={email} style={{ width: "2rem" }} />
                            <div>
                                <h2 className="text-xl font-bold text-secondaryTextColor">Email</h2>
                                <p>sanjaykalidass27@gmail.com</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, scale: 0.8, opacity: 0 }}  // Start position and scale
                            whileInView={{ x: 0, scale: 1, opacity: 1 }} // End position and scale
                            transition={{ duration: 0.5, delay: 1 }} // Transition effects
                            viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport



                            className="flex flex-row items-center gap-2">
                            <Image src={call} style={{ width: "2rem" }} />
                            <div>
                                <h2 className="text-xl font-bold text-secondaryTextColor">Call</h2>
                                <p>91+ 7708660262</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-20 bg-#F8F8F8 flex-1 p-12">
                        <div className="flex justify-between pt-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="name"
                                name="name"
                                value={inputs.name ?? ""}
                                onChange={handleInput}
                                className="flex-1 border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                id="email"
                                name="email"
                                value={inputs.email ?? ""}
                                onChange={handleInput}
                                className="flex-1 border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-black ml-4"
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

                        <button onClick={handleSubmit} className="bg-orange-600 w-36 mt-[-3rem] text-white py-2 px-4 rounded shadow-md hover:bg-orange-700 transition">
                            Send Message
                        </button>

                        <div    
                            className={`fixed bottom-32 right-32 px-4 py-3 rounded-lg shadow-lg flex items-center transition-opacity duration-300 ${message ? "opacity-100" : "opacity-0"
                                } ${isSuccess ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-400 text-red-700"}`}
                            role="alert"
                        >
                            <FontAwesomeIcon icon={isSuccess ? faCheckCircle : faExclamationCircle} className="w-6 h-6 mr-2" />
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
