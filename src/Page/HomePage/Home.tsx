"use client";
import ContactIcon from "@/common/contacticon/ContactIcon";
import ContactText from "@/common/contacttext/ContactText";
import Navbar from "@/common/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { easeInOut, motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { delay } from "motion";

const HomePage = () => {
  return (
    <>
      <div
        className={`bg-[#f3f3f3] w-full min-h-dvh flex flex-col items-center overflow-x-hidden`}
      >
        <Navbar />

        <div
          className={`w-full flex-1 flex md:justify-center md:items-center md:min-h-195 min-h-165 px-4`}
        >
          <motion.div
            className={`flex flex-col items-center justify-center gap-4 md:flex-row md:gap-9 w-full max-w-7xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={`https://res.cloudinary.com/dgnnshujm/image/upload/v1770092003/83acb9985f7d3c106777048148026d3d_waifu2x_photo_noise3_scale_pm4e94.png`}
              alt={`main-photo`}
              width={400}
              height={400}
              className="rounded-full w-50 h-50 md:w-100 md:h-100"
            ></Image>

            <div className="w-full h-fit text-center pt-6 md:w-125 md:text-left md:pt-0">
              <div className="w-full px-5 md:px-0">
                <h1 className={`md:text-6xl font-bold md:pb-4 pb-1 text-4xl`}>
                  Andrean Gwen
                </h1>
                <p className={`md:text-xl font-bold pb-3`}>A Bit About Me</p>
                <div className={`md:text-md text-sm text-black/60 min-h-18`}>
                  <Typewriter
                    options={{ delay: 30 }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "I am a Computer Science student with a strong interest in Web Development. "
                        )
                        .pauseFor(800)
                        .typeString(
                          "I have experience building web applications using modern technologies and a "
                        )
                        .pauseFor(800)
                        .typeString(
                          "basic understanding of IoT development, particularly in integrating hardware "
                        )
                        .pauseFor(800)
                        .typeString("with microcontroller-based systems.")
                        .start();
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-2 pt-9 justify-center md:gap-4 md:pt-12 md:justify-start">
                <Link href="/about">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#80d8da] rounded-full flex items-center justify-center font-semibold border border-black hover:bg-black/80 hover:text-white hover:border-white transition-transform hover:scale-105 text-xs md:text-[13px]">
                    About
                  </div>
                </Link>

                <Link href="/education">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-white font-semibold border border-white hover:bg-white hover:text-black hover:border-black transition-transform hover:scale-105 text-xs md:text-[13px]">
                    Education
                  </div>
                </Link>

                <Link href="/project">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#80d8da] rounded-full flex items-center justify-center font-semibold border border-black hover:bg-black/80 hover:text-white hover:border-white transition-transform hover:scale-105 text-xs md:text-[13px]">
                    Project
                  </div>
                </Link>

                <Link href="/resume">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-white font-semibold border border-white hover:bg-white hover:text-black hover:border-black transition-transform hover:scale-105 text-xs md:text-[13px]">
                    Resume
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="w-full flex flex-col justify-center mt-auto px-4 md:px-6 lg:px-8"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <h2 className="text-center font-semibold text-normal mb-4 md:hidden">
            Contact Me
          </h2>

          <div className="border-t-2 pt-2 pb-2">
            <div className="grid grid-cols-3 gap-4 md:hidden">
              <ContactIcon
                href="mailto:andreansatriya22@gmail.com"
                icon={<SiGmail size={22} />}
                label="Email"
              />
              <ContactIcon
                href="https://github.com/AndreanGwen"
                icon={<SiGithub size={22} />}
                label="Github"
              />
              <ContactIcon
                href="https://www.instagram.com/andreangwen/"
                icon={<SiInstagram size={22} />}
                label="Instagram"
              />
            </div>

            <div className="hidden md:flex flex-wrap items-center justify-between gap-4 md:gap-6 lg:gap-8 w-full  mx-auto min-h-24 py-4 pt-2">
              <ContactText
                title="Email"
                text="andreansatriya22@gmail.com"
                value="mailto:andreansatriya22@gmail.com"
                link
              />
              <ContactText
                title="Github"
                text="https://github.com/AndreanGwen"
                value="https://github.com/AndreanGwen"
                link
              />
              <ContactText
                title="Instagram"
                text="https://www.instagram.com/andreangwen/"
                value="https://www.instagram.com/andreangwen/"
                link
              />{" "}
              <div className="text-center text-xs text-black/50 mt-6">
                © 2025 By Andrean Gwen
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
