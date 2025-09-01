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
const SignUp = () => {
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
          <img src="/logo.png" alt="" className="m-auto h-30 w-30" />
        </div>
        <h1 className="text-center text-[35px] !font-[800] mt-4">
          Join us today! Get special
          <br />
          benefits and stay up-to-date
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-5">
          <Button
            size="small"
            onClick={handleClickGoogle}
            endIcon={<FcGoogle />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !py-2 !text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]"
          >
            Signin with Google
          </Button>
          <Button
            size="small"
            onClick={handleClickfb}
            endIcon={<BsFacebook />}
            loading={loadingfb}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !py-2 !text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]"
          >
            Signin with Facebook
          </Button>
        </div>
        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[14px] font-[500]">
            Or, Sign in with your email
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <br />
        <form action="" className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Full Name</h4>
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.8)] focus:outline-none px-3 "
              name=""
              id=""
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.8)] focus:outline-none px-3 "
              name=""
              id=""
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.8)] focus:outline-none px-3 "
                name=""
                id=""
              />

              <Button
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600"
              >
                {isPasswordShow === false ? (
                  <FaEyeSlash className="text-[18px]" />
                ) : (
                  <FaRegEye className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              className="!text-[10px]"
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />

            <Link
              to="/forgot-password"
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Forgot Password
            </Link>
          </div>

          <Button className="btn-blue btn-lg w-full">Sign In</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
