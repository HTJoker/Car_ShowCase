"use client";

import { SearchComapnyProps } from "@types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { manufacturers } from "@constants/constants";
import Image from "next/image";

const SearchCompany = ({ company, setCompany }: SearchComapnyProps) => {
  const [query, setQuery] = useState("");

  const filteredCompanies =
    query === ""
      ? manufacturers
      : manufacturers.filter((company) =>
          company
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={company} onChange={setCompany}>
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
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredCompanies.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `search-manufacturer__option relative ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCompany;
