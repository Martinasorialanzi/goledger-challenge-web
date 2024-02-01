import { Button, Carousel } from "flowbite-react";

const CarouselCover = () => {
  return (
    <div className="relative">
      <div className="h-40 sm:h-56 xl:h-64 2xl:h-80  ">
        <Carousel indicators={false} leftControl="." rightControl=".">
          <img src="https://wallpapercave.com/wp/wp5566838.jpg" alt="..." />
          <img src="https://images7.alphacoders.com/428/428939.jpg" alt="..." />
          
        </Carousel>
      </div>
      <div className="absolute bottom-12 right-4 text-white text-center">
      <p className="text-xl font-bold text-white mb-1">Purple Rain Album</p>
      <button className=" p-2 text-white rounded" href="/">
      <svg
      fill="white"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
      className=""
    >
      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />
    </svg>
      </button>
      </div>
    </div>
  );
};

export default CarouselCover;
