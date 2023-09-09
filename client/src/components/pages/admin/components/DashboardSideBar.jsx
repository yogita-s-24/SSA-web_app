import React from "react";
import { FcPlus } from "react-icons/fc";

function DashboardSideBar() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl">Sections</h1>
      <div className=" my-10 flex flex-row justify-around md:mx-8 md:flex-col">
        <div className=" cursor-pointer rounded-sm border-[.1rem] border-transparent px-3 py-2 shadow-sm shadow-blue-100  transition-all duration-200 ease-in  hover:border-blue-300 hover:shadow-md hover:shadow-blue-200 md:my-4">
          <span className="group flex items-center gap-2 md:justify-between">
            Class 4th
            <FcPlus className="transform transition-all duration-200 ease-in group-hover:scale-125" />
          </span>
        </div>
        <div className=" cursor-pointer rounded-sm border-[.1rem] border-transparent px-3 py-2 shadow-sm shadow-blue-100 transition-all duration-200 ease-in  hover:border-blue-300 hover:shadow-md hover:shadow-blue-200 md:my-4">
          <span className="group flex items-center gap-2 md:justify-between">
            Class 5th
            <FcPlus className="transform transition-all duration-200 ease-in group-hover:scale-125" />
          </span>
        </div>
      </div>
    </>
  );
}

export default DashboardSideBar;
