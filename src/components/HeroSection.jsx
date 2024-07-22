import React from "react";

function HeroSection() {
  return (
    <section id="home" className="heroSection w-full h-[39rem] bg-slate-900 px-[70px] relative">
      <div className="container">
        {/* <iframe
        className="absolute top-1 right-1"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/frUM7On3baU?si=sN7H2jNo76xJmGEb?autoplay=1&loop=1&autopause=0&muted=1"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        
        ></iframe> */}
        <div className="flex flex-col items-center justify-center w-full lg:w-4/6 mx-auto z-50">
          <p className="poppins-font text-center orange-color text-lg leading-[28px] font-medium tracking-[.19em] capitalize mb-[5px]">
            LOREM IPSUM DOLOR
          </p>
          <h1 className="nunito-sans text-center whiteSmoke-color text-5xl leading-[68px] tracking-[.0625em] font-semibold mb-5">
            CREATIVE AGENCY
          </h1>
          <p className="text-[#f3f3f3] tracking-[.0625em] text-center text-[15px] font-medium poppins-font mb-[30px]">
            Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
            lacinia ultrices. commodo tristique. Duis lacus urna, condimentum a
            vehicula a, hendrerit ac nisi lorem ipsum dolor sit amet vulputate
          </p>
          <button className="outline-none nunito-sans rounded-[7px] py-2.5 px-5 orange-bg text-white text-sm tracking-[1px] font-semibold hero-secBtn-hover">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
