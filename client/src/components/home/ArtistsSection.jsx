'use client';
import { useGetArtistsQuery } from '@/libs/features/artistSlices';
import { Avatar, Card } from 'flowbite-react';
import { useRouter } from 'next/navigation'


const ArtistsSection = () => {
  const router=useRouter()

  const {data:artists}=useGetArtistsQuery()
  return (
   <>
   <div className='bg-white p-3 m-4 pb-6 rounded-2xl m-4 my-auto'>
    <div className='font-bold m-4 text-[1.5em]'>Artists</div>
    <a href='/' className='grid justify-items-end text-right mx-4 mb-3 text-[0.8em]'>See more</a>
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-wrap gap-2 justify-center">
      {artists?.map((artist)=>(
     
        <Card key={artist['@key']} className="flex flex-col items-center  w-[8em] h-[8em] bg-[rgba(253,251,249,255)] border-[rgba(255,141,65,255)] border-[0.1em] pt-2 border-0 rounded-none ">
        <Avatar bordered rounded color="purple" size="lg" className=" cursor-pointer mx-2" 
                    onClick={()=>{router.push(`/artists/`+ artist["@key"])}}/>
            <div className="text-[0.8em] mx-auto">{artist.name}</div>
          </Card>
    
        ))}
        </div>
        </div>

    </div>
    

    </>
  )
}

export default ArtistsSection