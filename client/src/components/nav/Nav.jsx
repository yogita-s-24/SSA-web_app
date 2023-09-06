import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { RiAlignJustify } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

function Nav() {
  const [isClosed, setIsClosed] = useState(true);
  const handalCollapse = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <nav
        className={`sticky top-0 flex flex-col px-0 sm:flex-col md:flex-row md:bg-[#B9E9FC] md:px-4 `}
      >
        <div className="z-50  flex bg-[#B9E9FC] px-4 py-2 md:hidden">
          <button
            className="rounded-md px-3 py-2 text-2xl outline-none hover:bg-[#a7e6fe] focus:ring-2  active:ring-2"
            onClick={handalCollapse}
          >
            {isClosed ? <RiAlignJustify /> : <RxCross1 />}
          </button>
        </div>
        <div
          className={`relative top-0 -z-10 w-full bg-[#B9E9FC] transition-all duration-500 ease-linear md:static ${
            isClosed ? "-top-60" : "top-0"
          }`}
        >
          <ul className="absolute top-0 flex w-full flex-col bg-[#B9E9FC] px-8 text-sm md:static md:flex-row md:justify-end md:gap-16 md:text-lg">
            <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
              <Link
                className=" outline-none focus:ring-2 active:ring-2"
                to="/"
                onClick={handalCollapse}
              >
                Home
              </Link>
            </li>
            <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
              <Link
                className=" outline-none focus:ring-2 active:ring-2"
                to="/admin"
                onClick={handalCollapse}
              >
                Admin
              </Link>
            </li>
            <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
              <Link
                className=" outline-none focus:ring-2 active:ring-2"
                to="/test"
                onClick={handalCollapse}
              >
                Test
              </Link>
            </li>
            <li className="my-2 me-auto px-3 py-1  hover:bg-[#a7e6fe]  md:m-0 md:hover:bg-inherit">
              <Link
                className=" outline-none focus:ring-2 active:ring-2"
                to="/log-in"
                onClick={handalCollapse}
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
