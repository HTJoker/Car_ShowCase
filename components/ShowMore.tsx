"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@utils";

type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
};

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", newLimit.toString());

    router.push(newPathname);
  };

  return (
    <div className="mt-10 flex w-full justify-center gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles=" bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
