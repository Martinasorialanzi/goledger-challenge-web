import React from "react";
import { Card, Tooltip } from "flowbite-react";
import { useGetArtistByIdQuery } from "@/libs/features/artistSlices";
import { useRouter } from 'next/navigation'


const SongCard = ({ song }) => {
  const router=useRouter()

  const { data: artist } = useGetArtistByIdQuery(song.artists[0]?.["@key"]);

  return (
    <Card className="h-[3.2em] w-[15em] pt-1 bg-[rgba(253,251,249,255)] border-[rgba(255,141,65,255)] border-[0.1em] pt-2 border-0 rounded-none">
      <div className="grid grid-cols-4 gap-4">
       
       <img src="https://i.ibb.co/Rc8XhRR/playIcon.png"  className=" cursor-pointer"
       onClick={()=>{router.push(`/songs/`+ song["@key"])}}></img>
       

      <div className="grid grid-rows-3 col-span-3">
        <div className="space-y-1 font-medium  grid grid-cols-4 ">
          <div className="text-[0.8em] col-span-3   ">{song.title}</div>

          {song.explicit ? (
            <Tooltip content="Explicit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width={"0.4em"}
              fill="rgb(88 28 135)"
              className="col-span-1"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z" />
            </svg>
            </Tooltip>
          ) : (
            ""
          )}
        </div>
        <div className="text-[0.7em] text-gray-500 row-span-2">
          {artist?.name || "Unknown Artist"}
        </div>
      </div>
        </div>
    </Card>
  );
};

export default SongCard;
