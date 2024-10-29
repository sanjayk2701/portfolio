import { motion } from 'framer-motion';
import React from 'react';

const EducationOverview = () => {
    return (
        <div className="Education bg-white text-titleColor h-full w-full p-12 pb-[4rem]">
            <motion.h3
                initial={{ x: -20, opacity: 0 }}  // Start position and scale
                whileInView={{ x: 0, opacity: 1 }} // End position and scale
                transition={{ duration: 2, delay: 0.3 }} // Increased duration
                className="text-6xl font-bold text-titleColor"
                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

            >
                EDUCATION <span className="font-medium">OVERVIEW</span>
            </motion.h3>

            <div className="max-w-[70rem] mx-auto h-full p-8">
                {/* Education Overview Header */}

                {/* Education Details */}
                <div className="mt-8 space-y-8 relative">
                    {/* Vertical line */}
                    <div className="absolute left-[34.2rem] top-0 w-1 h-[86%] bg-gray-300 transform -translate-x-1/2 z-0"></div>

                    {/* Bachelor's Degree */}
                    <div className="grid grid-cols-2 items-start pb-6 ">
                        {/* Heading on left side */}
                        <div className="text-right pr-[1rem]">
                            <motion.h2
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 0.8, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                                className="text-2xl font-semibold text-gray-900">
                                Bachelor of Engineering (B.E)
                            </motion.h2>
                        </div>

                        {/* Circle and content on right side */}
                        <div className="flex items-start space-x-4">
                            {/* Circle */}
                            <div className="w-10 flex-shrink-0 flex justify-center z-10">
                                <div className="w-10 h-10 rounded-full border-[4px] border-primaryColor bg-white"></div>
                            </div>

                            <motion.div
                                initial={{ x: -250, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 1.2, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                            >
                                <p className="text-2xl font-medium text-gray-700">
                                    SRM Easwari Engineering College
                                </p>
                                <p className="text-base text-sm text-gray-600 mb-1">
                                    August 2018 - April 2022
                                </p>
                                <p className="text-2xl font-medium text-gray-700">
                                    Bachelor of Engineering - Computer Science & Engineering
                                </p>
                                <p className="text-base text-sm text-gray-600">
                                    GPA - 8.0
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Higher Secondary Certification */}
                    <div className="grid grid-cols-2 items-start pb-6 ">
                        {/* Heading on left side */}
                        <div className="text-right pr-[1rem]">
                            <motion.h2
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 1.2, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                                className="text-2xl font-semibold text-gray-900">
                                Higher Secondary Certification (HSC)
                            </motion.h2>
                        </div>

                        {/* Circle and content on right side */}
                        <div className="flex items-start space-x-4">
                            {/* Circle */}
                            <div className="w-10 flex-shrink-0 flex justify-center z-10">
                                <div className="w-10 h-10 rounded-full border-[4px] border-primaryColor bg-white"></div>
                            </div>
                            <motion.div
                                initial={{ x: -250, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 1.4, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                            >
                                <p className="text-2xl font-medium text-gray-700">
                                    J.G.H.V Matriculation Higher Secondary School
                                </p>
                                <p className="text-base text-sm text-gray-600 mb-1">
                                    August 2016 - April 2018
                                </p>
                                <p className="text-2xl font-medium text-gray-700">
                                    Biology and Mathematics
                                </p>
                                <p className="text-base text-sm text-gray-600 mb-1">
                                    Percentage - 73%
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Secondary School Certification */}
                    <div className="grid grid-cols-2 items-start">
                        {/* Heading on left side */}
                        <div className="text-right pr-[1rem]">
                            <motion.h2
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 1.4, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                                className="text-2xl font-semibold text-gray-900">
                                Secondary School Certification (SSC)
                            </motion.h2>
                        </div>

                        {/* Circle and content on right side */}
                        <div className="flex items-start space-x-4">
                            {/* Circle */}
                            <div className="w-10 flex-shrink-0 flex justify-center z-10">
                                <div className="w-10 h-10 rounded-full border-[4px] border-primaryColor bg-white"></div>
                            </div>
                            <motion.div
                                initial={{ x: -250, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport

                                transition={{
                                    delay: 1.6, // Increased delay
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 2 }, // Increased duration
                                    ease: "easeIn",
                                }}
                            >
                                <p className="text-2xl font-medium text-gray-700">
                                    J.G.H.V Matriculation Higher Secondary School
                                </p>
                                <p className="text-base text-sm text-gray-600 ">
                                    August 2014 - April 2016
                                </p>
                                <p className="text-base text-sm text-gray-600 mb-1">
                                    Percentage - 84%
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationOverview;
