'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const Resume = () => {
    const router = useRouter();

    const [resumeData, setResumeData] = useState([]);

    useEffect(() => {
        // Fetch resume data
        fetch(process.env.NEXT_PUBLIC_API_URL + '/resume')
            .then((res) => res.json())
            .then((data) => {
                console.log('fetched data', data);
                setResumeData(data);
            })
            .catch((err) => console.error('Error fetching posts:', err));
    
     
       
    }, []);
    

    const handleBack = (event) => {
        event.preventDefault();
        router.back(); // Use the built-in router back method to go back
    };

    return (
        <div className="max-w-3xl mx-auto p-8 space-y-8 bg-white border border-gray-300 text-textColor">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-5xl text-titleColor font-bold">SANJAY K</h1>
                <h2 className="text-base mt-2">
                    Associate Software Engineer | Front-End Development
                </h2>
                <p className="text-base">
                    sanjaykalidass27@gmail.com | 7708660262 | Chennai, India 600083
                </p>
            </div>
            <hr className="border-gray-300 my-2 border-[1px]" />

            {/* Skills Section */}
            <div>
                <h3 className="text-2xl font-bold text-titleColor pb-2">SKILLS</h3>
                <div className='flex flex-row space-x-8 text-textColor pl-2'>
                    <div>
                        <ul className="list-disc list-inside text-base space-y-0">
                            <li>Languages: JavaScript, HTML, CSS, Tailwind CSS</li>
                            <li>Frameworks: React, NextJs, ExpressJs</li>
                            <li>Database: MongoDB</li>
                            <li>Tools & Platforms: Git, RESTful APIs, Axios, WebSocket</li>
                            <li>Additional Skills: Responsive Web Design, Wireframing & Prototype Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 my-2 border-[1px]" />

            {/* Professional Experience */}
            <div>
                <h3 className="text-2xl font-bold text-titleColor pb-2">PROFESSIONAL EXPERIENCE</h3>
                <div className='flex flex-row gap-2 items-start justify-start text-textColor'>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
                        <div className="bg-gray-300 w-0.5 h-64"></div>
                    </div>
                    <p className="text-sm pl-2 max-w-32">08/2022 - Current | Prodapt | Chennai, India</p>
                    <div>
                        <p className="text-base font-semibold">Associate Software Engineer</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Unified React apps for performance and browser compatibility using HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS.</li>
                            <li>Enhanced website speed and scalability by following UI/UX best practices.</li>
                            <li>Implemented chatbots with WebSocket integration for real-time communication and automated data processing.</li>
                            <li>Constructed React apps with Redux and RESTful APIs; accelerated performance with code splitting and lazy loading.</li>
                            <li>Administered source control using GitHub and Postman.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 my-2 border-[1px]" />

            {/* Projects */}
            <div>
                <h3 className="text-2xl font-bold text-titleColor ">PROJECTS</h3>
                {[{
                    title: "1. OORT (Optius Order Removal Tool):",
                    description: [
                        "React.js Development: Developed a frontend for the Optius Order Removal Tool (OORT) using React.js, optimizing order disconnection and cancellation workflows. This enhancement achieved a 35% reduction in operational time for Lumen technicians, demonstrating significant improvements in process efficiency.",
                        // ... (other project descriptions)
                    ]
                }, {
                    title: "2. AT&T- ENTERPRISE CUSTOMER :",
                    description: [
                        // ... (project descriptions)
                    ]
                }, {
                    title: "3. AI COMPANION (chatbot)",
                    description: [
                        // ... (project descriptions)
                    ]
                }].map((project, index) => (
                    <div key={index} className="my-2 text-textColor">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            {project.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr className="border-gray-300 my-2 border-[1px]" />

            {/* Education */}
            <div>
                <h3 className="text-2xl font-bold text-titleColor pb-2">EDUCATION</h3>
                <div className='flex flex-row gap-2 items-start justify-start pt-3 text-textColor '>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
                        <div className="bg-gray-300 w-0.5 h-12"></div>
                    </div>
                    <p className="text-sm pl-2 max-w-32">07/2024</p>
                    <div className='pl-8'>
                        <p className="text-base font-medium w-[34rem] "><strong>B.E Computer Science and Engineering</strong> in SRM Easwari Engineering College</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Duration 2018-2022</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className='mt-20'>
                {/* <button onClick={(e) => { e.preventDefault(); handleBack(); }} className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800">
                    Back    
                </button> */}
                <button onClick={handleBack} className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800">
                    Back
                </button>
            </div>
        </div>
    );
};

export default Resume;
