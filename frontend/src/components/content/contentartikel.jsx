import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  Breadcrumbs,
} from "@material-tailwind/react";
import Navbarguest from "../layout/navbar/navbarguest";

const ContentArtikel = () => {
  return (
    <React.Fragment>
      <div>
        <div className="w-full flex px-5 mt-5">
          <div className="w-2/3 mx-auto">
            <Breadcrumbs className="bg-transparent pl-0">
              <a href="#" className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
              <a href="#" className="opacity-60">
                <span>Semua</span>
              </a>
              <a href="#" className="font-bold text-light-blue-400">
                Artikel
              </a>
            </Breadcrumbs>
            <div className="mt-2">
              <Typography variant="h1">
                Respons Pemain Incaran Shin Tae-yong, Tijjani Reijnders Setelah
                Resmi Gabung AC Milan
              </Typography>
              <Typography className="-mt-2">
                Artikelite · Kamis 20 Juli 2029 84:53 WIH
              </Typography>
              <img
                src="./assets/bal.jpg"
                alt=""
                className="w-full h-[35rem] object-cover mt-7"
              />
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                PEMAIN incaran pelatih Timnas Indonesia, Shin Tae-yong, yakni
                Tijjani Reijnders memberikan respons setelah resmi gabung AC
                Milan. Gelandang 24 tahun keturunan Indonesia itu mengaku sangat
                senang bisa berseragam Rossoneri -julukan AC Milan- dan tidak
                perlu berpikir dua kali untuk memilih klub raksasa Liga Italia
                itu.
              </Typography>
              {/* <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                PEMAIN incaran pelatih Timnas Indonesia, Shin Tae-yong, yakni
                Tijjani Reijnders memberikan respons setelah resmi gabung AC
                Milan. Gelandang 24 tahun keturunan Indonesia itu mengaku sangat
                senang bisa berseragam Rossoneri -julukan AC Milan- dan tidak
                perlu berpikir dua kali untuk memilih klub raksasa Liga Italia
                itu.
              </Typography>
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                Sebagaimana diketahui, AC Milan telah resmi mendatangkan Tijjani
                Reijnders dari AZ Alkmaar secara permanen di bursa transfer
                musim panas 2023 ini. Gelandang asal Belanda itu menandatangani
                kontrak dengan Rossoneri berdurasi lima tahun atau hingga 30
                Juni 2028.
              </Typography>
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                Tijjani Reijnders menjadi rekrutan kelima AC Milan di bursa
                transfer musim panas 2023 inu setelah mendatangkan Christian
                Pulisic, Ruben Loftus-Cheek, Luka Romero, dan Marco Sportiello.
                Dia memiliki kemampuan untuk mengembangkan permainan, kemampuan
                teknis dan kreativitasnya.
              </Typography>
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                Terbukti, Tijjani Reijnders bersinar musim lalu bersama AZ
                Alkmaar dengan mencetak tujuh gol dan 12 assist dalam 54
                pertandingan di semua kompetisi. Kini, pemain kelahiran 29 Juli
                1998 di Zwolle itu akan mengenakan nomor punggung 14 bersama AC
                Milan
              </Typography>
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                Setelah resmi bergabung dengan AC Milan, mengaku kegirangan bisa
                berseragam Rossoneri. Bahkan, ketika mendapat kabar dari agennya
                bahwa AC Milan tertarik merekrutnya, ia tidak berpikir dua kali
                untuk memilih klub raksasa Liga Italia tersebut.
              </Typography>
              <Typography
                variant="lead"
                className="text-2l md:text-5xl lg:text-6xl text-center font-serif"
              >
                “Saya sangat senang dan puas berada di sini. Saya juga sangat
                bangga menjadi bagian dari klub hebat ini. Ketika agen saya
                memberi tahu saya bahwa Milan tertarik pada saya, saya senang
                dan bahagia," ungkap Tijjani Reijnders, mengutip dari laman
                resmi AC Milan, Kamis (20/7/2023).
              </Typography> */}
            </div>
          </div>
          <Card className="w-[26rem] h-[80rem] mx-auto">
            <Typography
              variant="h3"
              color="black"
              className="h-[40px] border-l-[6px] border-deep-orange-600 ps-2 m-4 mt-6 mb-0"
            >
              Terpopuler
            </Typography>
            <div className="w-full">
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
              <div className="w-[23rem] my-3 flex mx-auto">
                <div className="w-[15rem] h-[6rem] my-auto">
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
    </React.Fragment>
  );
};

export default ContentArtikel;
