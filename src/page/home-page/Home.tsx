"use client";
import Image from "next/image";
import Capsul from "@/common/capsul/Capsul";
import { easeInOut, motion } from "motion/react";
import ImageHome from "@/common/imageHome/imageHome";
import { FaProjectDiagram, FaUser } from "react-icons/fa";
import Link from "next/link";
import CardLink from "@/common/cardLink/CardLink";
import { GiBrain } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`md:w-2/5 w-full min-h-dvh flex flex-col items-center`}>
        <motion.div
          className="w-full h-28 flex items-center md:pr-0 md:pl-0 pr-5 pl-5 sticky top-0 z-50 bg-white/95"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770963085/20230521_112504_hdqt27.jpg"
              alt="main-photo"
              width={100}
              height={100}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <h1 className="font-semibold md:text-xl">Andrean Gwen</h1>
              <p className="text-xs text-gray-500">Computer Science Student</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`w-full h-fit md:pr-0 md:pl-0 pr-5 pl-5`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <div className={`flex w-full h-fit gap-2 flex-wrap`}>
            <Capsul desc="Junior Frontend Developer" color="bg-[#edf1f0]" />
            <Capsul desc="Junior IOT Developer" color="bg-[#ffe8e8]" />
            <Capsul desc="Exploler" color="bg-[#f7f2e9]" />
            <Capsul desc="Fast Learner" color="bg-[#dceafa]" />
            <Capsul desc="Junior Backend Developer" color="bg-[#e0eee0]" />
            <Capsul desc="Junior UI/UX Designer" color="bg-[#eaf8f4]" />
          </div>

          <div className={`md:pt-10 pt-7 md:text-[17px] text-sm text-black/70`}>
            <p>
              I am a Computer Science student with a strong interest in Web
              Development. I have experience building web applications using
              modern technologies and a basic understanding of IoT development,
              particularly in integrating hardware with microcontroller-based
              systems.
            </p>
            <p className={`pt-4`}>
              I often experiment with APIs and enjoy exploring how different
              services can be integrated to build more powerful and scalable
              applications.
            </p>
          </div>

          <div className={`pt-10 pb-9 border-b-2`}>
            <h1 className={`text-xl font-semibold text-black/80`}>
              Daily Journey.
            </h1>

            <ImageHome />
          </div>

          <div className={`pt-8`}>
            <div className={`flex flex-col text-black/80`}>
              <h2 className={`text-3xl font-bold`}>Implementation.</h2>
              <p className={`text-sm`}>from writing, to achievement.</p>
            </div>

            <div
              className={`pt-6 flex w-full md:justify-between flex-wrap gap-y-3 pb-10 border-b items-center`}
            >
              <CardLink
                icons={<FaUser size={25} color="#415942" />}
                title="About Me, Heyy."
                desc="Let me introduce my self."
                url="/about"
                bgPrimary="bg-[#f7f2e9]"
                bgSecond="bg-[#f1e3c8]"
              />
              <CardLink
                icons={<FaProjectDiagram size={25} color="#f28485" />}
                title="Let's see the Project."
                desc="Let me introduce an interesting project."
                url="/project"
                bgPrimary="bg-[#ffebec]"
                bgSecond="bg-[#ffe7e6]"
              />
              <CardLink
                icons={<GiBrain size={25} color="#415942" />}
                title="My Education."
                desc="Let me show my achievement."
                url="/education"
                bgPrimary="bg-[#dceafa9c]"
                bgSecond="bg-[#ccdeee]"
              />
              <CardLink
                icons={<IoNewspaper size={25} color="#6d9c83" />}
                title="My Resume?"
                desc="Come check my Resume."
                url="/resume"
                bgPrimary="bg-[#eaf8f4]"
                bgSecond="bg-[#d1e3e3]"
              />
            </div>
          </div>

          <div className={`pt-4 pb-4 text-center text-xs text-black/50`}>
            <p>Copyright &copy; Andrean Gwen</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
