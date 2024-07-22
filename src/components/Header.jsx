import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LOGO from "@/assets/images/logo.png";
import HAMBURGER_ICON from "@/assets/images/hamBurger_menuIcon.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 right-0 z-50 w-full bg-white py-3 ${
        show ? "hidden" : "flex"
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`flex ${
            isMenuOpen && "flex-col"
          } md:flex-row items-center justify-between lg:pl-[5%]`}
        >
          <div className="flex justify-between w-full">
            <Image src={LOGO} alt="logo" />
            <button
              className="block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={HAMBURGER_ICON} alt="icon" />
            </button>
          </div>
          <nav className={`${isMenuOpen ? "flex" : "hidden"} md:block`}>
            <ul
              className={`flex ${isMenuOpen && "flex-col gap-4"}  md:flex-row`}
            >
              <li className="menu">
                <Link href="#home" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="menu">
                <Link href="#about" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="menu">
                <Link href="#services" className="nav-link">
                  SERVICES
                </Link>
              </li>
              <li className="menu">
                <Link href="#features" className="nav-link">
                  FEATURES
                </Link>
              </li>
              <li className="menu">
                <Link href="#gallery" className="nav-link">
                  GALLERY
                </Link>
              </li>
             
              <li className="menu">
                <Link href="#" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
