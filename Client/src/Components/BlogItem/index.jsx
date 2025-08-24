import React from "react";
import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://newbreak.church/nitropack_static/HGpYAcRHhxqRxOGuCOYzvLFhPQWoSGrx/assets/images/optimized/rev-cf5f49c/newbreak.church/wp-content/uploads/2025/06/49mgg4ivrvs-1000x563.jpg"
          alt="blogImg "
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1 "
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" /> 5 APRIL 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-[16px] font-[600] text-black ">
          <Link className="link" to="/">
            Lorem ipsum dolor sit amet, consectetur
          </Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptates eius eaque molestias illum aliquam. Culpa!.....
        </p>
        <Link
          to=""
          className="link font-[500] text-[14px] flex items-center gap-1"
        >
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
