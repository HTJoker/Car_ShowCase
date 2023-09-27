"use client";

import { SearchComapnyProps } from "@types";
import { Combobox, Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

const SearchCompany = ({ company, setCompany }: SearchComapnyProps) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className=" relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="./car-logo.svg"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(comapny: string) => comapny}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCompany;
