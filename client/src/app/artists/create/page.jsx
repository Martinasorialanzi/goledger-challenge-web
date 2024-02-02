"use client"
import { useState } from 'react';
import { useCreateArtistMutation, useGetArtistByIdQuery, useUpdateArtistMutation } from '@/libs/features/artistSlices';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";




const CreateArtist = () => {
    const router=useRouter()
  

const [nameArtist,setNameArtist]=useState("");
const [aboutArtist,setAboutArtist]=useState("")
  
  const [createArtist]=useCreateArtistMutation()
	
	
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure you want to save the changes?",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#E95821",
      denyButtonColor: "#5B5B5B",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          showConfirmButton: false,
          timer: 1500,
        });
       
       
       

        createArtist(nameArtist,aboutArtist)
        router.push("/artists")
        
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Changes were not saved!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };




  return (
<>
<div className='grid justify-center align-center'>
<div className='bg-[rgba(39,39,39,255)] rounded p-6  '>
    <div className="font-bold m-4 text-[2em] ">Create Artist 
    </div>
    <form onSubmit={handleSubmit} className="flex  flex-col gap-4 w-[40em]">
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Artist name" color={"white"} />
      </div>
      <TextInput onChange={(e)=>{setNameArtist(e.target.value)}} type="text"  defaultValue={nameArtist} required shadow />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="about" value="About" color={"white"}  />
      </div>
      <TextInput onChange={(e)=>{setAboutArtist(e.target.value)}}  type="text" required shadow defaultValue={aboutArtist}/>
    </div>
   
    <Button type="submit" className='bg-[rgba(89,91,141,255)] '>Save change</Button>
  </form>
  </div>
</div>
  </>
  )
}

export default CreateArtist