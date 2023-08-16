import React from "react";
import Navbarguest from "../components/final/layout/navbar/navbarguest";
import Carousel from "../components/carousel/carousel";
import ContentHome from "../components/content/contenthome";
import ContentAdminFinal from "../components/final/content/homeContentFinal";

const Final = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem]">
          {/* <Carousel /> */}
          {/* <ContentHome /> */}
          <ContentAdminFinal />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Final;