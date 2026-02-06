"use client";
import Navbar from "@/common/navbar/Navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_PROJECT_LIST!;
        const res = await axios.get(`${url}/project-list`);
        setProjects(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(projects);

  return (
    <>
      <Navbar></Navbar>
      <div className={`flex flex-col items-center pt-10`}>
        <div className={`text-3xl font-bold`}>It's My Projects</div>
        <div className={`flex pt-5 gap-9 text-black/50 font-semibold`}>
          <span className={`hover:text-black cursor-pointer`}>
            All ({projects.length})
          </span>
          <span className={`hover:text-black cursor-pointer`}>Website</span>
          <span className={`hover:text-black cursor-pointer`}>IOT</span>
        </div>

        <div
          className={`w-full h-fit pr-24 pl-24 pt-7 flex flex-wrap justify-between`}
        >
          {projects.length != 0 ? (
            projects.map((items: any, index: any) => (
              <div
                key={index}
                className="group w-96 h-44 border-2 border-b-8 border-blue-950 rounded-xl relative overflow-hidden"
              >
                <Image
                  alt="img-project"
                  src={items?.projectImage}
                  fill
                  className="object-cover"
                />

                <Link
                  href={items?.projectLink}
                  className="absolute right-1 top-1 hidden w-9 h-9 bg-[#80d8da] rounded-full group-hover:flex justify-center items-center border-2 border-blue-950"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} />
                </Link>

                <div
                  className="
                absolute bottom-0 left-0 w-full
                bg-[#80d8da]
                z-10
                flex flex-col
                px-3
                border-t-2 border-blue-950
                transition-all duration-300
                h-10 pt-1.5
                group-hover:h-20 
              "
                >
                  <h1 className="text-black text-md font-semibold">
                    {items?.projectName}
                  </h1>

                  <p
                    className="
                  text-xs text-black
                  opacity-0
                  translate-y-2
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
                  >
                    {items?.projectDetail}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <>Loading</>
          )}
        </div>
      </div>
    </>
  );
}
