import React, { useState } from "react";

function AdminLogIn() {
  const [userInfo, setUserInfo] = useState({
    userName: " ",
    userPassword: " ",
  });
  const handleUserNameChange = (e) => {
    setUserInfo({ ...userInfo, userName: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, userPassword: e.target.value });
  };
  const handleSubmit = () => {
    console.log("rendering...");
    localStorage.setItem("adminLoggedIn", true);
  };
  console.log("component rendered");
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {userInfo.userName}
        {userInfo.userPassword}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col items-center  gap-8 rounded-md    border bg-white p-5"
        >
          <h1 className="text-4xl">Admin Log In</h1>
          <div className="flex flex-col">
            <label htmlFor="user">User Name</label>
            <input
              id="user"
              type="text"
              className=" border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md"
              value={userInfo.userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className=" border-b p-2 outline-none transition-all duration-150 ease-linear focus:shadow-md"
              value={userInfo.userPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="rounded-sm border border-blue-500 bg-blue-500 px-3 py-2 text-white transition-colors duration-200 ease-in hover:bg-blue-500/90"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogIn;
