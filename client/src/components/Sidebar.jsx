"use client";

import { Sidebar } from "flowbite-react";
import { goLedgerLogo } from "../../public/goLedgerLogo.png";
// import {clock} from '../../public/clock.png'
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { useGetAllPlaylistsQuery } from "@/libs/features/playlistSlices";

const SideMenu = () => {
  const { data } = useGetAllPlaylistsQuery();

  return (
    <>
      <div className="flex tx-[rgba(89,91,141,255)]">
        <Sidebar className="sticky top-0 h-screen w-[12em] ]">
          <Sidebar.Logo href="/">GoLedgerfy</Sidebar.Logo>
          <Sidebar.Items className="mx-3">
            <ul className="m-auto">
              <li className="group/item hover:tx-slate-900"> <a href="/artists"><p className="tx-pink-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Artists</p></a></li>
              <li className="group/item hover:tx-slate-900"> <a href="/albums"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Albums</p></a></li>
              <li className="group/item hover:tx-slate-900"> <a href="/songs"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Songs</p></a></li>
              <li className="group/item hover:tx-slate-900"> <a href="/playlist/"><p className="tx-slate-900 hover:tx-slate-600 active:tx-[violet-700] focus:outline-none focus:ring focus:ring-violet-300 ">Made for You</p></a></li>
        
            </ul>
            {/* <Sidebar.ItemGroup className="m-auto" >
              <Sidebar.Item href="/artists" className="m-auto">Artists</Sidebar.Item>
              <Sidebar.Item href="/songs">Songs</Sidebar.Item>
              <Sidebar.Item href="/paylist/foryou">Made for You</Sidebar.Item>
            </Sidebar.ItemGroup> */}
            <Sidebar.ItemGroup>
              <Sidebar.Collapse
                icon=""
                label="Playlists"
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open
                    ? HiOutlineMinusSm
                    : HiOutlinePlusSm;

                  return (
                    <IconComponent
                      aria-hidden
                      className={twMerge(
                        theme.label.icon.open[open ? "on" : "off"]
                      )}
                    />
                  );
                }}
              >
                <Sidebar.Item href="/playlists">All Palylists</Sidebar.Item>
                { data?.map((data) => {
                    return (
                      <Sidebar.Item href="" key={data.name}>
                        {data.name}
                      </Sidebar.Item>
                    );
                  })}
                <Sidebar.Item>Add Playlists</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default SideMenu;
