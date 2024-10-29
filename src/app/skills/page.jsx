'use client'

import { useState } from "react";
import "../styles/skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.png";
import expressjs from "../assets/expressjs.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
    const [animate, setAnimate] = useState(false);

    const handleMouseEnter = () => {
        setAnimate(true);
    };

    return (
        <div>
            <div
                className="skills bg-white text-textColor h-full w-full p-12"
                onMouseEnter={handleMouseEnter}
            >
                <motion.h3
                     initial={{ x: -20, opacity: 0 }}  // Start position and scale
                     viewport={{ once:false }} // Ensure the animation occurs every time it enters the viewport
                     whileInView={{ x: 0, opacity: 1 }} // End position and scale
                     transition={{ duration: 1, delay: 0.5 }} // Tran
                    className="text-6xl font-medium text-titleColor"

                >
                    TECHNICAL <span className="font-bold">SKILLS</span>
                </motion.h3>
                <div className="skills_section">
                    <div className="skills_main">
                        {[
                            { name: "Html", percentage: 90, image: html },
                            { name: "Css", percentage: 80, image: css },
                            { name: "TailwindCss", percentage: 70, image: tailwind },
                            { name: "JavaScript", percentage: 60, image: js },
                            { name: "Figma", percentage: 80, image: figma },
                            { name: "React js", percentage: 80, image: react },
                            { name: "Redux", percentage: 70, image: redux },
                            { name: "Next Js", percentage: 70, image: nextjs },
                            { name: "MongoDB", percentage: 70, image: mongo },
                            { name: "Node Js", percentage: 50, image: node },
                            { name: "Express Js", percentage: 50, image: expressjs }
                        ].map((skill, index) => (
                            <div className="skill_bar" key={index}>
                                <div className="icon_row">
                                    <Image width={45} src={skill.image} alt={`${skill.name} icon`} />
                                </div>
                                <div className="content_row">
                                    <div className="info">
                                        <h3>{skill.name}</h3>
                                        <p>{skill.percentage}%</p>
                                    </div>
                                    <div className="bar">
                                        <span className={animate ? skill.name.toLowerCase().replace(" ", "") : ""}></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
