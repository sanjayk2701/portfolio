'use client'

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function ProjectDetails({ params }) {
    const id = params.id;
    const router = useRouter();
    const [projectDetails, setProjectDetails] = useState(null);

    useEffect(() => {
        // Fetch project details
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/projectDetails/${id}`)
            .then(response => response.json())
            .then(response => setProjectDetails(response));
    }, [id]);

    const handleBack = () => {
        router.back(); // Navigate back in history
    };

    return (
        <div>
            {projectDetails && (
                <div className='max-w-7xl mx-auto p-8'>
                    {/* Title */}
                    <h1 className='text-4xl font-bold text-gray-900'>
                        {projectDetails.title}
                    </h1>
                    <hr className='border-gray-300 my-4' />

                    {/* Project Overview */}
                    <section className='mt-8'>
                        <h2 className='text-2xl font-semibold text-gray-800'>
                            PROJECT OVERVIEW
                        </h2>
                        <div className='mt-4 space-y-4 text-lg text-gray-700'>
                            <p>{projectDetails.description}</p>
                        </div>
                    </section>

                    {/* Detailed Description */}
                    {projectDetails.detailedDescription && (
                        <section className='mt-8'>
                            <ul className='list-disc list-inside mt-4 space-y-4 text-lg text-gray-700'>
                                {projectDetails.detailedDescription.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Language Used */}
                    {projectDetails.languagesUsed && (
                        <section className='mt-12'>
                            <h2 className='text-2xl font-semibold text-gray-800'>
                                TECH STACK
                            </h2>
                            <div className='flex flex-wrap mt-4'>
                                {projectDetails.languagesUsed.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='bg-gray-100 text-gray-700 m-2 px-4 py-2 rounded-md shadow'
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
                        className='mt-8 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700'
                    >
                        Back
                    </button>
                </div>
            )}
        </div>
    );
}
