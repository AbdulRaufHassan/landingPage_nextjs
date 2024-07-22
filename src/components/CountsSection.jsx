import Image from "next/image";
import React from "react";
import CLIENTS_ICON from "@/assets/images/counter_section_img1.png";
import PROJECTS_ICON from "@/assets/images/counter_section_img2.png";
import LIKES_ICON from "@/assets/images/counter_section_img3.png";
import AWARDS_ICON from "@/assets/images/counter_section_img4.png"

function CountsSection() {
  return (
    <section className="counters_bg py-[100px]">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <div className="flex flex-col items-center">
            <Image src={CLIENTS_ICON} alt="icon" className="mb-[25px]" />
            <p className="orange-color text-[40px] leading-[50px] tracking-[1px] mb-[10px]">
              540
            </p>
            <h4 className="uppercase text-[#f3f3f3] nunito-sans text-lg tracking-[1px] font-semibold">
              clients
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <Image src={PROJECTS_ICON} alt="icon" className="mb-[25px]" />
            <p className="orange-color text-[40px] leading-[50px] tracking-[1px] mb-[10px]">
              1200
            </p>
            <h4 className="uppercase text-[#f3f3f3] nunito-sans text-lg tracking-[1px] font-semibold">
              Projects
            </h4>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <Image src={LIKES_ICON} alt="icon" className="mb-[25px]" />
            <p className="orange-color text-[40px] leading-[50px] tracking-[1px] mb-[10px]">
              2500
            </p>
            <h4 className="uppercase text-[#f3f3f3] nunito-sans text-lg tracking-[1px] font-semibold">
              likes
            </h4>
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <Image src={AWARDS_ICON} alt="icon" className="mb-[25px]" />
            <p className="orange-color text-[40px] leading-[50px] tracking-[1px] mb-[10px]">
              940
            </p>
            <h4 className="uppercase text-[#f3f3f3] nunito-sans text-lg tracking-[1px] font-semibold">
              Awards
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountsSection;
