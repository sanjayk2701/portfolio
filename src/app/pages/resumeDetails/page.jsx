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
      router.back(); 
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
              <li>Languages : JavaScript, Html, CSS, SCSS, Tailwind Css.</li>
              <li>Frameworks & Libraries : React.Js, Redux, Next.Js, Node.Js, Express.Js.</li>
              <li>Database: MongoDB</li>
              <li>Tools & Platforms: Jest, VS Code, Github, RESTful APIs, Axios, WebSockets, Figma.</li>
              <li>
              Specifications: Web Application Development, Responsive Web Design,API Integration, Wireframing & Prototype Design.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-2 border-[1px]" />

      {/* Professional Experience */}
      <div>
        <h3 className="text-2xl font-bold text-titleColor ">
          PROFESSIONAL EXPERIENCE
        </h3>
        <div className="flex flex-row gap-2 items-start justify-start text-textColor">
         
       
          <div>
            <p className="text-[14px] font-semibold">
              Prodapt | Associate Software Engineer | Aug 2022 - Present
            </p>
            <ul className="list-disc mt-2 ml-2 px-3  space-y-1">
              <li>
               Engineered scalable frontend using React.js and JavaScript enhancing component reusability and maintainability across projects.
              </li>
              <li>
               Integrated REST APIs and WebSockets to enable real-time updates, enhancing user interactivity and reducing data latency by 45%.
              </li>
              <li>
              Boosted UI performance by 30% through implementation of lazy loading, code splitting, and DOM virtualization.
              </li>
              <li>
               Conducted over 50+ code reviews and unit-tested components using Jest, ensuring 80%+ coverage and reducing post-deployment bugs.
              </li>
              <li>Partnered with design and product teams to ship accessible, WCAG-compliant interfaces on time and within scope.</li>
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
            title: "1.Maestro-E (NID & Service Management Application)",
            description: [
              "Built reusable and modular UI components using React.js, JavaScript,  Redux, and SCSS to streamline feature implementation and maintain consistent design patterns.",
              "Implemented dynamic dashboards using Recharts, improving visibility into device statuses by 60%.",
              "Implemented WebSocket-driven updates and lazy loading, reducing page load times by 30%.",
              "Leveraged Redux with middleware to handle asynchronous API flows, ensuring consistency across Activation, Assurance, and Automation modules.",
              "Wrote and maintained unit tests using Jest maintaining over 80% code coverage to uphold code quality and ensure stable component behavior throughout development.",
              "Automated repetitive NID activation flows, cutting manual efforts by 50% and accelerating service provisioning timelines.",
            ],
          },
          {
            title: "AT&T- ENTERPRISE CUSTOMER",
            description: [
              // ... (project descriptions)
              "Engineered a responsive web application using React.js, Javascript, Tailwind CSS,  to automate and simplify API provisioning for enterprise clients.",
              "Implemented end-to-end automation of the API management process, improving data accuracy and eliminating 60% of prior paper-based steps.",
              "Integrated secure and authenticated APIs using Node.js and Express.js, ensuring safe and efficient client-server communication.",
              "Designed a Postman-style API explorer with integrated live testing, customer feedback, and documentation visibility, boosting developer engagement and discoverability.",
              "Collaborated closely with product owners and developers during sprints, ensuring alignment with business requirements and secure API handling.",
              "Conducted test coverage reviews and wrote unit tests using Jest, improving QA efficiency and minimizing post-deployment bugs.",
            ],
          },
          {
            title: "AI COMPANION (chatbot)",
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
        <div className="flex flex-row gap-2 items-start justify-start  text-textColor ">
          {/* <div className="flex flex-col items-center">
            <div className="bg-gray-400 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 w-0.5 h-12"></div>
          </div> */}
          {/* <p className="text-sm pl-1 max-w-32">07/2024</p> */}
          <div className="pl-2">
            <p className="text-base font-medium w-[34rem] ">
              <strong>B.E Computer Science and Engineering</strong> in SRM
              Easwari Engineering College
            </p>
            <ul className="list-disc ml-4 mt-1 space-y-1">
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
