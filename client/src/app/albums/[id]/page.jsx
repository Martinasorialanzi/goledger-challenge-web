"use client"
import { useGetAlbumByIdQuery } from '@/libs/features/albumSlices';
import {  useGetArtistByIdQuery } from '@/libs/features/artistSlices';
import { Avatar } from 'flowbite-react';
import { useParams } from 'next/navigation'
import React from 'react'

const Albums = () => {
 
  const id= useParams()
  const albumId = decodeURIComponent(String(id.id));
  
  const{data:album,isLoading}= useGetAlbumByIdQuery(albumId)
  if (isLoading) return <div>Loading...</div>;
  const artistId=album.artist["@key"]
  // const{data:artist,isLoading:artistLoading}=useGetArtistByIdQuery(artistId)
  //  if (artistLoading) return <div>Loading...</div>;

  return (
    <>

    <div className='bg-white  rounded p-6 h-full'>
   <div className='flex'>

    <Avatar img="https://i.ibb.co/cFTxfXg/albums.png" size={"xl"} >
      <div className=" text-[1em] font-bold ">
        <div>{album.title}</div>
        <div className='text-sm font-medium mt-1'> {<ArtistName artistKey={artistId} />} </div>
      </div>
    </Avatar>
   </div>
    
    <div>
      <p className="space-y-1 text-[2em] font-medium my-5"> Songs</p>

      <p className='text-center'>No song to display</p>
    </div>

    </div>
    </>
  )
}

const ArtistName = ({ artistKey }) => {
  const { data: artist } = useGetArtistByIdQuery(artistKey);

  return <>{artist?.name || "Name not found"}</>;
};

export default Albums