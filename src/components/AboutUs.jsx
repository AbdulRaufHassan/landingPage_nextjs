import React from "react";
import BRANDING_ICON from "@/assets/images/aboutSec_icon1.png";
import MARKETING_ICON from "@/assets/images/aboutSec_icon2.png";
import PROMOTION_ICON from "@/assets/images/aboutSec_icon3.png";
import RIGHTSIDE_IMG from "@/assets/images/aboutSec_img.jpg";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section id="about" className="py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full order-2 xl:order-1 mt-[15px] xl:mt-0 flex items-center justify-center xl:justify-end xl:mr-[4%] box-border h-full">
            <div className="bg-[#f5f5f5] p-[30px] flex flex-col max-w-full md:max-w-[43rem] xl:max-w-[500px]">
              <div className="flex flex-col border-l-[5px] border-[#e36937] pl-[20px]">
                <p className="text-[#212529] text-base font-normal leading-[26px] tracking-[1px] uppercase">
                  VEHICULA HENDRERIT
                </p>
                <h3 className="uppercase text-[#212529] nunito-sans text-[26px] font-semibold tracking-[1px] leading-9">
                  WHAT WE ARE DOING
                </h3>
              </div>
              <p className="pt-[15px]">
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices. Duis lacus urna, condimentum a, hendrerit ac
                nisi lorem ipsum dolor sit amet vulputate condimentum a vehicula
              </p>
              <p className="pt-[15px]">
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices. commodo tristique. Duis lacus urna,
                condimentum a vehicula
              </p>
              <div className="pt-[20px] flex flex-col md:flex-row justify-between orange-color text-[14px] font-semibold leading-6 tracking-[1px]">
                <span className="flex items-center mt-[15px] md:mt-0">
                  <Image src={BRANDING_ICON} />
                  <Link className="uppercase ml-[10px]" href="#">
                    BRANDING
                  </Link>
                </span>
                <span className="flex items-center mt-[15px] md:mt-0">
                  <Image src={MARKETING_ICON} />
                  <Link className="uppercase ml-[10px]" href="#">
                    MARKETING
                  </Link>
                </span>
                <span className="flex items-center mt-[15px] md:mt-0">
                  <Image src={PROMOTION_ICON} />
                  <Link className="uppercase ml-[10px]" href="#">
                    PROMOTION
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full order-1 xl:order-2 flex items-center justify-center xl:justify-start xl:ml-[4%] box-border h-full">
            <Image
              src={RIGHTSIDE_IMG}
              className="max-w-full md:max-w-[43rem] xl:min-h-full xl:max-w-[500px]  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
