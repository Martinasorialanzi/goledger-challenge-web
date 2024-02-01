"use client";
import React from "react";
import { Card } from "flowbite-react";
import { useGetAlbumsQuery } from "@/libs/features/albumSlices";

const AlbumsSection = () => {
  const { data: albums } = useGetAlbumsQuery();
  const colors = [
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-lime-500",
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-green-500",
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500",
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-red-500",
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-yellow-500",
    "bg-gradient-to-r from-indigo-900 via-purple-500 to-teal-500",
  ];

  const getBackgroundColorClass = (index) => {
    const colorIndex = index % colors.length;
    return `${colors[colorIndex]}`;
  };

  return (
    <>
     <div className='bg-white p-3 m-4 pb-4 rounded-2xl m-4'>
     <h1 className='font-bold mt-4 mx-4 mb-2 text-[1.5em]'>Albums</h1>

     <a href='/' className='grid justify-items-end text-right mx-4 mb-2 my-1 text-[0.8em]'>See more</a>
      <div className="grid grid-cols-2 gap-3 ">
        {albums?.map((album, index) => (
          <Card
            href="#"
            className={`grid max-w-sm border-none justify-center ${getBackgroundColorClass(
              index
            )}`}
            key={album["@key"]}
          >
            <h5 className="text-[0.9em] font-bold tracking-tight text-white ">
              {album.title}
            </h5>
          </Card>
        ))}
      </div>
      </div>
    </>
  );
};

export default AlbumsSection;
