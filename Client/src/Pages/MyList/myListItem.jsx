import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Button, Rating } from "@mui/material";

const MyListItem = (props) => {

  return (
    <div className="cartItem w-full p-2 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)] ">
      <div className="img !w-[15%] rounded-md overflow-hidden">
        <Link to="/product/123" className="group">
          <img
            src="https://www.jiomart.com/images/product/original/rvlldfqpld/axen-bags-laptop-backpack-34l-medium-laptop-backpack-water-resistance-for-office-bag-school-bag-college-bag-business-bag-unisex-travel-backpack-product-images-rvlldfqpld-0-202303010309.jpg?im=Resize=(330,410)"
            className="w-full group-hover:scale-105 transition-all "
          />
        </Link>
      </div>

      <div className="info !w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all " />
        <span className="!text-[13px]">Sangarai</span>
        <h3 className="!text-[15px]">
          <Link className="link">A-Line Bag with Sharara Duppartta</Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="Price text-[14px] font-[600]">$58.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>
          <span className="Price text-[14px] font-[600] text-primary">
            55% Off
          </span>
        </div>

        <br />
        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItem;
