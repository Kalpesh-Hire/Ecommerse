import React from "react";

const Progress = (props) => {
  return (
    <div className="w-[150px] h-[5px] overflow-hidden rounded-sm bg-[rgb(241,241,241)] ">
      <span
        className={`flex items-center w-[${props.value}%] h-[8px]  ${
          props.type === "success" && "bg-green-600"
        } ${props.type === "error" && "bg-red-600"} ${
          props.type === "warning" && "bg-orange-400"
        }`}
      ></span>
    </div>
  );
};

export default Progress;
