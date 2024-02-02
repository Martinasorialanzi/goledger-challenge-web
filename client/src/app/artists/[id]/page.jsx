"use client"
import {  useGetArtistByIdQuery } from '@/libs/features/artistSlices';
import { Avatar } from 'flowbite-react';
import { useParams } from 'next/navigation'
import React from 'react'

const Artist = () => {
 
  const id= useParams()
  const artistId = decodeURIComponent(String(id.id));
  
  const{data:artist,isLoading}= useGetArtistByIdQuery(artistId)
 if (isLoading) return <div>Loading...</div>;




  return (
    <>

    <div className='bg-white w-full rounded p-6 '>
    <div className='flex '>
    <Avatar size={"xl"} rounded >
      <div className="space-y-1 text-[3em] font-medium ">
        <div>{artist.name}</div>
        <div className="text-sm ">{artist.about}</div>
      </div>
    </Avatar>
    </div>
    {/* <div>
      <p className="space-y-1 text-[2em] font-medium my-5"> Songs</p>
    </div> */}

    </div>
    </>
  )
}

export default Artist