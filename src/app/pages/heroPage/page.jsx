'use client'
import Navbar from "../../components/Navbar/page";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twit.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import Image from "next/image";
import bgimage from "../../assets/bgimage.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


export default function heroPage() {
    return (
        <div>
            <div
                className="heroPage relative h-screen w-full flex flex-col justify-between bg-cover bg-center"
                style={{ backgroundImage: `url(${bgimage.src})` }}
            >
                <Navbar />
                <div className="flex flex-col items-center mb-44  text-secondaryTextColor font-normal">
                    <motion.p
                        className="text-[2.5rem] font-medium">Hello,</motion.p>
                    <motion.h2
                        className="text-[6.25rem] font-medium drop-shadow-md shadow-sm leading-[8rem] ">SANJAY K</motion.h2>
                    <div className="flex items-center justify-center space-x-2 mb-5 ml-[18rem]">
                        <p className="text-5xl text-secondaryTextColor font-medium">An interactive</p>
                        <div className="text-5xl font-medium  text-titleColor inline-block mt-1" style={{ width: '38rem' }}>
                            <TypeAnimation
                                sequence={[
                                    'Front-End Developer',
                                    1000,
                                    'UX Designer',
                                    1000

                                ]}
                                wrapper="span"
                                speed={20}
                                style={{ display: 'inline-block' }}
                                repeat={null}
                            />

                        </div>
                    </div>

                    <p className="text-xl text-secondaryTextColor text-center max-w-[60rem]">
                        "I am a <strong>Front-End Developer</strong> and <strong>UX Designer</strong> focused on building sleek,
                        <strong>responsive web experiences</strong>. Let's work together to create engaging, user-centered digital experiences."
                    </p>
                </div>
                <div className="socialLinks pb-3 flex mb-5 flex-row gap-12 items-center justify-center">
                    <a href="https://www.linkedin.com/in/sanjaykprofile" target="_blank" rel="noopener noreferrer">
                        <Image className="icon hover:filter hover:brightness-0 hover:invert" width={35} src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/sanjayk2701" target="_blank" rel="noopener noreferrer">
                        <Image className="icon hover:filter hover:brightness-0 hover:invert" width={35} src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                        <Image className="icon hover:filter hover:brightness-0 hover:invert" width={35} src={insta} alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                        <Image className="icon hover:filter hover:brightness-0 hover:invert" width={35} src={twitter} alt="Twitter" />
                    </a>
                </div>


            </div>
        </div>
    );
}
