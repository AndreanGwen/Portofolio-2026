"use client";
import CardCustom from "@/common/cardCustom/CardCustom";
import Navbar from "@/common/navbar/Navbar";
import PageHead from "@/common/page-head/Head";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_PROJECT_LIST;
        const res = await axios.get(`${url}/project-list`);

        console.log(res);

        setProjects(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchProject = async (category: string) => {
    try {
      const url = process.env.NEXT_PUBLIC_PROJECT_LIST;
      const res = await axios.get(`${url}/project-list/${category}`);
      console.log(res);
      setProjects(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PageHead />
      <Navbar></Navbar>
      <div className={`flex flex-col items-center pt-10 pb-16 md:pb-0`}>
        <div className={`text-3xl font-bold md:pb-8`}>It's My Projects</div>

        <div
          className={`p-2 border-2 rounded-md border-blue-950 border-b-8 border-r-8 md:block hidden`}
        >
          <GitHubCalendar
            username="AndreanGwen"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            colorScheme="light"
          />
        </div>

        <div className={`flex md:pt-10 gap-9 text-black/50 font-semibold pt-7`}>
          <span
            className={`hover:text-black cursor-pointer`}
            onClick={() => {
              location.reload();
            }}
          >
            All ({projects.length})
          </span>
          <span
            className={`hover:text-black cursor-pointer`}
            onClick={() => {
              fetchProject("Website");
            }}
          >
            Website
          </span>
          <span
            className={`hover:text-black cursor-pointer`}
            onClick={() => {
              fetchProject("IOT");
            }}
          >
            IOT
          </span>
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
