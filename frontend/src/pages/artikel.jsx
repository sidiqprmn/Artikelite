import React from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import ContentArtikel from "../components/content/contentartikel";

const Artikel = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <ContentArtikel />
      </div>
    </React.Fragment>
  );
};

export default Artikel;
