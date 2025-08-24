import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import QtyBox from '../QtyBox';

const ProductDetailsComponent = () => {
      const [productActionIndex, setProductActionIndex] = useState(null);
    
  return (
    <>
      {" "}
      <h1 className="!text-[24px] font-[600] mb-2 ">
        Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for
        Women | saree | sarees
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 !text-[13px]">
          Brands:{" "}
          <span className="font-[500] text-black opacity-75">
            House of Chikankari
          </span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">Review (5)</span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
          $58.00
        </span>
        <span className="oldPrice text-primary text-[20px] font-[600]">
          $58.00
        </span>

        <span className="text-[14px]">
          Availablr in Stocks:{" "}
          <span className="text-green-600 text-[14px] font-bold">
            147 Items
          </span>
        </span>
      </div>
      <p className="mt-3 pr-15 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum
        asperiores eius, ipsa mollitia laborum hic officiis dolore vel
        repudiandae accusantium amet at illo nam voluptatibus rerum nulla autem
        deleniti numquam explicabo, expedita quas temporibus! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quaerat debitis natus tempore?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
        temporibus similique.\
      </p>
      <div className="flex items-center gap-3">
        <span className="text-[16px]"> Size:</span>
        <div className="flex items-center gap-1 actions">
          <Button
            onClick={() => setProductActionIndex(0)}
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }`}
          >
            S
          </Button>
          <Button
            onClick={() => setProductActionIndex(1)}
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }`}
          >
            M
          </Button>
          <Button
            onClick={() => setProductActionIndex(2)}
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }`}
          >
            L
          </Button>
          <Button
            onClick={() => setProductActionIndex(3)}
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }`}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="text-[14px] mt-4 mb-2 text-[#000]">
        Free Shipping(Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center mt-4 py-4 gap-4">
        <div className="qtyBoxWrapper w-[80px] ">
          <QtyBox />
        </div>

        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[22px]" />
          Add to Cart
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <FaRegHeart className="text-[18px]" />
          Add to Wishlist
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <IoGitCompareOutline className="text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
}

export default ProductDetailsComponent;