"use client";
import ContactIcon from "@/app/Common/ContactIcon/contactIcon";
import ContactText from "@/app/Common/ContactText/contactText";
import Navbar from "@/app/Common/Navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      <div
        className={`bg-[#f3f3f3] w-full min-h-dvh flex flex-col items-center`}
      >
        <Navbar />

        <div
          className={`w-full flex md:justify-center md:items-center md:h-195 h-165`}
        >
          <div
            className={`flex flex-col items-center justify-center gap-4 md:flex-row md:gap-9`}
          >
            <Image
              src={`https://res.cloudinary.com/dgnnshujm/image/upload/v1768321572/Hermione_qt4m3l.jpg`}
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
                <p className={`md:text-md text-sm text-black/60`}>
                  I am a Computer Science student with a strong interest in Web
                  Development. I have experience building web applications using
                  modern technologies and a basic understanding of IoT
                  development, particularly in integrating hardware with
                  microcontroller-based systems.
                </p>
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
          </div>
        </div>

        <div className="w-[95%] flex flex-col justify-center">
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

            <div className="hidden md:flex items-center justify-between w-[95%] h-24 pt-2">
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
