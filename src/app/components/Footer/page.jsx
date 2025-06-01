import Image from "next/image";
import fbwhite from "../../assets/fbwhite.png";
import instawhite from "../../assets/insta-white.png";
import twitterwhite from "../../assets/twitter-white.png";
import lnwhite from "../../assets/ln-white.png";

export default function Footer() {
  return (
    <div className="bg-titleColor rounded-t-[1rem] text-secondaryTextColor py-12 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">SANJAY K</h2>
          <p className="leading-6 font-semibold max-w-xl">
            I am a Front-End Developer and UX Designer with a focus on crafting
            sleek, responsive web experiences. Let’s collaborate to create
            user-centered, engaging digital experiences.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:flex-none">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sanjaykprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hover:brightness-0 hover:invert"
                width={24}
                height={24}
                src={lnwhite}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/sanjayk2701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hover:brightness-0 hover:invert"
                width={24}
                height={24}
                src={fbwhite}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hover:brightness-0 hover:invert"
                width={24}
                height={24}
                src={instawhite}
                alt="Instagram"
              />
            </a>
            <a
              href="https://twitter.com/your-twitter-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hover:brightness-0 hover:invert"
                width={24}
                height={24}
                src={twitterwhite}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-secondaryTextColor mt-10"></div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm sm:text-md">
        <p>© 2024 Sanjay K. All rights reserved.</p>
      </div>
    </div>
  );
}
