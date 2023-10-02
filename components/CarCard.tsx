"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@types";
import { calculateCarRent, generateCarImageUrl } from "@utils";
import { CarDetails, CustomButton } from "@components";

type CarCardProps = {
  car: CarProps;
};

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, make, transmission, year, model, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className=" car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className=" mt-6 flex text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className=" relative my-3 h-40 w-full object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          alt="car model"
          className="object-contain"
        />
      </div>
      <div className=" relative mt-2 flex w-full">
        <div className="flex w-full justify-between text-gray-900 group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="sterring wheel"
            />
            <p className="text-[14px] font-semibold">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] font-semibold">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="sterring wheel" />
            <p className="text-[14px] font-semibold">{city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container ">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] font-semibold leading-[17px]"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closedModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
