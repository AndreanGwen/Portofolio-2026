"use client";
import CardEducation from "@/common/cardEducation/CardEducation";
import Navbar from "@/common/navbar/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_PROJECT_LIST;
        const res = await axios.get(`${url}/education-list`);

        console.log(res);

        setEducations(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`w-full `}>
      <Navbar></Navbar>
      <div className={`flex flex-col items-center pt-10 pb-16 md:pb-0`}>
        <span className={`text-3xl font-bold pb-10`}>🎓My Education</span>

        <div
          className={`w-full h-fit md:pr-22 md:pl-22 pr-6 pl-6 flex flex-wrap gap-4 justify-center`}
        >
          {educations.length != 0 ? (
            educations.map((items: any) => (
              <CardEducation key={items._id} items={items} />
            ))
          ) : (
            <div className="flex justify-center flex-wrap gap-8 w-full">
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
              <Skeleton className="h-40 w-[288px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
