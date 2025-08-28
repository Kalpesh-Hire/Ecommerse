import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createContext } from "react";

function App() {
  const MyContext = createContext()

  const router = createBrowserRouter([
    {
      path: "/",
      exact:true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div className="sidebarWrapper w-[18%]">
                <Sidebar/>
              </div>
              <div className="contentRight py-4 px-5 w-[80%] ">
                <Dashboard/>
              </div>
            </div>
          </section>
          {/* <Dashboard /> */}
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
