"use client";
import Navbar from "@/common/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_PROJECT_LIST!;
        const res = await axios.get(url);
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
      </div>
    </>
  );
}
