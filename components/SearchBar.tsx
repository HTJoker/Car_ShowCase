"use client";
import { SearchCompany } from "@components";
import { useState } from "react";

const SearchBar = () => {
  const [company, setCompany] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchCompany company={company} setCompany={setCompany} />
      </div>
    </form>
  );
};

export default SearchBar;
