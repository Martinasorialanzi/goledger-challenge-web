"use client";

// import { Sidebar } from "flowbite-react";
// import { goLedgerLogo } from "../../public/goLedgerLogo.png";
// // import {clock} from '../../public/clock.png'
// import {
//   HiOutlineMinusSm,
//   HiOutlinePlusSm,
// } from "react-icons/hi";
// import { twMerge } from "tailwind-merge";
// import { useGetAllPlaylistsQuery } from "@/libs/features/playlistSlices";

// const SideMenu = () => {
//   const { data } = useGetAllPlaylistsQuery();

//   return (
//     <>
//       <div className="flex tx-[rgba(89,91,141,255)]">
//         <Sidebar className="sticky top-0 h-screen w-[12em] ]">
//           <Sidebar.Logo href="/">GoLedgerfy</Sidebar.Logo>
//           <Sidebar.Items className="mx-3">
//             <ul className="m-auto">
//               <li className="group/item hover:tx-slate-900"> <a href="/artists"><p className="tx-pink-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Artists</p></a></li>
//               <li className="group/item hover:tx-slate-900"> <a href="/albums"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Albums</p></a></li>
//               <li className="group/item hover:tx-slate-900"> <a href="/songs"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Songs</p></a></li>
//               <li className="group/item hover:tx-slate-900"> <a href="/playlist/"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Made for You</p></a></li>

//             </ul>
//             {/* <Sidebar.ItemGroup className="m-auto" >
//               <Sidebar.Item href="/artists" className="m-auto">Artists</Sidebar.Item>
//               <Sidebar.Item href="/songs">Songs</Sidebar.Item>
//               <Sidebar.Item href="/paylist/foryou">Made for You</Sidebar.Item>
//             </Sidebar.ItemGroup> */}
//             <Sidebar.ItemGroup>
//               <Sidebar.Collapse
//                 icon=""
//                 label="Playlists"
//                 renderChevronIcon={(theme, open) => {
//                   const IconComponent = open
//                     ? HiOutlineMinusSm
//                     : HiOutlinePlusSm;

//                   return (
//                     <IconComponent
//                       aria-hidden
//                       className={twMerge(
//                         theme.label.icon.open[open ? "on" : "off"]
//                       )}
//                     />
//                   );
//                 }}
//               >
//                 <Sidebar.Item href="/playlists">All Palylists</Sidebar.Item>
//                 { data?.map((data) => {
//                     return (
//                       <Sidebar.Item href="" key={data.name}>
//                         {data.name}
//                       </Sidebar.Item>
//                     );
//                   })}
//                 <Sidebar.Item>Add Playlists</Sidebar.Item>
//               </Sidebar.Collapse>
//             </Sidebar.ItemGroup>
//           </Sidebar.Items>
//         </Sidebar>
//       </div>
//     </>
//   );
// };

// export default SideMenu;
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { BiSolidAlbum } from "react-icons/bi";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { RiPlayList2Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const App = () => {
  const [open, setOpen] = useState(true);
  const router=useRouter()


  return (
    <div className="flex sticky top-0 h-screen">
      <div
        className={` ${
          open ? "w-30" : "w-20 "
        } bg-[rgba(39,39,39,255)] p-5  pt-8 relative duration-300`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowBack color="white" size={"xl"} />
        </div>

        <div className="flex gap-x-4 items-center">
          <IoMusicalNotesSharp size={["3em"]} color="white" onClick={(e)=>{router.push("/")}}  />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            <h1
              className={`text-white origin-left font-medium text-xl ml-3 duration-200 ${
                !open && "scale-0"
              }`}
            >
              GoLedgerfy
            </h1>
          </span>
        </div>
        <ul className="pt-6">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            onClick={(e)=>{router.push("/artists")}} 
          >
            <div>
              <GiMicrophone size={["2em"]} />
            </div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Artists
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            onClick={(e)=>{router.push("/albums")}} 
          >
            <div>
              <BiSolidAlbum size={["2em"]} />
            </div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Albums
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            onClick={(e)=>{router.push("/songs")}} 
          >
            <div>
              <IoMusicalNotesSharp size={["2em"]} />
            </div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Songs
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            onClick={(e)=>{router.push("/playlists")}}  
         >
            <div>
              <RiPlayList2Fill size={["2em"]}   />
              
            </div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              
              Playlists
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
