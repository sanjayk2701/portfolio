"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TailSpin } from "react-loader-spinner";

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(null);


  useEffect(() => {
    // Fetch projects from API
    fetch(process.env.NEXT_PUBLIC_API_URL + "/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "project data");
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));

    const storedScrollPosition = localStorage.getItem("projectsScrollPosition");
    if (storedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(storedScrollPosition, 10));
        localStorage.removeItem("projectsScrollPosition"); 
      }, 100); 
    }
  }, []);

  const handleProjectDetails = (projectid) => {
    setIsLoading(projectid);
    setTimeout(() => {
      localStorage.setItem("projectsScrollPosition", window.scrollY);
      router.push(`pages/projects/projectDetails/${projectid}`);
    }, 2000);
  };

  return (
    <div
      className="projects bg-#d9d9d9 text-titleColor h-full w-full p-12 pb-[6rem]"
      style={{ paddingTop: "0" }}
    >
      <motion.h3
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-5xl font-medium mb-12"
        viewport={{ once: false }}
      >
        MY <span className="font-bold">WORKS</span>
      </motion.h3>

      <div className="flex flex-row justify-evenly flex-wrap">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: false }}
            >
              <div className="w-[20rem] h-[30rem] pt-7 px-5 py-4 flex flex-col gap-2 justify-start rounded-[15px] overflow-hidden shadow-lg border bg-gray-200 bg-opacity-15">
                <div className="flex items-start relative">
                  <img
                    src={project.image || "defaultImage.jpg"}
                    alt={project.title}
                    className="w-full h-[270px] object-cover rounded"
                  />

                  {/* Arrow Button */}
                  <div
                    className="absolute top-[215px] right-3 bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center hover:bg-custom-gradient transition duration-300 cursor-pointer"
                    onClick={() => handleProjectDetails(project._id)}
                  >
                    {isLoading === project._id ? (
                      <TailSpin
                        visible={true}
                        height="30"
                        width="70"
                        color="black"
                        ariaLabel="three-dots-loading"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 transform rotate-[316deg] text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <p
                  className="text-sm font-medium border rounded-full max-w-fit px-3 py-0.5 mt-2"
                  onClick={() => handleProjectDetails(project._id)}
                >
                  Web App
                </p>

                <div className="mt-2">
                  <div className="font-semibold text-md text-titleColor mb-1 truncate">
                    {project.title}
                  </div>
                  <p className="text-sm text-textColor leading-snug line-clamp-3">
                    {project.short_description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p><></></p>
        )}
      </div>
    </div>
  );
}
