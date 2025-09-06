import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import React, { createContext, useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import AddProducts from "./Pages/Products/addProducts";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import HomeSliderBanner from "./Pages/HomeSliderBanners.jsx";
import AddHomeSlide from "./Pages/HomeSliderBanners.jsx/addHomeSlide.jsx";
import CategoryList from "./Pages/Category/index.jsx";
import AddCategory from "./Pages/Category/addCategory.jsx";
import SubCategoryList from "./Pages/Category/subCatList.jsx";
import AddSubCategory from "./Pages/Category/addSubCategory.jsx";
import Users from "./Pages/Users/index.jsx";
import Orders from "./Pages/Orders/index.jsx";
import ForgotPassword from "./Pages/forgotPassword/index.jsx";
import VerifyAccount from "./Pages/Verify/index.jsx";
import ChangePassword from "./Pages/ChangePassowrd/index.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <Dashboard />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/forgot-password",
      exact: true,
      element: (
        <>
          <ForgotPassword />
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/verify",
      exact: true,
      element: (
        <>
          <VerifyAccount />
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/change-password",
      exact: true,
      element: (
        <>
          <ChangePassword />
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/products",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <Products />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },

    {
      path: "/homeSlider/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <HomeSliderBanner />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/category/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <CategoryList />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },

    {
      path: "/subcategory/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <SubCategoryList />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/users",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <Users />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
    {
      path: "/orders",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={` overflow-hidden sidebarWrapper ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } transition-all `}
              >
                <Orders />
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
  ]);

  const values = {
    setIsSidebarOpen,
    isSidebarOpen,
    isLogin,
    setIsLogin,
    setIsOpenFullScreenPanel,
    isOpenFullScreenPanel,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({ open: false })}
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({ open: false })}
                aria-label="close"
              >
                <IoMdClose className="text-gray-800" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-800">
                  {" "}
                  {isOpenFullScreenPanel.model}
                </span>
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({ open: false })}
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
          {isOpenFullScreenPanel.model === "Add Products" && <AddProducts />}
          {isOpenFullScreenPanel.model === "Add Home Slide" && <AddHomeSlide />}
          {isOpenFullScreenPanel.model === "Add New Category" && (
            <AddCategory />
          )}
          {isOpenFullScreenPanel.model === "Add New Sub Category" && (
            <AddSubCategory />
          )}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
