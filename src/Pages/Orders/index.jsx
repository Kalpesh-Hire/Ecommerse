import React from 'react'
import AccountSidebar from '../../Components/AccountSidebar';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';

const Orders = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2 </span>
                orders
              </p>
              {/* . */}
              <div class="relative overflow-x-auto mt-5 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="!text-xs text-gray-700 !uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]">
                          <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        </Button>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Order Id
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Payment Id
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Total Amount
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                        User Id
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Order Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders