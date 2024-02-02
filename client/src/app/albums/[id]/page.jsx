"use client";
import { useGetAlbumByIdQuery } from "@/libs/features/albumSlices";
import { useGetArtistByIdQuery } from "@/libs/features/artistSlices";
import { Avatar } from "flowbite-react";
import { useParams } from "next/navigation";
import React from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";


const Albums = () => {
  const id = useParams();
  const albumId = decodeURIComponent(String(id.id));

  const { data: album, isLoading } = useGetAlbumByIdQuery(albumId);
  if (isLoading) return <div>Loading...</div>;
  const artistId = album.artist["@key"];

  return (
    <>
      <div className="bg-[rgba(39,39,39,255)]  rounded p-6 h-full">
        <div className="grid grid-cols-4 ">
          <AiOutlinePlaySquare size={["13em"]}/>
            <div className=" text-[1em] font-bold  my-auto">
              <div>{album.title}</div>
              <div className="text-sm font-medium mt-1">
                {" "}
                {<ArtistName artistKey={artistId} />}{" "}
              </div>
            </div>
        </div>

        <div>
          <p className="space-y-1 text-[2em] font-medium my-5"> Songs</p>

          <p className="text-center">No song to display</p>
        </div>
      </div>
    </>
  );
};

const ArtistName = ({ artistKey }) => {
  const { data: artist } = useGetArtistByIdQuery(artistKey);

  return <>{artist?.name || "Name not found"}</>;
};

export default Albums;
