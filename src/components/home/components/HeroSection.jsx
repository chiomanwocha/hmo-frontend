/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import arrowRight from "../../../assets/svgs/arrow-right.svg";
import people from "../../../assets/images/people.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center pt-12 md:pt-28 px-8 md:px-24 bg-white-100 pb-20">
      <div className="text-center md:text-start">
        <h2 className="font-bold text-[30px] md:text-[56px] lg:text-[64px] leading-[32px] md:leading-[64px] text-black-100 mb-5">
          Show Them Don’t Just Tell
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[28px] mb-12">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="w-full lg:w-fit px-6 justify-center bg-primary-dark-blue  text-white-100 flex gap-3 items-center rounded-[8px] py-3 md:py-5">
          <p>Install HelpMeOut</p>
          <img src={arrowRight} alt="right arrow icon" />
        </button>
      </div>
      <div className="lg:max-w-[50vw] mt-12 lg:mt-0">
        <img src={people} alt="group of people communicating, hero section" />
      </div>
    </div>
  );
};

export default HeroSection;
