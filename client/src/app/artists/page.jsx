"use client";
import { IoIosAddCircleOutline } from "react-icons/io";
import React, { useCallback,useState } from "react";
import { useDeleteArtistMutation, useGetAllArtistsQuery } from "@/libs/features/artistSlices";
import { Avatar, Card, Dropdown, Tooltip } from "flowbite-react";
import { useRouter } from 'next/navigation'
import Swal from "sweetalert2";



const Artists = () => {
  const router=useRouter()
  const { data: artists } = useGetAllArtistsQuery();

  const [deleteArtists]=useDeleteArtistMutation();

  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const deleteArtist = useCallback((id) => {
    
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
				deleteArtists(id.id);
				Swal.fire({
					icon: "success",
					title: "Artist Delete!",
					showConfirmButton: false,
					timer: 1500,
				});
				setShow(false);
			}
		});
	}, []);


  return (
    <> 
      <div className="p-3 pb-6 rounded-2xl m-auto">

      <div className="absolute top-0 right-0 mt-6 mx-4">
        <Tooltip content="Add Artist" className="bg-[rgba(89,91,141,255)]">
          < IoIosAddCircleOutline size={50} onClick={(e)=>{router.push("/artists/create")}} />
        </Tooltip>
        </div>
        <div className="font-bold m-4 text-[2em] ">Artists</div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-7 justify-center">
            {artists?.map((artist) => (
              <div key={artist["@key"]} className="relative">
                <Card
                  className="rounded-full flex flex-col items-center m-auto bg-[rgba(39,39,39,255)] border-[rgba(255,141,65,255)] border-[0.1em] pt-2 border-0 rounded-none"
                >
                  
                    <Avatar bordered rounded  size="lg" className=" cursor-pointer mx-2" 
                    onClick={()=>{router.push(`/artists/`+ artist["@key"])}}/>
                  
                  <div className="text-[0.9em] mx-auto">{artist.name}</div>
                </Card>

          
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <Dropdown inline className="bg-[rgba(253,244,236,255)] border-[rgba(255,143,71,255)] h-[5em]" >
                    <Dropdown.Item onClick={(e)=>router.push(`artists/update/`+artist["@key"])}>Update</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => deleteArtist({id:artist["@key"]})} >Delete</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
