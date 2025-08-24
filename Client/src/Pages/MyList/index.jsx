import React, { useState } from "react";

import { Button, Rating } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import MyListItem from "./MyListItem";
import AccountSidebar from "../../Components/AccountSidebar";
const MyList = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2 </span>
                products in my list
              </p>
            </div>
            <MyListItem />
            <MyListItem />
            <MyListItem />
            <MyListItem />
            <MyListItem />
            <MyListItem />
          </div>
        </div>
      </div>
    </section>

    // <section className="section py-10 pb-10">
    //   <div className="container w-[80%] max-w-[80%] flex gap-5">
    //     <div className="leftPart w-[70%] m-auto">

    //     </div>

    //   </div>
    // </section>
  );
};

export default MyList;
