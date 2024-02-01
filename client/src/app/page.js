import AlbumsSection from "@/components/home/albumSection/AlbumsSection";
import ArtistsSection from "@/components/home/ArtistsSection";
import CarouselCover from "@/components/home/CarouselCover";
import RecentlyPlayedTable from "@/components/home/playlistSongsSection/RecentlyPlayedTable";
import { SongsSection } from "@/components/home/songSection/SongsSection";


export default function Home() {

  return (
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2 my-auto">
      <CarouselCover/>
      <SongsSection/>
      <ArtistsSection/>
    </div>
    <div className="my-auto">
      <AlbumsSection/>
      <RecentlyPlayedTable/>
    </div>

  </div>
  );
}
