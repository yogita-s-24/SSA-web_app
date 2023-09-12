import React from "react";
import Dropdown from "./Dropdown";
// import {
//   FcAcceptDatabase,
//   FcDataProtection,
//   FcHighPriority,
// } from "react-icons/fc";
function UserCard({ name, email, number, testP, testF, testA, clas }) {
  return (
    <div className="mb-2 flex z-10 h-[50px] w-full items-center justify-center rounded-md border bg-white px-1 capitalize sm:h-[100px]">
      <div className="flex w-full items-center justify-center ">
       
        <div className="ms-4 flex h-full w-full items-center  justify-between sm:grid sm:grid-cols-3 sm:gap-x-2 sm:gap-y-3 md:ms-6">
          <div className="block truncate sm:flex ">Name: {name}</div>
          <div className="hidden truncate sm:flex  ">Class: {clas}</div>
          <div className="flex sm:hidden md:hidden z-[100]">
            <Dropdown
              title="More"
              items={[
                `Class: ${clas}`,
                `Roll No.${number}`,
                `Gmail: ${email}`,
                `Test Pass ${testP} `,
                `Test Fail ${testF} `,
                `Test Att.. ${testA} `,
              ]}
            />
          </div>
          <div className="hidden truncate sm:flex  ">Roll No.{number}</div>
          <div className="sm: hidden truncate sm:flex ">Email: {email}</div>
          <div className="hidden  truncate  sm:col-span-2 sm:flex sm:flex-row sm:items-center sm:justify-around">
            <span className="sm:">Test: </span>
            <span className="border-green-300 text-green-600 sm:border-b">
              Pass: {testP}
            </span>
            <span className="border-red-300 text-red-600 sm:border-b">
              Fail: {testF}
            </span>
            <span className="border-blue-300 text-blue-600 sm:border-b">
              Attempted: {testA}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
