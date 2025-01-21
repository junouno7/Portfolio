

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full pb-8 mb-[100px] md:mb-28 md:pt-8" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Wanna ask me a <span className="text-purple">question?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out and we can chat about anything!
        </p>
        <a href="mailto:juneaukim7@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<IoMailOpenOutline/>}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center md:mt-52">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Juneau Kim
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-8 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;