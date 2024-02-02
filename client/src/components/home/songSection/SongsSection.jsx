"use client";

import { useGetSongsQuery } from "@/libs/features/songSlices";
import SongCard from "./SongCard";
import { Button } from "flowbite-react";

export const SongsSection = () => {
  const { data: songs } = useGetSongsQuery();

  return (
    <>
      <div className="bg-[rgba(39,39,39,255)] p-3 m-4 pb-4 rounded-2xl m-4">
        <h1 className="font-bold mt-4 mx-4 mb-2 text-[1.5em]">Songs</h1>

        <a
          href="/songs"
          className="grid justify-items-end text-right mx-4 mb-2 my-1 text-[0.8em]"
        >
          See more
        </a>

        <div className="flex flex-wrap gap-2 justify-center mb-4 ">
          {songs?.map((song) => (
            <SongCard key={song["@key"]} song={song} />
          ))}
        </div>
      </div>
    </>
  );
};
