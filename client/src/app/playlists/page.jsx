"use client";
import React,{useCallback,useState} from "react";
import { Card, Tooltip,Dropdown } from "flowbite-react";
import { useRouter } from 'next/navigation'
import Swal from "sweetalert2";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDeletePlaylistMutation, useGetAllPlaylistsQuery } from "@/libs/features/playlistSlices";




const Playlists = () => {
  const router=useRouter()

  const { data: playlists } = useGetAllPlaylistsQuery();
  const [deletePlaylists]=useDeletePlaylistMutation();
  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const deletePlaylist = useCallback((id) => {
	Swal.fire({
    title: "Are you sure?",
    text: "It cannot be reversed!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E95821",
    cancelButtonColor: "#5B5B5B",
    confirmButtonText: "Yes, delete!",
  }).then((result) => {
    if (result.isConfirmed) {
      deletePlaylists(id.id);
      Swal.fire({
        icon: "success",
        title: "Playlist Delete!",
        showConfirmButton: false,
        timer: 1500,
      });
      setShow(false);
    }
  });
}, []);

  return (
    <div className="p-3 pb-6 rounded-2xl m-auto">

    <div className="absolute top-0 right-0 mt-6 mx-4">
      <Tooltip content="Add Playlist" className="bg-[rgba(89,91,141,255)]">
        < IoIosAddCircleOutline size={50}  />
      </Tooltip>
      </div>
      <div className="font-bold m-4 text-[2em] ">Playlists</div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-7 justify-center">
          {playlists?.map((playlist) => (
            <div key={playlist["@key"]} className="relative">
              <Card
                className=" border-[0.1em] m-auto border-0 rounded-lg h-[15em] w-[10em] flex flex-col"
                
              >
 <div className="flex-5 mt-2">
                <img src="https://i.ibb.co/cFTxfXg/albums.png" bordered rounded  className="  cursor-pointer m-auto h-[7.8em] w-[7.8em]" 
                    onClick={()=>{router.push(`/playlists/`+ playlist["@key"])}}/>
                </div>
                <div className=" flex-1 mx-auto font-medium tx-sm justify-right">{playlist.name}</div>
              </Card>

        
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <Dropdown inline className="bg-[rgba(253,244,236,255)] border-[rgba(255,143,71,255)] h-[5em]" >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={(e) => deletePlaylist({id:playlist["@key"]})} >Delete</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Playlists