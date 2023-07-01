import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import Carousel from "../components/carousel/carousel";
import ContentHome from "../components/content/contenthome";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem]">
          <Carousel />
        </div>
        <ContentHome />
      </div>
    </React.Fragment>
  );
};

export default Home;
