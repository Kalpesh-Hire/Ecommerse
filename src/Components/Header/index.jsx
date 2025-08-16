import React, { useContext } from "react";
import { Link, Links } from "react-router-dom";
import Search from "../Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
function Header() {

   const context = useContext(MyContext)
      function notificationsLabel(count) {
        if (count === 0) {
          return "no notifications";
        }
        if (count > 99) {
          return "more than 99 notifications";
        }
        return `${count} notifications`;
      }
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[2px]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* text */}
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limmited time only!
              </p>
            </div>

            {/* .Links */}

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-bold transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order0tracking"
                    className="text-[13px] link font-bold transition"
                  >
                    Order tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header py-3 border-b-[2px] border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="/eclogo2.png" alt="" className="" />
            </Link>
          </div>
          <div className="col2 w-[45%] pl-10">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-lg font-[500]"
                >
                  {" "}
                  Login |
                </Link>
                <Link
                  to="/register"
                  className="link transition text-lg font-[500]"
                >
                  {" "}
                  Register
                </Link>
              </li>

              <li className="list-none">
                <Tooltip title="Compare">
                  <IconButton aria-label={notificationsLabel(100)}>
                    <Badge badgeContent={100} color="secondary">
                      <IoGitCompare />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Wishlist">
                  <IconButton aria-label={notificationsLabel(100)}>
                    <Badge badgeContent={100} color="secondary">
                      <FaRegHeart />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Cart">
                  <IconButton
                    aria-label={notificationsLabel(100)}
                    onClick={()=>context.setOpenCartPanel(true)}
                  >
                    <Badge badgeContent={100} color="secondary">
                      <MdOutlineShoppingCart />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
