import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaEyeSlash, FaRegEye, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import OtpBox from "../../../../Client/src/Components/OtpBox";

// import LoadingButton from "@mui/material/LoadingButton"
const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };
  return (
    <section className=" bg-white">
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
          <img src="/shield.png" alt="" className="m-auto h-30 w-30" />
        </div>
        <h1 className="text-center text-[35px] !font-[800] mt-4">
          Welcome Back! <br />
          Please verify your account
        </h1>
        <br />
        <p className="text-center text-[15px]">
          OTP send to{" "}
          <span className="text-primary font-bold">kalpeshire@gmail.com</span>
        </p>

        <br />
        <div className="text-center flex items-center justify-center flex-col">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>
<br />
        <div className="w-[300px] m-auto">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
