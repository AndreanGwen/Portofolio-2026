"use client";
import CardCustom from "@/common/cardCustom/CardCustom";
import Navbar from "@/common/navbar/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
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
          className={`w-full h-fit md:pr-22 md:pl-22 pr-6 pl-6 pt-7 flex flex-wrap gap-8 justify-center`}
        >
          {projects.length != 0 ? (
            projects.map((items: any) => (
              <CardCustom index={items._id} items={items} />
            ))
          ) : (
            <div className="flex justify-center flex-wrap gap-8 w-full">
              <Skeleton className="md:w-[356px] w-full h-44" />
              <Skeleton className="md:w-[356px] w-full h-44" />
              <Skeleton className="md:w-[356px] w-full h-44" />
              <Skeleton className="md:w-[356px] w-full h-44" />
              <Skeleton className="md:w-[356px] w-full h-44" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
