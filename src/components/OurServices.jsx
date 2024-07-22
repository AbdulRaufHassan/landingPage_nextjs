import Image from "next/image";
import React from "react";
import OURSERVICES_UNDERLINE from "@/assets/images/heading_underline.png";
import OURSERVICES_IMG1 from "@/assets/images/ourServices_img1.png";
import OURSERVICES_IMG2 from "@/assets/images/ourServices_img2.png";
import OURSERVICES_IMG3 from "@/assets/images/ourServices_img3.png";
import OURSERVICES_IMG4 from "@/assets/images/ourServices_img4.png";
import OURSERVICES_IMG5 from "@/assets/images/ourServices_img5.png";
import OURSERVICES_IMG6 from "@/assets/images/ourServices_img6.png";
import Link from "next/link";

function OurServices() {
  return (
    <section id="services" className="bg-[#f7f7f7] py-[100px]">
      <div className="container">
        <div className="w-full flex flex-col justify-center items-center mb-[50px]">
          <h2 className="text-[#212529] nunito-sans text-[28px] sm:text-[35px] font-semibold tracking-[1px] leading-[45px]">
            OUR SERVICES
          </h2>
          <Image src={OURSERVICES_UNDERLINE} className="mt-[10px]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] lg:w-fit border-b border-[#eeeeee] flex flex-col items-center pb-[40px]">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%] uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              SECURITY SERVICES
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG1} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] lg:w-fit border-b border-[#eeeeee] flex flex-col items-center pb-[40px]">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%] uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              ONLINE MARKETING
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG2} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] lg:w-fit border-b border-[#eeeeee] flex flex-col items-center pb-[40px]">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%]uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              MERCHANT PROCESSING
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG3} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] border-b border-[#eeeeee] lg:border-none lg:w-fit lg:mt-[30px] flex flex-col items-center pb-[40px] lg:pb-0">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%] uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              BUSINESS STRATEGY
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG4} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] border-b border-[#eeeeee] lg:border-none lg:w-fit lg:mt-[30px] flex flex-col items-center pb-[40px] lg:pb-0">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%] uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              CUSTOM SERVICES
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG5} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[99%] sm:w-[340px] border-b border-[#eeeeee] lg:border-none lg:w-fit lg:mt-[30px] flex flex-col items-center pb-[40px] lg:pb-0">
            <Link
              href="#"
              className="whitespace-nowrap w-full lg:w-[74%] uppercase text-[#212529] mb-[15px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
            >
              BUSINESS SOLUTIONS
            </Link>
            <div className="flex items-center justify-start lg:justify-center">
              <Image src={OURSERVICES_IMG6} className="mr-[20px]" />
              <p className="w-3/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                phasellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
