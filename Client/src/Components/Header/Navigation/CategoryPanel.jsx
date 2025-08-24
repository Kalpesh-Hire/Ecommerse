import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import "./style.css";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import CategoryCollapse from "../../CategoryCollapse";
const CategoryPanel = (props) => {
 

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />{" "}
      </h3>

      <CategoryCollapse/>
    </Box>
  );
  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
