import Button from "@mui/material/Button";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";

const Login = () => {
  return (
    <section className=" bg-white w-full h-full fixed top-0 left-0">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img src="/eclogo2.png" className="w-[200px]" alt="" />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
        </div>
      </header>
      <img
        src="/pattern.jpg"
        className="w-full fixed top-0 left-0 opacity-10"
        alt=""
          />
          
          <div className="loginBox card w-[45%] h-[300px] mx-auto mt-5">
              <div className="text-center">
                  <img src="" alt="" className="m-auto" />
              </div>
          </div>
    </section>
  );
};

export default Login;
