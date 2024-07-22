import React from "react";
import OURFEATURES_UNDERLINE from "@/assets/images/heading_underline.png";
import OURFEATURES_LEFTSIDEIMG from "@/assets/images/ourFeatures_sec_leftImg.png";
import OURFEATURES_IMG1 from "@/assets/images/ourFeatures_sec_img1.png";
import OURFEATURES_IMG2 from "@/assets/images/ourFeatures_sec_img2.png";
import OURFEATURES_IMG3 from "@/assets/images/ourFeatures_sec_img3.png";
import OURFEATURES_IMG4 from "@/assets/images/ourFeatures_sec_img4.png";
import Image from "next/image";
import Link from "next/link";

function OurFeatures() {
  return (
    <section id="features" className="py-[100px]">
      <div className="container">
        <div className="w-full flex flex-col justify-center items-center mb-[50px]">
          <h2 className="text-[#212529] nunito-sans text-[28px] sm:text-[35px] font-semibold tracking-[1px] leading-[45px]">
            OUR FEATURES
          </h2>
          <Image src={OURFEATURES_UNDERLINE} className="mt-[10px]" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full flex items-center justify-center xl:justify-start xl:ml-[4%] box-border h-full">
            <Image
              src={OURFEATURES_LEFTSIDEIMG}
              className="max-w-full md:max-w-[43rem] xl:min-h-full xl:max-w-[500px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col items-center mt-[30px]">
            <div className="flex items-center">
              <Image src={OURFEATURES_IMG1} className="w-[110px] mr-2" />
              <div className="flex flex-col">
                <Link
                  href="#"
                  className="text-[#212529] uppercase mb-[10px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
                >
                  BUSINESS ANALYSIS
                </Link>
                <p className="w-[100%] xl:w-[70%]">
                  Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                  magna lacinia ultrices
                </p>
              </div>
            </div>
            <div className="mt-[30px] flex items-center">
              <Image
                src={OURFEATURES_IMG2}
                className="w-[110px] mr-2 xl:mr-4"
              />
              <div className="flex flex-col">
                <Link
                  href="#"
                  className="text-[#212529] uppercase mb-[10px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
                >
                  FINANCIAL ACTIVITY
                </Link>
                <p className="w-[100%] xl:w-[70%]">
                  Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                  magna lacinia ultrices
                </p>
              </div>
            </div>
            <div className="mt-[30px] flex items-center">
              <Image
                src={OURFEATURES_IMG3}
                className="w-[110px] mr-2 xl:mr-4"
              />
              <div className="flex flex-col">
                <Link
                  href="#"
                  className="text-[#212529] uppercase mb-[10px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
                >
                  DYNAMIC IN NATURE
                </Link>
                <p className="w-[100%] xl:w-[70%]">
                  Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                  magna lacinia ultrices
                </p>
              </div>
            </div>
            <div className="mt-[30px] flex items-center">
              <Image
                src={OURFEATURES_IMG4}
                className="w-[110px] mr-2 xl:mr-4"
              />
              <div className="flex flex-col">
                <Link
                  href="#"
                  className="text-[#212529] uppercase mb-[10px] nunito-sans text-lg font-semibold tracking-[1px] leading-7"
                >
                  24/7 SUPPORT
                </Link>
                <p className="w-[100%] xl:w-[70%]">
                  Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                  magna lacinia ultrices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
