"use client";
import { useGetArtistByIdQuery } from "@/libs/features/artistSlices";
import { useGetPlaylistByIdQuery } from "@/libs/features/playlistSlices";
import { useGetSongByIdQuery } from "@/libs/features/songSlices";
import { Checkbox, Table } from "flowbite-react";
import { AiOutlinePlaySquare } from "react-icons/ai";

const RecentlyPlayedTable = () => {
  const { data: playlist } = useGetPlaylistByIdQuery(
    "playlist:235b7176-602d-5f20-9e44-e7be9d0feae2"
  );

  return (
    <>
      <div className="bg-[rgba(39,39,39,255)] p-3 m-4 pb-4 rounded-2xl m-auto ">
        <h1 className="font-small mt-4 mx-4 mb-2 text-[1.3em] m-auto">
          A playlist Made for You
        </h1>

        <Table className="bg-[rgba(23,23,23,255)]">
          <Table.Body className="divide-y bg-[rgba(23,23,23,255)] border-gray-700 px-1 text-white ">
            {playlist?.songs?.map((song, index = 0) => (
              <Table.Row
                key={song["@key"]}
                className="bg-[rgba(23,23,23,255)] text-white border-gray-400 "
              >
                <Table.Cell className="p-4">
                  <p>{index + 1}</p>
                </Table.Cell>
                <Table.Cell className=" ">
                  <AiOutlinePlaySquare size={["3em"]} />
                </Table.Cell>
                <Table.Cell className=" text-white whitespace-nowrap font-medium dark:text-whites">
                  <p> {<SongNameRenderer songKey={song["@key"]} />} </p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <a
          href="/playlists"
          className="grid justify-items-end text-right mx-4 mb-2 my-1 text-[0.8em]"
        >
          See more
        </a>
      </div>
    </>
  );
};

export default RecentlyPlayedTable;

const SongNameRenderer = ({ songKey }) => {
  const { data: songs } = useGetSongByIdQuery(songKey);

  return <>{songs?.title || "Name not found"}</>;
};
