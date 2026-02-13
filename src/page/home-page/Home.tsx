"use client";
import Image from "next/image";
import Capsul from "@/common/capsul/Capsul";
import { easeInOut, motion } from "motion/react";

const HomePage = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`md:w-2/5 w-full min-h-dvh flex flex-col items-center`}>
        <motion.div
          className="w-full h-36 flex items-center md:pr-0 md:pl-0 pr-5 pl-5 sticky top-0 z-50 bg-white/95"
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

          <div className={`pt-10`}>
            <h1 className={`text-xl font-semibold text-black/80`}>
              Capture Moments.
            </h1>

            <div className={`w-full h-fit pt-2 flex gap-2`}>
              <Image
                src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770963085/20230521_112504_hdqt27.jpg"
                alt="main-photo"
                width={400}
                height={400}
                className="md:w-60 md:h-80 w-43.75 h-60 object-cover rounded-xl"
              />
              <div className={`flex flex-wrap gap-2 justify-center`}>
                <Image
                  src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770984589/Screenshot_2026-02-13_at_19.09.42_y6bft6.png"
                  alt="main-photo"
                  width={400}
                  height={400}
                  className="md:w-52.5 md:h-39 w-43.75 h-29 object-cover rounded-xl"
                />
                <Image
                  src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770982606/WhatsApp_Image_2025-12-04_at_16.55.35_vuye6z.jpg"
                  alt="main-photo"
                  width={400}
                  height={400}
                  className="md:w-52.5 md:h-39 w-43.75 h-29 object-cover rounded-xl object-bottom"
                />
                <Image
                  src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983957/Screenshot_2026-02-13_at_18.59.08_jdzhyd.png"
                  alt="main-photo"
                  width={400}
                  height={400}
                  className="md:w-52.5 md:h-39 object-fill rounded-xl hidden md:block"
                />
                <Image
                  src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983323/WhatsApp_Image_2025-12-04_at_08.17.44_oii40n.jpg"
                  alt="main-photo"
                  width={400}
                  height={400}
                  className="md:w-52.5 md:h-39 object-cover rounded-xl hidden md:block"
                />
              </div>
            </div>
            <div className={`flex gap-2 pt-2`}>
              <Image
                src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983957/Screenshot_2026-02-13_at_18.59.08_jdzhyd.png"
                alt="main-photo"
                width={400}
                height={400}
                className="w-43.75 h-29 object-fill rounded-xl md:hidden block"
              />
              <Image
                src="https://res.cloudinary.com/dgnnshujm/image/upload/v1770983323/WhatsApp_Image_2025-12-04_at_08.17.44_oii40n.jpg"
                alt="main-photo"
                width={400}
                height={400}
                className="w-43.75 h-29 object-cover rounded-xl md:hidden block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
