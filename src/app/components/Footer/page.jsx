
import Image from "next/image";
import fbwhite from "../../assets/fbwhite.png"
import instawhite from "../../assets/insta-white.png"
import twitterwhite from "../../assets/twitter-white.png"
import lnwhite from "../../assets/ln-white.png"



export default function Footer() {
  return (
    <div className="bg-titleColor rounded-t-[1rem] h-[20rem] text-secondaryTextColor py-16 px-4 md:px-20 ">
      <div className="container mx-auto flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4">SANJAY K</h2>
          <p className="max-w-2xl  leading-6 font-semibold">
            I am a Front-End Developer and UX Designer with a focus on crafting
            sleek, responsive web experiences. Let’s collaborate to create
            user-centered, engaging digital experiences.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <div className="flex space-x-4">
            <Image src={instawhite}></Image>
          
            <Image src={fbwhite}></Image>

            <Image src={twitterwhite}></Image>
            <Image src={lnwhite}></Image>
    

          </div>
        </div>
      </div>
      <div className="border-t border-secondaryTextColor mt-10"></div>
      <div className="text-center mt-4 text-md">
        <p>copyrights@2024</p>
      </div>
    </div>
  );
}
