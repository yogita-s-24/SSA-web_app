import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
function UserItem({ title, date, deleteClick, edClick, AllQ, Mark, Time }) {
  return (
    <>
      <div className="flex flex-col gap-2 rounded bg-blue-100 px-3 py-4 transition-colors duration-200 ease-in  hover:bg-blue-100/50 sm:m-0 md:mx-auto md:w-[90%] lg:w-[80%] ">
        <div className=" flex justify-between ">
          <span className="text-lg">{title}</span>
          <span className="flex items-center gap-3 text-sm">
            {date}
            <button
              className=" group mx-2 flex items-center text-3xl"
              onClick={deleteClick}
            >
              <AiTwotoneDelete className=" transform text-red-500/70 transition-transform duration-100 ease-in group-hover:scale-110" />
            </button>
            <button
              className=" group mx-2 flex items-center text-3xl"
              onClick={edClick}
            >
              <FcEditImage className=" transform transition-transform duration-100 ease-in group-hover:scale-110" />
            </button>
          </span>
        </div>
        <div className="  flex w-full flex-row justify-around">
          <span>All Question : {AllQ}</span>
          <span>Mark : {Mark}</span>
          <span>Time : {Time}</span>
        </div>
      </div>
    </>
  );
}

export default UserItem;
