import React, { useState, useEffect } from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import Carousel from "../components/carousel/carousel";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem]">
          <Carousel />
        </div>
        <div className="content w-full h-[60rem] flex ">
          <div className="basis-2/3 p-5">
            <Card className="w-full h-[42rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/60" />
                <img
                  src="./assets/gempa.jpg"
                  className="object-cover w-full"
                  alt="ui/ux review check"
                />
                <div className="absolute inset-0 grid w-full items-end m-12">
                  <div className="w-3/4 ">
                    <Typography
                      variant="h6"
                      color="white"
                      className="mb-3 text-4xl"
                    >
                      Gempa Bantul Yogyakarta Trending Topic di Twitter,
                      Warganet: Terasa hingga Pekalongan
                    </Typography>
                    <div className="flex gap-2">
                      <Button size="md" color="white">
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="w-full h-[8rem] flex">
                  <div className="w-[27rem] flex mx-auto">
                    <div className="w-[13rem] h-[7rem] my-auto">
                      <img
                        src="./assets/pemilu.jpg"
                        className="object-cover w-full h-full"
                        alt="puan"
                      />
                    </div>
                    <div>
                      <Chip
                        variant="ghost"
                        size="sm"
                        value="Politik"
                        className="w-[60px] m-2 rounded-full"
                      />
                      <Typography
                        variant="h6"
                        color="black"
                        className="text-sm ms-2"
                      >
                        Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                        PDIP: Mereka Bercakap-cakap Santai
                      </Typography>
                      <Typography
                        variant="h6"
                        color="gray"
                        className="text-xs mt-1 ms-2"
                      >
                        8 Juni 2023 | 16:29 Wib
                      </Typography>
                    </div>
                  </div>
                  <div className="w-[27rem] flex mx-auto">
                    <div className="w-[13rem] h-[7rem] my-auto">
                      <img
                        src="./assets/pemilu.jpg"
                        className="object-cover w-full h-full"
                        alt="puan"
                      />
                    </div>
                    <div>
                      <Chip
                        variant="ghost"
                        size="sm"
                        value="Politik"
                        className="w-[60px] m-2 rounded-full"
                      />
                      <Typography
                        variant="h6"
                        color="black"
                        className="text-sm ms-2"
                      >
                        Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                        PDIP: Mereka Bercakap-cakap Santai
                      </Typography>
                      <Typography
                        variant="h6"
                        color="gray"
                        className="text-xs mt-1 ms-2"
                      >
                        8 Juni 2023 | 16:29 Wib
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="basis-1/3 p-5">
            <Card className="w-full h-[42rem]">
              <div className="w-full">
                <div className="w-[27rem] my-3 flex mx-auto">
                  <div className="w-[13rem] h-[7rem] my-auto">
                    <img
                      src="./assets/pemilu.jpg"
                      className="object-cover w-full h-full"
                      alt="puan"
                    />
                  </div>
                  <div>
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Politik"
                      className="w-[60px] m-2 rounded-full"
                    />
                    <Typography
                      variant="h6"
                      color="black"
                      className="text-sm ms-2"
                    >
                      Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                      PDIP: Mereka Bercakap-cakap Santai
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-xs mt-1 ms-2"
                    >
                      8 Juni 2023 | 16:29 Wib
                    </Typography>
                  </div>
                </div>
                <div className="w-[27rem] my-3 flex mx-auto">
                  <div className="w-[13rem] h-[7rem] my-auto">
                    <img
                      src="./assets/pemilu.jpg"
                      className="object-cover w-full h-full"
                      alt="puan"
                    />
                  </div>
                  <div>
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Politik"
                      className="w-[60px] m-2 rounded-full"
                    />
                    <Typography
                      variant="h6"
                      color="black"
                      className="text-sm ms-2"
                    >
                      Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                      PDIP: Mereka Bercakap-cakap Santai
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-xs mt-1 ms-2"
                    >
                      8 Juni 2023 | 16:29 Wib
                    </Typography>
                  </div>
                </div>
                <div className="w-[27rem] my-3 flex mx-auto">
                  <div className="w-[13rem] h-[7rem] my-auto">
                    <img
                      src="./assets/pemilu.jpg"
                      className="object-cover w-full h-full"
                      alt="puan"
                    />
                  </div>
                  <div>
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Politik"
                      className="w-[60px] m-2 rounded-full"
                    />
                    <Typography
                      variant="h6"
                      color="black"
                      className="text-sm ms-2"
                    >
                      Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                      PDIP: Mereka Bercakap-cakap Santai
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-xs mt-1 ms-2"
                    >
                      8 Juni 2023 | 16:29 Wib
                    </Typography>
                  </div>
                </div>
                <div className="w-[27rem] my-3 flex mx-auto">
                  <div className="w-[13rem] h-[7rem] my-auto">
                    <img
                      src="./assets/pemilu.jpg"
                      className="object-cover w-full h-full"
                      alt="puan"
                    />
                  </div>
                  <div>
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Politik"
                      className="w-[60px] m-2 rounded-full"
                    />
                    <Typography
                      variant="h6"
                      color="black"
                      className="text-sm ms-2"
                    >
                      Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                      PDIP: Mereka Bercakap-cakap Santai
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-xs mt-1 ms-2"
                    >
                      8 Juni 2023 | 16:29 Wib
                    </Typography>
                  </div>
                </div>
                <div className="w-[27rem] my-3 flex mx-auto">
                  <div className="w-[13rem] h-[7rem] my-auto">
                    <img
                      src="./assets/pemilu.jpg"
                      className="object-cover w-full h-full"
                      alt="puan"
                    />
                  </div>
                  <div>
                    <Chip
                      variant="ghost"
                      size="sm"
                      value="Politik"
                      className="w-[60px] m-2 rounded-full"
                    />
                    <Typography
                      variant="h6"
                      color="black"
                      className="text-sm ms-2"
                    >
                      Puan Maharani Bertemu Anies Baswedan Usai Lempar Jumroh,
                      PDIP: Mereka Bercakap-cakap Santai
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="text-xs mt-1 ms-2"
                    >
                      8 Juni 2023 | 16:29 Wib
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
