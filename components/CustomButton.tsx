"use client";
import { CustomButtonProps } from "@types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className=" relative h-6 w-6">
          <Image
            src={rightIcon}
            fill
            alt="rightIcon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
