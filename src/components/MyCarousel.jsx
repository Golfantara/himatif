import React, { useState } from "react";
import Modal from "./Modal";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";
import "../carouselButton.css";
import figma from "../assets/figma.png";
import resesi from "../assets/resesi.png";
import iphone from "../assets/iphone.png";

function Berita() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1366 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1366, min: 1030 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1030, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    // ======================================
    // ==============Dekstop=================
    // ======================================
    <div className="container mx-auto ">
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div className="flex border-2 border-[#020181] lg:w-[1300px] pl-[50px] h-[521px] md:w-[760px] my-[12px] bg-[#020181] rounded-[12px] flex-col">
            <h2 className="text-[32px] font-[400px] m-[26px] pl-[10px] text-white py-2">
              News
            </h2>
            {/* Carousel */}
            <div className="">
              <div>
                <Carousel responsive={responsive} className="mx-[110px]">
                  {/* slide 1 */}
                  <div>
                    <div
                      onClick={openModal}
                      className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]"
                    >
                      <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                        <img
                          src={figma}
                          alt=""
                          className="rounded-t-md h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                        <h1 className="text-[25px]">Figma</h1>
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                          <span className="text-[12px] text-red-500">
                            5 hari yang lalu
                          </span>
                        </div>
                        <p className="text-[13px]">
                          Figma menjadi website desain terbaik bagi para
                          desainer web dan mobile
                        </p>
                      </div>
                    </div>
                    <Modal isOpen={isModalOpen} closeModal={closeModal}>
                      <p>
                        Berikut beberapa contoh algoritma kriptografi modern
                        yang saat ini banyak digunakan: Advanced Encryption
                        Standard (AES) - merupakan algoritma kriptografi
                        simetris yang digunakan untuk mengenkripsi data dalam
                        berbagai aplikasi seperti protokol keamanan internet,
                        penyimpanan data, dan komunikasi data. AES diadopsi oleh
                        pemerintah Amerika Serikat dan dianggap sebagai salah
                        satu algoritma kriptografi yang paling aman dan efisien.
                        Rivest-Shamir-Adleman (RSA) - merupakan algoritma
                        kriptografi asimetris yang digunakan untuk mengenkripsi
                        dan mendekripsi pesan menggunakan pasangan kunci publik
                        dan kunci privat. RSA banyak digunakan dalam protokol
                        keamanan internet seperti SSL/TLS, serta dalam
                        implementasi sistem elektronik pembayaran. Elliptic
                        Curve Cryptography (ECC) - merupakan algoritma
                        kriptografi asimetris yang menggunakan kurva eliptik
                        untuk menghasilkan pasangan kunci publik dan kunci
                        privat. ECC dianggap lebih aman dan efisien dibandingkan
                        dengan algoritma RSA, dan banyak digunakan dalam
                        aplikasi seperti perbankan, sertifikat digital, dan
                        keamanan nirkabel. Blowfish - merupakan algoritma
                        kriptografi simetris yang digunakan untuk mengenkripsi
                        data pada jaringan komputer dan sistem penyimpanan data.
                        Blowfish dianggap lebih aman dan cepat dibandingkan
                        dengan algoritma simetris lain seperti DES, dan
                        digunakan dalam berbagai aplikasi seperti sistem
                        manajemen database, sistem operasi, dan game online.
                        Twofish - merupakan algoritma kriptografi simetris yang
                        dikembangkan sebagai pengganti Blowfish yang lebih aman
                        dan efisien. Twofish digunakan dalam berbagai aplikasi
                        seperti sistem manajemen database, sistem operasi, dan
                        protokol keamanan internet seperti SSH.
                      </p>
                    </Modal>
                  </div>

                  {/* slide 2 */}
                  <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                    <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                      <img
                        src={resesi}
                        alt=""
                        className="rounded-t-md h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                      <h1 className="text-[25px]">Resesi 2023</h1>
                      <div className="flex items-center gap-2 animate-pulse">
                        <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                        <span className="text-[12px] text-red-500">
                          7 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[13px]">
                        Menginjak awal tahun 2023 dengan resesi global
                      </p>
                    </div>
                  </div>

                  {/* slide 3 */}
                  <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                    <div className="w-auto h-[220px] rounded-t-[9px] text-center">
                      <img
                        src={iphone}
                        alt=""
                        className="rounded-t-md w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                      <h1 className="text-[25px]">Resesi 2023</h1>
                      <div className="flex items-center gap-2 animate-pulse">
                        <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                        <span className="text-[12px] text-red-500">
                          7 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[13px]">
                        Menginjak awal tahun 2023 dengan resesi global
                      </p>
                    </div>
                  </div>
                  {/* slide 4 */}
                  <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                    <div className="w-auto h-[200px] bg-black rounded-t-[9px] text-center"></div>
                    <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                      <h1 className="text-[25px]">Figma</h1>
                      <div className="flex items-center gap-2 animate-pulse">
                        <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                        <span className="text-[12px] text-red-500">
                          5 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[13px]">
                        Figma menjadi website desain terbaik bagi para desainer
                        web dan mobile
                      </p>
                    </div>
                  </div>

                  {/* slide 5 */}
                  <div className="flex flex-col w-[261px] h-[378px] font-semibold bg-white rounded-[11px]">
                    <div className="w-auto h-[200px] bg-black rounded-t-[9px] text-center"></div>
                    <div className="flex flex-col justify-evenly ml-[20px] mt-[2px] h-[126px] w-[200px] ">
                      <h1 className="text-[25px]">Figma</h1>
                      <div className="flex items-center gap-2 animate-pulse">
                        <div className="bg-red-500 w-[10px] rounded-full h-[10px]"></div>
                        <span className="text-[12px] text-red-500">
                          5 hari yang lalu
                        </span>
                      </div>
                      <p className="text-[13px]">
                        Figma menjadi website desain terbaik bagi para desainer
                        web dan mobile
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================================
      ==============Mobile================
      ===================================== */}
      <div className="md:hidden max-[200px]:hidden">
        <div className="flex justify-center">
          <div className="flex border-2 border-[#020181] w-[290px] h-[975px] my-[60px] bg-[#020181] text-white rounded-[12px] flex-col">
            <h2 className="text-[20px] font-[400px] m-[20px] pl-[5px]">News</h2>
            <div className="pl-[40px] pt-[20px]">
              <div className="flex flex-col w-[216px] h-[250px] justify-between">
                <div className="w-[212px] h-[133.56px] bg-[#D9D9D9] rounded-[9px]"></div>
                <h1 className="text-[22px]">Judul untuk Berita</h1>
                <span className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime excepturi vero dolore!
                </span>
              </div>
              <div className="flex flex-col w-[216px] h-[250px] justify-between mt-[50px]">
                <div className="w-[212px] h-[133.56px] bg-[#D9D9D9] rounded-[9px] text-center"></div>
                <h1 className="text-[22px]">Judul untuk Berita</h1>
                <span className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime excepturi vero dolore!
                </span>
              </div>
              <div className="flex flex-col w-[216px] h-[250px] justify-between mt-[50px]">
                <div className="w-[212px] h-[133.56px] bg-[#D9D9D9] rounded-[9px] text-center"></div>
                <h1 className="text-[22px]">Judul untuk Berita</h1>
                <span className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime excepturi vero dolore!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita;
