import React, { useContext } from "react";
import { Link, Links } from "react-router-dom";
import Search from "../Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagCheckOutline, IoGitCompare } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
// .menu
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}
function Header() {
  const context = useContext(MyContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <div className="col2 w-[40%] pl-10">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center">
            <ul className="flex items-center justify-end gap-3 w-full">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-lg font-[500]"
                  >
                    {" "}
                    Login
                  </Link>
                  &nbsp;|&nbsp;
                  <Link
                    to="/register"
                    className="link transition text-lg font-[500]"
                  >
                    {" "}
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="myAccountWrap flex items-center gap-3 !text-[#000] cursor-pointer"
                    onClick={handleClick}
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                      <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <div className="info flex flex-col">
                      <h4 className=" leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[500] capitalize text-left justify-start mb-0">
                        Kalpesh Hire
                      </h4>
                      <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[400] lowercase text-left justify-start ">
                        kalpeshhire102050@gmail.com
                      </span>
                    </div>
                  </Button>
                  {/* . */}
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegUser className="text-[18px]" />{" "}
                        <span className="text-[14px]">My Account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoBagCheckOutline className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoMdHeartEmpty className="text-[18px]" />{" "}
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 !py-2"
                    >
                      <IoIosLogOut className="text-[18px]" />
                      <span className="text-[14px]"> Logout</span>
                    </MenuItem>
                    <Divider />
                  </Menu>
                </>
              )}

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
                    onClick={() => context.setOpenCartPanel(true)}
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
