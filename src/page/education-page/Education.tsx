import Navbar from "@/common/navbar/Navbar";

const Education = () => {
  return (
    <div className={`w-full`}>
      <Navbar></Navbar>
      <div className={`flex flex-col items-center pt-10 pb-16 md:pb-0`}>
        <span className={`text-3xl font-bold md:pb-8`}>My Education</span>

        <div
          className={`h-40 w-[288px] border-2 rounded-md border-blue-950 border-b-8`}
        ></div>
      </div>
    </div>
  );
};

export default Education;
