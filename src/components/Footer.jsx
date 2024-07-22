import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ml-2 sm:ml-0">
          <div>
            <h4 className="uppercase mb-[15px] nunito-sans text-lg font-semibold text-[#212529]">
              ABOUT US
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra efficitur diam vel sagittis ipsum molestie.
            </p>
            <div className="flex gap-4 mt-[20px]">
              <FaFacebook size={35} className="text-blue-950" />
              <AiFillTwitterCircle size={40} className="text-blue-400" />
              <FaGooglePlus size={35} className="text-orange-700" />
              <FaLinkedin size={35} className="text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="mt-[30px] md:mt-0 uppercase mb-[15px] nunito-sans text-lg font-semibold text-[#212529]">
              Latest Posts
            </h4>
            <div className="flex items-center mb-[20px]">
              <Image
                src="https://fourdinos.in/demo/lpf/agency/video/images/80x80x7.png"
                width={80}
                height={80}
                className="object-cover"
              />
              <div className="flex flex-col ml-4">
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className="orange-color mt-[10px] text-sm font-semibold">
                  24th Jun 2018
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="https://fourdinos.in/demo/lpf/agency/video/images/80x80x8.png"
                width={80}
                height={80}
                className="object-cover"
              />
              <div className="flex flex-col ml-4">
                <p>Lorem ipsum dolor sit amet, adipiscing</p>
                <p className="orange-color mt-[10px] text-sm font-semibold">
                  24th Jun 2018
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mt-[30px] md:mb-0 uppercase mb-[15px] nunito-sans text-lg font-semibold text-[#212529]">
              CONTACT US
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center">
                <MdLocationOn size={30} className="orange-color" />
                <address>485, Park Town, Newyork, USA</address>
              </li>
              <li className="flex items-center">
                <MdMail size={28} className="orange-color" />
                <p className="ml-2">mailid@domain.com</p>
              </li>
              <li className="flex items-center">
                <FaLink size={30} className="orange-color" />
                <p className="ml-2">example@website.com</p>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt size={25} className="orange-color" />
                <p className="ml-2">+014-457-5457</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mt-[30px] uppercase mb-[15px] nunito-sans text-lg font-semibold text-[#212529]">
              NEWSLETTER
            </h4>
            <input
              type="text"
              className="footerInput block"
              placeholder="Enter Your Email"
            />
            <button className="block mt-[25px] outline-none nunito-sans rounded-[7px] py-2.5 px-5 orange-bg text-white text-sm tracking-[1px] font-semibold hero-secBtn-hover">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
