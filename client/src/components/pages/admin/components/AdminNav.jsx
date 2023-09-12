import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { RiAlignJustify } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../../assets/image/logo.png";

function AdminNav({ onClick }) {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <nav
      className={`sticky top-0 z-50 flex flex-col px-0 sm:flex-col md:flex-row md:bg-[#B9E9FC] md:px-4 md:py-3 `}
    >
      <div className="z-50  flex bg-[#B9E9FC] px-4 py-2 md:hidden">
        <button
          className="rounded-md px-3 py-2 text-2xl outline-none hover:bg-[#a7e6fe] focus:ring-2  active:ring-2"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          {isClosed ? <RiAlignJustify /> : <RxCross1 />}
        </button>
        <Link to="/" className="ms-auto">
          <img className="w-10 " src={Logo} alt="" />
        </Link>
      </div>
      <div className={`relative top-0 -z-10 w-full bg-[#B9E9FC]  `}>
        <ul
          className={`${
            isClosed ? "-top-60" : "top-0"
          } absolute flex w-full flex-col bg-[#B9E9FC] px-8 text-sm transition-all duration-500 ease-linear md:static  md:top-0 md:flex-row md:justify-end md:gap-16 md:text-lg`}
        >
          {" "}
          <Link to="/" className="me-auto hidden sm:hidden md:block">
            <img className="w-10 " src={Logo} alt="" />
          </Link>
          <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
            <Link
              className=" text-stone-900 outline-none transition-all duration-100 ease-out hover:text-stone-600 focus:ring-2 active:ring-2"
              to="/admin"
              onClick={() => {
                setIsClosed(!isClosed);
              }}
            >
              Dashboard
            </Link>
          </li>
          <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
            <Link
              className=" text-stone-900 outline-none transition-all duration-100 ease-out hover:text-stone-600 focus:ring-2 active:ring-2"
              to="/admin/add-test"
              onClick={() => {
                setIsClosed(!isClosed);
              }}
            >
              Add Test
            </Link>
          </li>
          <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
            <button className=" text-stone-900 outline-none transition-all duration-100 ease-out hover:text-stone-600 focus:ring-2 active:ring-2"
            onClick={onClick}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNav;
