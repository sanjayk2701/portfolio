'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Projects() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from API
        fetch(process.env.NEXT_PUBLIC_API_URL + '/projects')
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'project data');
                setProjects(data);
            })
            .catch((err) => console.error('Error fetching projects:', err));

        // Restore scroll position after a short delay
        const storedScrollPosition = localStorage.getItem("projectsScrollPosition");
        if (storedScrollPosition) {
            // Use a timeout to ensure the scroll position is restored after render
            setTimeout(() => {
                window.scrollTo(0, parseInt(storedScrollPosition, 10));
                localStorage.removeItem("projectsScrollPosition"); // Clear after using
            }, 100); // Adjust this value if needed
        }
    }, []);

    const handleProjectDetails = (projectid) => {
        // Store current scroll position before navigating
        localStorage.setItem("projectsScrollPosition", window.scrollY);
        router.push(`pages/projects/projectDetails/${projectid}`);
    };

    return (
        <div className="projects bg-#d9d9d9 text-titleColor h-full w-full p-12 pb-[6rem]" style={{paddingTop:"0"}}>
            <motion.h3
                initial={{ x: -20, opacity: 0 }}  
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }} 
                className="text-6xl font-medium mb-12"
                viewport={{ once:false }} 
            >
                MY <span className="font-bold">WORKS</span>
            </motion.h3>

            <div className="flex flex-row justify-around flex-wrap">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, scale: 0.8, opacity: 0 }}  
                            whileInView={{ x: 0, scale: 1, opacity: 1 }} 
                            transition={{ duration: 1, delay: index * 0.3 }} 
                            viewport={{ once:false }} 
                        >
                            <div className="w-[27rem] h-[45rem] px-5 flex flex-col gap-3 justify-center rounded overflow-hidden shadow-lg border rounded-[15px] bg-gray-200 bg-opacity-15">
                                <div className="flex items-end pt-5 mb-3">
                                    <img
                                        src={project.image ? project.image : "defaultImage.jpg"}
                                        alt={project.title}
                                        className="w-[375px]"
                                    />
                                    <div
                                        style={{ marginLeft: "-24%" }}
                                        className="bg-gray-300 rounded-full w-25 h-25 flex items-center justify-center hover:bg-custom-gradient transition duration-300"
                                        onClick={() => handleProjectDetails(project._id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-20 h-20 transform rotate-[316deg] p-4 transition-colors duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-colors duration-300 h"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold shadow-sm border rounded-full max-w-fit px-4 py-1">Web App</p>
                                </div>

                                <div className="py-4">
                                    <div className="font-bold text-xl mb-2 text-titleColor">{project.title}</div>
                                    <p className="text-gray-700 text-base text-textColor w-[22rem] leading-5">
                                        {project.short_description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p>No projects found</p>
                )}
            </div>
        </div>
    );
}
