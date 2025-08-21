import React from "react";
import { FaCloudUploadAlt, FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md">
            <div className="w-full p-3 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPPJeKqMFiZdty1MgpNIUzPE0NYsz0Y0NA&s"
                  className="w-full h-full"
                />

                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center !cursor-pointer opacity-0 transition-all group-hover:opacity-100 ">
                  <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <h3>Kalpesh Hire</h3>
              <h6>kalpeshhire102050@gmail.com</h6>
            </div>

            <ul className="list-none pb-5 bg-[#f1f1f1]">
              <li className="w-full">
                <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  {" "}
                  <FaRegUser className="text-[16px]" /> My Profile{" "}
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  {" "}
                  <IoBagCheckOutline className="text-[18px]" /> My List{" "}
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  {" "}
                  <IoMdHeartEmpty className="!text-[18px]" /> My Order{" "}
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                  {" "}
                  <IoIosLogOut className="text-[18px]" /> Logout{" "}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
