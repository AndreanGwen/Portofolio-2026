import Navbar from "@/common/navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar></Navbar>

      <div className={`flex flex-col items-center pt-10 pb-16 md:pb-0 `}>
        <div className={`text-3xl font-bold md:pb-8 flex flex-col gap-1`}>
          <h1>It's More About Me!</h1>
          <div className={`w-56 border-t-2 border-black/30`}></div>
        </div>
      </div>
    </>
  );
}
