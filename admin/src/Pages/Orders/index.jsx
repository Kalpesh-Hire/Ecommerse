import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge";
import SearchBox from '../../Components/SearchBox';
const Orders = () => {
      const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
      const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
          setIsOpenOrderProduct(null);
        } else {
          setIsOpenOrderProduct(index);
        }
      };
  return (
    <div className="card my-4  shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between px-3 py-5">
        <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        <div className="w-[40%]"> <SearchBox/> </div>
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
                  H No222 Street No 6 Adrash Nagar Delhi newar Shivam medical ph
                  976t7777200
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
                  H No222 Street No 6 Adrash Nagar Delhi newar Shivam medical ph
                  976t7777200
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
  );
}

export default Orders