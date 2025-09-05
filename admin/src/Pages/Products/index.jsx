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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Products = () => {
  const [categoryFilterVal, setcategoryFilterVal] = useState("");
  const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

  const context = useContext(MyContext);
  return (
    <>
      <div className="flex items-center justify-between px-5 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Products</h2>

        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
          <Button className="btn !bg-green-600 !text-white btn-sm">
            {" "}
            Export
          </Button>
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Products",
              })
            }
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5  shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between">
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

          <div className="col w-[20%] ml-auto">
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

export default Products;
