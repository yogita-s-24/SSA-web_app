import React from "react";
import {
  FcAcceptDatabase,
  FcDataProtection,
  FcDeleteDatabase,
  FcHighPriority,
} from "react-icons/fc";
function UserCard({ name, email, number, testP, testF, testA, clas }) {
  return (
    <div className="flex w-full flex-col md:justify-between md:items-center md:w-[80%] md:flex-row p-2 md:px-3  bg-blue-100/20 hover:bg-blue-100/60 transition-colors duration-200 ease-linear rounded-sm mx-auto">

      <div className="flex flex-col ">
        <span className="py-2">Student Name: {name}</span>
        <span className="py-2">Student Class : {clas}th</span>
        <div className="flex items-center justify-between gap-4">
          <span className="py-2">Email : {email}</span>
          <span className="py-2">Number: {number}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <span className="flex flex-row items-center md:flex-col md:items-center md:justify-center rounded-md p-2 md:m-2 bg-green-200">
          <FcAcceptDatabase />
          <span>Pass Test: {testP}</span>
        </span>

        <span className="flex flex-row items-center md:flex-col md:items-center md:justify-center rounded-md p-2 md:m-2 bg-blue-200">
          <FcDataProtection />
          <span> Attend Test: {testA}</span>
        </span>
        <span className="flex flex-row items-center md:flex-col md:items-center md:justify-center rounded-md p-2 md:m-2 bg-red-200">
          <FcHighPriority />
          <span> Fail Test: {testF}</span>
        </span>
      </div>
    </div>
  );
}

export default UserCard;
