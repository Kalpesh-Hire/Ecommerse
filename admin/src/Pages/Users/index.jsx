import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import TooltipMUI from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { FaPlus, FaRegEye } from "react-icons/fa";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";
import { MdLocalPhone, MdOutlineMarkEmailRead } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Users = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="card my-4 pt-5  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between">
          <div className="col w-[20%]">
            <h2 className="font-[600] text-[18px]  mb-2">Users List</h2>
          </div>

          <div className="col w-[40%] ml-auto">
            <SearchBox />
          </div>
        </div>

        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="!text-xs text-gray-700 !uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 pr-0 py-3" width="10%">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="px-0 py-3 whitespace-nowrap">
                  User Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Email
                </th>

                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Phome No
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Created Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[45px]">
                    <div className="img w-full rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPPJeKqMFiZdty1MgpNIUzPE0NYsz0Y0NA&s"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Kalpesh Hire</td>
                <td className="px-6 py-2">
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    kalpeshhire102050@gmail.com
                  </span>
                </td>
                <td className="px-6 py-2">
                  {" "}
                  <span className="flex items-center gap-2">
                    <MdLocalPhone />
                    9767777200
                  </span>
                </td>
                <td className="px-6 py-2">
                  {" "}
                  <span className="flex items-center gap-2">
                    <SlCalender />
                    12-01-2025
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default Users;
