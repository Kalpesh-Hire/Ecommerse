import React from 'react'
import "./Style.css"
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className="searchBox w-[100%] h-13 bg-gray-100 rounded-lg relative p-2">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-9 focus:outline-none bg-inherit p-2 text-sm"
      />
      <Button className="!absolute top-2 right-1 z-50 w-9 !min-w-10 h-9 !rounded-full !text-black">
        <IoSearchSharp className='text-gray-700 text-lg' />
      </Button>
    </div>
  );
}

export default Search