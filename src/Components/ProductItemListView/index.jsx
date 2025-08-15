import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import { MdOutlineShoppingCart, MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden flex items-center">
      <div className="imgWrapper group w-[25%] h-[220px] overflow-hidden rounded-md relative">
        <div className="img h-[220px] overflow-hidden">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnob-YOPe1LHEuFVW66rE1eibglqmLVJXxP6UFxAb7yTQRsYUwXKXYk1pdXDpmqJhRQexe6YES-TbQTjRRGbCIPTKCXZSab8A7b4M0o_bxcPx3W0-9w90p"
            className="w-full"
          />
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2bmZ6cfEv1ewopqAquoVvLgCYjfp9PCD1Kiiff4aZe1FjpB2LtzgBy7izjZYWqwic4G7oquGyassKYVkq1-WVQtwSA6HIBopxCpf8ypyC0PtHZyvtiX2Oqw"
            className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>

        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded -lg p-1 text-[12px] font-[500]">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[80px] transition-all duration-600 group-hover:top-[10px] opacity-0 group-hover:opacity-100  ">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white ">
            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white ">
            <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white ">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5 px-8  w-[75%]">
        <h6 className="text-[13px] !font-[400]  ">
          {" "}
          <Link to="/" className="link transition-all">
            {" "}
            Soylent Green
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3 mb-3 font-[500] text-[#000] ">
          {" "}
          <Link to="/" className="link transition-all">
            Siril Georgette Pink Color Saree with Pieces
          </Link>
        </h3>

        <p className="text-[14px] mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          excepturi itaque nihil laborum minus ullam provident accusantium
          recusandae culpa ipsam? Animi, velit voluptates.
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="oldPrice text-primary text-[15px] font-[600]">
            $58.00
          </span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2">
            {" "}
            <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
