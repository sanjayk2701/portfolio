"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

const resumeDetails = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleBack = (event) => {
    setIsLoading(true);

    setTimeout(() => {
      event.preventDefault();
      router.back(); // Use the built-in router back method to go bac
    }, 2000);
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
        <div className="flex flex-row space-x-8 text-textColor pl-2">
          <div>
            <ul className="list-disc list-inside text-base space-y-0">
              <li>Languages: JavaScript, HTML, CSS, Tailwind CSS</li>
              <li>Frameworks: React, NextJs, ExpressJs</li>
              <li>Database: MongoDB</li>
              <li>Tools & Platforms: Git, RESTful APIs, Axios, WebSocket</li>
              <li>
                Additional Skills: Responsive Web Design, Wireframing &
                Prototype Design
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-2 border-[1px]" />

      {/* Professional Experience */}
      <div>
        <h3 className="text-2xl font-bold text-titleColor pb-2">
          PROFESSIONAL EXPERIENCE
        </h3>
        <div className="flex flex-row gap-2 items-start justify-start text-textColor">
          <div className="flex flex-col items-center">
            <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 w-0.5 h-64"></div>
          </div>
          <p className="text-sm pl-2 max-w-32">
            08/2022 - Current | Prodapt | Chennai, India
          </p>
          <div>
            <p className="text-base font-semibold">
              Associate Software Engineer
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Unified React apps for performance and browser compatibility
                using HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS.
              </li>
              <li>
                Enhanced website speed and scalability by following UI/UX best
                practices.
              </li>
              <li>
                Implemented chatbots with WebSocket integration for real-time
                communication and automated data processing.
              </li>
              <li>
                Constructed React apps with Redux and RESTful APIs; accelerated
                performance with code splitting and lazy loading.
              </li>
              <li>Administered source control using GitHub and Postman.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-2 border-[1px]" />

      {/* Projects */}
      <div>
        <h3 className="text-2xl font-bold text-titleColor ">PROJECTS</h3>
        {[
          {
            title: "1. OORT (Optius Order Removal Tool):",
            description: [
              "React.js Development: Developed a frontend for the Optius Order Removal Tool (OORT) using React.js, optimizing order disconnection and cancellation workflows. This enhancement achieved a 35% reduction in operational time for Lumen technicians, demonstrating significant improvements in process efficiency.",
              "UI/UX Design: Crafted a user-centric, adaptive interface with responsive design, ensuring accessibility across devices and improving the user experience by 25%. This design approach also increased mobile and cross-platform usability.",
              "Automated Workflow: Implemented an automated order management system, minimizing manual paperwork by 70% and significantly enhancing administrative efficiency.",
              "Data Handling & API Integration: Managed up to 1,000 orders through manual input and Excel uploads, ensuring flexibility and accuracy in order processing. Integrated RESTful APIs to improve data transfer efficiency and accuracy during order management.",
              "Batch Processing : Orchestrated batch processing of orders, maximizing throughput and reducing processing time by organizing orders in groups of four, leading to optimized resource utilization.",
              "System Revamp & Customer Satisfaction : Overhauled the entire order management system, leading to a 20% increase in customer satisfaction through more efficient workflows and enhanced user interactions.",
              "Performance Improvement: Shortened order inquiry resolution time by 15%, accelerating the overall response time and improving operational efficiency.",
            ],
          },
          {
            title: "2. AT&T- ENTERPRISE CUSTOMER :",
            description: [
              // ... (project descriptions)
              "React.js Development:  Developed frontend for AT&T Enterprise customer web application using React.js and Tailwind CSS to streamline access to network APIs for enterprise users. The application simplified API provisioning after document verification, ensuring compliance with AT&T’s terms and conditions and improving operational workflows.",
              "API Integration & Management: Enabled users to seamlessly test APIs, submit issue queries, and provide reviews through a unified interface, reducing the complexity of API management and enhancing overall system efficiency.",
              "UI/UX Design: Created a user-centric and responsive interface that ensured optimal usability across devices. The intuitive design improved user interaction and experience, delivering a consistent and high-quality interface for enterprise-level customers.",
              "Automated Workflow Optimization: Automated the API management process, significantly reducing paperwork and manual tasks while improving data handling and processing capabilities. This approach enhanced operational efficiency and streamlined complex processes for users",
              "Improved User Experience & Compliance: Delivered a robust solution that simplified API management, improving operational efficiency and user satisfaction, while ensuring compliance with AT&T's policies and procedures.",
            ],
          },
          {
            title: "3. AI COMPANION (chatbot)",
            description: [
              // ... (project descriptions)
              "React.js Development: Led the design and development of an AI companion chatbot utilizing React.js for the frontend, with WebSocket API integration to automate key processes across the project lifecycle. This initiative streamlined user interactions from Business Requirements Document (BRD) creation to architecture design, development, testing, and deployment.",
              "Real-Time API Integration: Enhanced real-time communication through WebSocket API integration, facilitating instant, two-way interactions for the AI chatbot. This innovation significantly improved system performance and operational efficiency.",
              "User-Centric Interface Design: Developed a user-friendly interface to enhance user engagement and satisfaction. The intuitive design streamlined communication, allowing for rapid data exchange and improving response accuracy and speed.",
              "Optimized Response Management:  Utilized the WebSocket API to enable real-time interactions, effectively reducing response latency and enhancing user experience. This approach simplified complex user interactions and optimized resource utilization for superior performance.",
              "Advanced Natural Language Processing: Integrated advanced natural language processing (NLP) capabilities, allowing the chatbot to comprehend and respond to user queries more effectively. This enhancement improved the chatbot's ability to manage complex inquiries and deliver accurate, context-aware responses, further enriching user interaction.",
            ],
          },
        ].map((project, index) => (
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
        <div className="flex flex-row gap-2 items-start justify-start pt-3 text-textColor ">
          <div className="flex flex-col items-center">
            <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 w-0.5 h-12"></div>
          </div>
          <p className="text-sm pl-2 max-w-32">07/2024</p>
          <div className="pl-8">
            <p className="text-base font-medium w-[34rem] ">
              <strong>B.E Computer Science and Engineering</strong> in SRM
              Easwari Engineering College
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Duration 2018-2022</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-20">
        <button
          style={{ width: "90px", height: "40px" }}
          onClick={handleBack}
          className=" bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800  py-2 px-4 transition flex justify-center items-center"
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
            "Back"
          )}
        </button>
      </div>
    </div>
  );
};

export default resumeDetails;
