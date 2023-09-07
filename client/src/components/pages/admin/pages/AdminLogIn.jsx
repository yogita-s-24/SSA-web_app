import React from "react";

function AdminLogIn() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form className="flex flex-col items-center  gap-8 rounded-md    border bg-white p-5">
          <h1 className="text-4xl">Admin Log In</h1>
          <div className="flex flex-col">
            <label htmlFor="user">User Name</label>
            <input
              id="user"
              type="text"
              className=" border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className=" border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md"
            />
          </div>
          <div className="">
            <button className="rounded-sm border transition-colors duration-200 ease-in border-blue-500 bg-blue-500 px-3 py-2 text-white hover:bg-blue-500/90">
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogIn;
