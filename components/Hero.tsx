"use client";

import { CustomButton } from "@components";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title text-center">
          Find, Book or Rent a car quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our efortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className=" hero__image-container">
        <div className="hero__image">
          <Image
            src="/assets/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
