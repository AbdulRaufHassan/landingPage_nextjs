import React from "react";
import OURPRICING_UNDERLINE from "@/assets/images/heading_underline.png";
import Image from "next/image";

function OurPricing() {
  return (
    <section className="py-[100px] bg-[#f7f7f7]">
      <div className="container mx-auto">
        <div className="w-full flex flex-col justify-center items-center mb-[50px]">
          <h2 className="text-[#212529] nunito-sans text-[28px] sm:text-[35px] font-semibold tracking-[1px] leading-[45px]">
            OUR PRICING
          </h2>
          <Image src={OURPRICING_UNDERLINE} className="mt-[10px]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="w-full lg:w-auto flex justify-center items-center">
            <div className="flex flex-col w-[320px] lg:w-[400px] py-8 h-fit justify-center items-center bg-white">
              <h4 className="text-[#212529] nunito-sans text-lg font-semibold mb-[20px] uppercase">
                BASIC
              </h4>
              <div className="w-[150px] h-[150px] orange-bg rounded-full text-white flex flex-col items-center justify-center">
                <p className="text-[35px]">$25</p>
                <p className="text-[16px]">monthly</p>
              </div>
              <div className="flex flex-col gap-2 mt-[30px]">
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
              </div>
              <button className="mt-[25px] btn-sdw outline-none nunito-sans rounded-[7px] py-2.5 px-5 orange-bg text-white text-sm tracking-[1px] font-semibold hero-secBtn-hover">
                Book Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center items-center">
            <div className="flex flex-col w-[320px] lg:w-[400px] py-8 h-fit justify-center items-center orange-bg">
              <h4 className="text-white nunito-sans text-lg font-semibold mb-[20px] uppercase">
                BASIC
              </h4>
              <div className="w-[150px] h-[150px] bg-white orange-color rounded-full orange-color flex flex-col items-center justify-center">
                <p className="text-[35px]">$25</p>
                <p className="text-[16px]">monthly</p>
              </div>
              <div className="flex flex-col gap-2 mt-[30px] text-white">
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
              </div>
              <button className="mt-[25px] btn-sdw outline-none nunito-sans rounded-[7px] py-2.5 px-5 orange-color bg-white text-sm tracking-[1px] font-semibold hero-secBtn-hover">
                Book Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center items-center">
            <div className="flex flex-col w-[320px] lg:w-[400px] py-8 h-fit justify-center items-center bg-white">
              <h4 className="text-[#212529] nunito-sans text-lg font-semibold mb-[20px] uppercase">
                BASIC
              </h4>
              <div className="w-[150px] h-[150px] orange-bg rounded-full text-white flex flex-col items-center justify-center">
                <p className="text-[35px]">$25</p>
                <p className="text-[16px]">monthly</p>
              </div>
              <div className="flex flex-col gap-2 mt-[30px]">
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
                <p>Lorem ipsum dolor sit</p>
                <p>Eirmod tempor invidunt</p>
              </div>
              <button className="mt-[25px] btn-sdw outline-none nunito-sans rounded-[7px] py-2.5 px-5 orange-bg text-white text-sm tracking-[1px] font-semibold hero-secBtn-hover">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPricing;
