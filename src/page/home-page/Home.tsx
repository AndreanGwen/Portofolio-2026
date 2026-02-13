"use client";
import Image from "next/image";
import Capsul from "@/common/capsul/Capsul";

const HomePage = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`md:w-2/5 w-full min-h-dvh flex flex-col items-center`}>
        <div className="w-full h-36 flex items-center md:pr-0 md:pl-0 pr-5 pl-5">
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
        </div>

        <div className={`w-full h-fit md:pr-0 md:pl-0 pr-5 pl-5`}>
          <div className={`flex w-full h-fit gap-2 flex-wrap`}>
            <Capsul desc="Junior Frontend Developer" color="bg-[#edf1f0]" />
            <Capsul desc="Junior IOT Developer" color="bg-[#ffe8e8]" />
            <Capsul desc="Exploler" color="bg-[#f7f2e9]" />
            <Capsul desc="Fast Learner" color="bg-[#dceafa]" />
            <Capsul desc="Junior Backend Developer" color="bg-[#e0eee0]" />
            <Capsul desc="Junior UI/UX Designer" color="bg-[#eaf8f4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
