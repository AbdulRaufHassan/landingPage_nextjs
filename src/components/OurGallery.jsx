"use client";
import React, { useEffect, useState } from "react";
import OURGALLERY_UNDERLINE from "@/assets/images/heading_underline.png";
import img1 from "@/assets/images/gallery_img1.jpg";
import img2 from "@/assets/images/gallery_img2.jpg";
import img3 from "@/assets/images/gallery_img3.jpg";
import img4 from "@/assets/images/gallery_img4.jpg";
import img5 from "@/assets/images/gallery_img5.jpg";
import img6 from "@/assets/images/gallery_img6.jpg";
import Image from "next/image";

function OurGallery() {
  const [currentGallery, setCurrentGallery] = useState(1);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
  const galleryTabs = [
    {
      tabName: "All",
      id: 1,
    },
    {
      tabName: "Lorem",
      id: 2,
    },
    {
      tabName: "Consectetur",
      id: 3,
    },
    {
      tabName: "Magna",
      id: 4,
    },
    {
      tabName: "Ipsum",
      id: 5,
    },
    {
      tabName: "Aliqua",
      id: 6,
    },
  ];
  const galleryImages = [
    {
      img: img1,
      gallery: [2, 4, 6],
    },
    {
      img: img2,
      gallery: [3, 5],
    },
    {
      img: img3,
      gallery: [2],
    },
    {
      img: img4,
      gallery: [3, 6],
    },
    {
      img: img5,
      gallery: [3, 5],
    },
    {
      img: img6,
      gallery: [4, 5, 6],
    }
  ];

  useEffect(() => {
    const filterImages =
      currentGallery !== 1
        ? galleryImages.filter((v) => v.gallery.includes(currentGallery))
        : [...galleryImages];
    setSelectedGalleryImages(filterImages);
  }, [currentGallery]);

  return (
    <section id="gallery" className="py-[100px]">
      <div className="container">
        <div className="w-full flex flex-col justify-center items-center mb-[50px]">
          <h2 className="uppercase text-[#212529] nunito-sans text-[28px] sm:text-[35px] font-semibold tracking-[1px] leading-[45px]">
            OUR Gallery
          </h2>
          <Image src={OURGALLERY_UNDERLINE} className="mt-[10px]" alt="image" />
        </div>
        <ul className="flex justify-center flex-wrap">
          {galleryTabs.map((v) => (
            <li
              key={v.id}
              className={`uppercase border-t border-b cursor-pointer nunito-sans text-[16px] font-semibold tracking-[1px] p-[5px] mb-[20px] sm:mb-[10px] mx-[15px] hover:text-[#e36937] ${
                v.id === currentGallery
                  ? "orange-color border-[#e36937]"
                  : "text-[#212529] border-[#222222]"
              }`}
              onClick={() => setCurrentGallery(v.id)}
            >
              {v.tabName}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center mt-[50px]">
          {selectedGalleryImages.map((v, i) => (
            <li key={i} className="flex items-center justify-center">
              <Image src={v.img} className="w-[97%] sm:w-[73%] lg:w-[400px] m-[2px]" alt="image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurGallery;
