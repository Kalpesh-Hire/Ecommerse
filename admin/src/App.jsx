import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createContext, useState } from "react";
import Login from "./Pages/Login";

const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

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
          <Login/>
          {/* <Dashboard /> */}
        </>
      ),
    },
  ]);

  const values = {
    setIsSidebarOpen,
    isSidebarOpen,
    isLogin,
    setIsLogin
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
