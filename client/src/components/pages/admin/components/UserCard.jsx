import React from "react";
import {
  FcAcceptDatabase,
  FcDataProtection,
  FcHighPriority,
} from "react-icons/fc";
function UserCard({ name, email, number, testP, testF, testA, clas }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 bg-white p-3 sm:grid-cols-2 md:grid-cols-3 border border-blue-300/50 rounded">
        <h4 className="text-lx p-3">Name: {name}</h4>
        <span className="p-3">Class: {clas}</span>
        <div className="gir col-span-3 grid grid-cols-2">
          <span className="p-3">Gmail: {email}</span>
          <span className="p-3">No. {number}</span>
        </div>
        <div className=" col-span-2 grid grid-cols-3 gap-2 md:col-span-4">
          <div className=" flex flex-col items-center justify-center p-2 shadow shadow-blue-300 rounded border border-blue-500/10">
            <div className="flex flex-row items-center gap-3 text-blue-500">
              <FcDataProtection className="text-4xl " />
              Attempted
            </div>
            <span className="mx-auto block text-center text-blue-500">
              {testA}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center p-2 shadow shadow-green-300 rounded border border-green-500/10">
            <div className="flex flex-row items-center gap-3 text-green-500">
              <FcAcceptDatabase className="text-4xl " />
              Passed
            </div>
            <span className="mx-auto block text-center text-green-500">
              {testP}
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center p-2 shadow shadow-red-300 rounded border border-red-500/10">
            <div className="flex flex-row items-center gap-3 text-red-500">
              <FcHighPriority className="text-4xl " />
              Failed
            </div>
            <span className="mx-auto block text-center text-red-500">
              {testF}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
