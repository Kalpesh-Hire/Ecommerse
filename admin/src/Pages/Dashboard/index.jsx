import React, { useState, PureComponent } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import Button from "@mui/material/Button";
import { FaPlus, FaRegEye } from "react-icons/fa";
// import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import TooltipMUI from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BiExport } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const [categoryFilterVal, setcategoryFilterVal] = useState("");

 const [chart1Data, setChart1Data] = useState([
   {
     name: "JAN",
     TotalSales: 3210,
     TotalUsers: 1850,
     amt: 2400,
   },
   {
     name: "FEB",
     TotalSales: 1570,
     TotalUsers: 920,
     amt: 2400,
   },
   {
     name: "MAR",
     TotalSales: 2890,
     TotalUsers: 1340,
     amt: 2400,
   },
   {
     name: "APR",
     TotalSales: 4320,
     TotalUsers: 2100,
     amt: 2400,
   },
   {
     name: "MAY",
     TotalSales: 3780,
     TotalUsers: 2750,
     amt: 2400,
   },
   {
     name: "JUN",
     TotalSales: 1980,
     TotalUsers: 1620,
     amt: 2400,
   },
   {
     name: "JUL",
     TotalSales: 4500,
     TotalUsers: 2400,
     amt: 2400,
   },
   {
     name: "AUG",
     TotalSales: 2750,
     TotalUsers: 1950,
     amt: 2400,
   },
   {
     name: "SEP",
     TotalSales: 3100,
     TotalUsers: 2200,
     amt: 2400,
   },
   {
     name: "OCT",
     TotalSales: 2300,
     TotalUsers: 1780,
     amt: 2400,
   },
   {
     name: "NOV",
     TotalSales: 3400,
     TotalUsers: 2050,
     amt: 2400,
   },
   {
     name: "DEC",
     TotalSales: 3900,
     TotalUsers: 2500,
     amt: 2400,
   },
 ]);


  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  return (
    <>
      <div className="w-full py-4 p-5 bg-[#f1faff] border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] !font-bold leading-10 mb-3">
            Good Morning, <br />
            Kalpesh
          </h1>
          <p>
            Here's What happening on your store today. See statistics at once
          </p>
          <br />
          <Button className="btn-blue !capitalize">
            {" "}
            <FaPlus /> Add Product
          </Button>
        </div>

        <img src="/20943816.jpg" className="w-[250px]" alt="" />
      </div>
      <DashboardBoxes />

      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Products</h2>
        </div>
        <div className="flex items-center w-full pl-5 justify-between pr-5">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px]  mb-2">Category by</h4>
            <Select
              className="w-full"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col w-[25%] ml-auto flex items-center gap-3">
            <Button className="btn !bg-green-600 !text-white btn-sm flex items-center">
              {" "}
              Export
            </Button>
            <Button className="btn-blue !text-white btn-sm">Add Product</Button>
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
                  Product
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sub Category
                </th>

                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Action
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
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-0 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-0 py-2">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group ">
                      <Link to="/product/451221">
                        <img
                          src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                          className=" w-full group-hover:scale-105 transition-all "
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary ">
                        <Link to="/product/451221">
                          VNEED Women Embroidered Rayom Kutra Pant Set | Kurta
                          set for women
                        </Link>
                      </h3>
                      <p className="text-[12px]">Cloths</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2">Electronics</td>
                <td className="px-6 py-2">Women</td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span
                      className="oldPrice line-through leading-3
                     text-gray-500 text-[14px] font-[500]"
                    >
                      $59.00
                    </span>
                    <span className="price text-primary text-[14px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600] px-1">234</span>sale
                  </p>
                  <Progress value={10} type="warning" />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <TooltipMUI title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                    <TooltipMUI title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] ">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </TooltipMUI>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      {/* .......................................................... */}
      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-3 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>
        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="!text-xs text-gray-700 !uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Button
                    onClick={() => isShowOrderProduct(0)}
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {isOpenOrderProduct === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </th>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    675143d9914a0b1234672b61
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    pay_PTP0qExhrboQ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">KALPESH HIRE</td>
                <td className="px-6 py-4">9767777200</td>
                <td className="px-6 py-4">
                  <span className="block w-[300px]">
                    H No222 Street No 6 Adrash Nagar Delhi newar Shivam medical
                    ph 976t7777200
                  </span>
                </td>
                <td className="px-6 py-4">431151</td>
                <td className="px-6 py-4">3200</td>
                <td className="px-6 py-4">kalpesh102050@gmail.com</td>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    77e1242d3bc4a19432ab
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge status="delivered" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2025-12-04</td>
              </tr>
              {/* .............................................................. */}
              {isOpenOrderProduct === 0 && (
                <tr>
                  <td className="bg-[#f1f1f1] pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="!text-xs text-gray-700 !uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675143d9914a0b1234672b61
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-line Kutri with Sharaa & Du....
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                                className=" w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675143d9914a0b1234672b61
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-line Kutri with Sharaa & Du....
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                                className=" w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* 2nd */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Button
                    onClick={() => isShowOrderProduct(1)}
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {isOpenOrderProduct === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </th>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    675143d9914a0b1234672b61
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    pay_PTP0qExhrboQ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">KALPESH HIRE</td>
                <td className="px-6 py-4">9767777200</td>
                <td className="px-6 py-4">
                  <span className="block w-[300px]">
                    H No222 Street No 6 Adrash Nagar Delhi newar Shivam medical
                    ph 976t7777200
                  </span>
                </td>
                <td className="px-6 py-4">431151</td>
                <td className="px-6 py-4">3200</td>
                <td className="px-6 py-4">kalpesh102050@gmail.com</td>
                <td className="px-6 py-4">
                  <span className="text-primary font-[600]">
                    77e1242d3bc4a19432ab
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge status="delivered" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2025-12-04</td>
              </tr>
              {/* .............................................................. */}
              {isOpenOrderProduct === 1 && (
                <tr>
                  <td className="bg-[#f1f1f1] pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="!text-xs text-gray-700 !uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675143d9914a0b1234672b61
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-line Kutri with Sharaa & Du....
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                                className=" w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                675143d9914a0b1234672b61
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              A-line Kutri with Sharaa & Du....
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                                className=" w-[40px] h-[40px] object-cover rounded-md "
                              />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                            <td className="px-6 py-4 font-[500]">1300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card my-4  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
        </div>

        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-green-600"></span>
            Total Users
          </span>
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-primary"></span>
            Total Sales
          </span>
        </div>
        <LineChart
          width={1000}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalSales"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="TotalUsers" strokeWidth={2} stroke="#82ca9d" />
        </LineChart>
      </div>
    </>
  );
};

export default Dashboard;
