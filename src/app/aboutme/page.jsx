'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
// import Photo from "../../app/assets/formal.jpeg"
import Image from "next/image";
import '../styles/aboutme.css'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function aboutPage() {
    const [post, setPost] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // ... fetch and set posts
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post')
            .then((res) => res.json())
            .then((data) => {
                console.log('fetched data', data);
                setPost(data);
            })
            .catch((err) => console.error('Error fetching posts:', err));


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



    const navigateResume = (postid) => {
        localStorage.setItem("projectsScrollPosition", window.scrollY);
        router.push(`/resume/${postid}`);
        // Ensure there's a '/' before postid
    };


    return (
        <div>
            <div className="aboutMe bg-white text-titleColor h-5/6 w-full items-center justify-center">
                {Array.isArray(post) && post.length > 0 ? (
                    post.map((post) => (
                        <div className="flex p-32 px-40 flex flex-row items-center justify-between">

                            <div key={post.id} className=" w-1/2 flex flex-col gap-4" >
                                <motion.h3
                                    initial={{ y: 100, opacity: 0 }} // Slide in from below and fade in
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false }} // Ensure the animation occurs every time it enters the viewport
                                    transition={{
                                        delay: 0.5, // Slight delay for the h3
                                        y: { type: "spring", stiffness: 100, damping: 20 }, // Smooth spring animation
                                        opacity: { duration: 0.8 }, // Faster fade-in
                                        ease: "easeOut", // Smooth easing for the transition
                                        duration: 0.8, // Overall duration


                                    }}
                                    className="text-6xl font-medium"
                                >
                                    ABOUT <span className="font-bold">ME</span>
                                </motion.h3>

                                <motion.p
                                    initial={{ y: 150, opacity: 0 }} // Reduced y offset to prevent overlapping the content below
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false }} // Ensure the animation occurs every time it enters the viewport

                                    transition={{
                                        delay: 1.5, // Delayed after the h3 tag appears
                                        y: { type: "spring", stiffness: 100, damping: 20 }, // Smooth upward movement
                                        opacity: { duration: 0.8 }, // Fade-in effect
                                        ease: "easeOut", // Smooth easing
                                        duration: 0.8, // Animation duration
                                    }}
                                    className="text-lg text-textColor max-w-4xl"
                                >
                                    {post.description}
                                </motion.p>

                                <motion.button

                                    initial={{ y: 50, opacity: 0 }} // Start from slightly below, but not too far
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false }} // Ensure the animation occurs every time it enters the viewport

                                    transition={{
                                        delay: 2, // Button will appear after both h3 and p tag
                                        y: { type: "spring", stiffness: 100, damping: 20 }, // Smooth motion with spring
                                        opacity: { duration: 0.8 }, // Fade-in effect
                                        ease: "easeOut", // Smooth easing
                                        duration: 0.8, // Animation duration
                                    }}
                                    onClick={() => navigateResume(post._id)}
                                    className="bg-primaryColor w-[11rem] text-white py-2 px-4 rounded shadow-md hover:bg-custom-gradient transition"
                                >
                                    {post.button}
                                </motion.button>


                            </div>
                            <div>
                                <motion.div
                                    initial={{ y: 100, scale: 0.9, opacity: 0 }}
                                    viewport={{ once: false }} // Ensure the animation occurs every time it enters the viewport// Start state
                                    whileInView={{ y: 0, scale: 1, opacity: 1 }} // End state
                                    transition={{ duration: 1, ease: "easeOut" }} // Transition properties
                                >

                                    <img
                                        src={post.image ? post.image : "defaultImage.jpg"}
                                        width={500}
                                        height={150}
                                        style={{
                                            borderRadius: "10px",
                                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                        }}
                                    />
                                </motion.div>

                            </div>
                        </div>

                    ))
                ) : (
                    <p>No posts available</p>
                )}


            </div>

        </div>
    )
}


