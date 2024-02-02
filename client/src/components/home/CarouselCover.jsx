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
    </div>
  );
};

export default CarouselCover;
