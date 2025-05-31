"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../styles/aboutme.css";
import { ThreeDots } from "react-loader-spinner";

export default function AboutPage() {
  const [post, setPost] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/post")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching posts:", err));

    const storedScrollPosition = localStorage.getItem("projectsScrollPosition");
    if (storedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(storedScrollPosition, 10));
        localStorage.removeItem("projectsScrollPosition");
      }, 100);
    }
  }, []);

  const navigateResume = () => {
    setIsLoading(true);
    localStorage.setItem("projectsScrollPosition", window.scrollY);

    setTimeout(() => {
      router.push("/pages/resumeDetails");
    }, 2000);
  };

  return (
    <div className="aboutMe bg-white text-titleColor min-h-screen flex flex-col items-center p-12 sm:px-12 md:px-20 ">
      {Array.isArray(post) && post.length > 0 ? (
        post.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl"
          >
            <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-5xl font-medium"
              >
                ABOUT <span className="font-bold">ME</span>
              </motion.h3>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="text-base sm:text-lg text-textColor"
              >
                {post.description}
              </motion.p>
              <motion.button
                style={{ width: "140px", height: "40px" }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                onClick={navigateResume}
                className="bg-primaryColor text-white py-2 px-4 rounded-md shadow-md hover:bg-custom-gradient transition flex justify-center items-center"
              >
                {isLoading ? (
                  <ThreeDots
                    visible={true}
                    height="25"
                    width="40"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                  />
                ) : (
                  "View Resume"
                )}
              </motion.button>
            </div>

            <motion.div
              initial={{ y: 100, scale: 0.9, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image
                src={post.image ? post.image : "defaultImage.jpg"}
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                alt="About me image"
              />
            </motion.div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
