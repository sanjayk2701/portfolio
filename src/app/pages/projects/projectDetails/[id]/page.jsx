"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { set } from "mongoose";

export default function ProjectDetails({ params }) {
  const id = params.id;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    // Fetch project details
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projectDetails/${id}`)
      .then((response) => response.json())
      .then((response) => setProjectDetails(response));
  }, [id]);

  const handleBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.back(); // Navigate back in history
    }, 2000);
  };

  return (
   <div>
  {projectDetails && (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {projectDetails.title}
      </h1>
      <hr className="border-gray-300 my-4" />

      {/* Project Overview */}
      <section className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          PROJECT OVERVIEW
        </h2>
        <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
          <p>{projectDetails.description}</p>
        </div>
      </section>

      {/* Detailed Description */}
      {projectDetails.detailedDescription && (
        <section className="mt-6 sm:mt-8">
          <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700">
            {projectDetails.detailedDescription.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Language Used */}
      {projectDetails.languagesUsed && (
        <section className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            TECH STACK
          </h2>
          <div className="flex flex-wrap mt-3 sm:mt-4">
            {projectDetails.languagesUsed.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 m-1 sm:m-2 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mt-6 sm:mt-8 w-[80px] sm:w-[90px] h-[38px] sm:h-[40px] bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 py-2 px-4 transition flex justify-center items-center"
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
  )}
</div>

  );
}
