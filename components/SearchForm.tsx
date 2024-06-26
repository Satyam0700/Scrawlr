"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import { Input } from "./ui/input";

const SearchForm = () => {
    const [Search, setSearch] = useState('')
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        // console.log(search)
      },300)
    
      return () => clearTimeout(delayDebounceFn)
    }, [])
    

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-my-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          alt="Search icon"
          width={32}
          height={32}
          className="absolute left-8"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:to-white-800"
          type="text"
          placeholder="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
