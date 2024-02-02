"use client";
import { IoIosAddCircleOutline } from "react-icons/io";
import React, { useCallback,useState } from "react";
import { Avatar, Card, Dropdown, Tooltip } from "flowbite-react";
import { useRouter } from 'next/navigation'
import Swal from "sweetalert2";
import { useDeleteSongMutation, useGetAllSongsQuery } from "@/libs/features/songSlices";
import SongCard from "@/components/home/songSection/SongCard";

const Songs = () => {
  const router=useRouter()
  const { data: songs } = useGetAllSongsQuery();

  const [deleteSongs]=useDeleteSongMutation();

  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const deleteSong = useCallback((id) => {
    
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
				deleteSongs(id.id);
				Swal.fire({
					icon: "success",
					title: "Song Delete!",
					showConfirmButton: false,
					timer: 1500,
				});
				setShow(false);
			}
		});
	}, []);

  return (

    <div className=' flex justify-center align-center'>
    <div className='bg-[rgba(39,39,39,255)] rounded p-6  h-full grid justify-center align-center'>
    {/* <div className="absolute top-0 right-0 mt-6 mx-4">
      <Tooltip content="Add Song" className="bg-[rgba(89,91,141,255)]">
        < IoIosAddCircleOutline size={50}  />
      </Tooltip>
      </div> */}
      <div className="font-bold m-4 text-[2em] ">Songs</div>
      <div className="flex flex-col justify-content-center ">
        <div className="flex flex-wrap gap-3 justify-left p-4">
          {songs?.map((song) => (
            <div key={song["@key"]} className="relative">
               <SongCard key={song['@key']} song={song} />
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <Dropdown inline className="bg-[rgba(253,244,236,255)] border-[rgba(255,143,71,255)] h-[3em]" >
                  {/* <Dropdown.Item>Edit</Dropdown.Item> */}
                  <Dropdown.Item onClick={(e) => deleteSong({id:song["@key"]})} >Delete</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  )
}

export default Songs