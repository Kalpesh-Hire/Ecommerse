import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaEyeSlash, FaRegEye, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// import LoadingButton from "@mui/material/LoadingButton"
const ForgotPassword = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingfb, setLoadingfb] = useState(false);

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickfb() {
    setLoadingfb(true);
  }
  return (
    <section className=" bg-white w-full h-[100vh]">
      <header className="w-full fixed px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img src="/eclogo2.png" className="w-[200px]" alt="" />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/pattern.jpg"
        className="w-full fixed top-0 left-0 opacity-10"
        alt=""
      />

      <div className="loginBox card w-[45%] !h-[auto] pb-25 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="/logo.png" alt="" className="m-auto h-30 w-30" />
        </div>
        <h1 className="text-center text-[35px] !font-[800] mt-4">
          Having trouble to sign in? <br />
          Reset your password.
        </h1>

        <br />
        <form action="" className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.8)] focus:outline-none px-3 "
              name=""
              id=""
            />
          </div>

          <Button className="btn-blue btn-lg w-full">Reset Password</Button>
          <br />
          <br />
          <div className="text-center flex items-center justify-center gap-4">
            <span>Don't want to reset?</span>
            <Link
              to="login"
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
