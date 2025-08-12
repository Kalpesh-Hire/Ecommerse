import React from 'react'
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
const CategoryCollapse = () => {
      const [submenuIndex, setSubmenuIndex] = React.useState(null);
      const [innersubmenuIndex, setInnerSubmenuIndex] = React.useState(null);
    
      const opensubmenu = (index) => {
        if (submenuIndex === index) {
          setSubmenuIndex(null);
        } else {
          setSubmenuIndex(index);
        }
      };
      const innseropensubmenu = (index) => {
        if (innersubmenuIndex === index) {
          setInnerSubmenuIndex(null);
        } else {
          setInnerSubmenuIndex(index);
        }
      };
  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className=" w-full ">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              fashion
            </Button>
          </Link>
          {submenuIndex === 0 ? (
            <FiMinusSquare
              onClick={() => opensubmenu(0)}
              className="absolute top-[10px] right-[15px] cursor-pointer "
            />
          ) : (
            <FaRegSquarePlus
              onClick={() => opensubmenu(0)}
              className="absolute top-[10px] right-[15px] cursor-pointer "
            />
          )}

          {/* . */}
          {submenuIndex === 0 && (
            <ul className="submenu  w-full pl-3 ">
              <li className="list-none relative">
                <Link to="/" className=" w-full ">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innersubmenuIndex === 0 ? (
                  <FiMinusSquare
                    onClick={() => innseropensubmenu(0)}
                    className="absolute top-[10px] right-[15px] cursor-pointer "
                  />
                ) : (
                  <FaRegSquarePlus
                    onClick={() => innseropensubmenu(0)}
                    className="absolute top-[10px] right-[15px] cursor-pointer "
                  />
                )}
                {/* .. */}
                {innersubmenuIndex === 0 && (
                  <ul className="inner_submenu  w-full pl-3 ">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        {/* 1 */}
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className=" w-full ">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              fashion
            </Button>
          </Link>
          {submenuIndex === 1 ? (
            <FiMinusSquare
              onClick={() => opensubmenu(1)}
              className="absolute top-[10px] right-[15px] cursor-pointer "
            />
          ) : (
            <FaRegSquarePlus
              onClick={() => opensubmenu(1)}
              className="absolute top-[10px] right-[15px] cursor-pointer "
            />
          )}

          {/* .1 */}
          {submenuIndex === 1 && (
            <ul className="submenu w-full pl-3 ">
              <li className="list-none relative">
                <Link to="/" className=" w-full ">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innersubmenuIndex === 1 ? (
                  <FiMinusSquare
                    onClick={() => innseropensubmenu(1)}
                    className="absolute top-[10px] right-[15px] cursor-pointer "
                  />
                ) : (
                  <FaRegSquarePlus
                    onClick={() => innseropensubmenu(1)}
                    className="absolute top-[10px] right-[15px] cursor-pointer "
                  />
                )}
                {/* .. */}
                {innersubmenuIndex === 1 && (
                  <ul className="inner_submenu  w-full pl-3 ">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Smart Phone
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition !text-[14px]"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CategoryCollapse