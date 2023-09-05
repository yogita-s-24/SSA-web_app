import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { RiAlignJustify } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

function Nav() {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <nav className="h-full bg-slate-100 px-4 overflow-hidden">
      <div className="block sm:block md:hidden lg:hidden bg-slate-100 ">
        <button
          className="px-4 py-2 text-2xl text-slate-800 transition-colors duration-75 ease-in hover:text-slate-600"
          onClick={() => {
            const open = !isClosed;
            setIsClosed(open);
          }}
        >
          {isClosed ? <RiAlignJustify /> : <RxCross1 />}
        </button>
      </div>
      <div className={` transition-all ease-in duration-200 md:static md:flex ${ isClosed?"absolute transform translate-y-[-600px]" : " static "}`}>
        <ul
          className={`flex flex-col ps-8 w-full  md:flex-row ${
            isClosed ? " " : ""
          }`}
        >
          <li className="text-md mb-2 text-slate-800 transition-colors duration-75 ease-in hover:text-slate-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-md mb-2 text-slate-800 transition-colors duration-75 ease-in hover:text-slate-600">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="text-md mb-2 text-slate-800 transition-colors duration-75 ease-in hover:text-slate-600">
            <Link to="/test">Test</Link>
          </li>
          <li className="text-md mb-2 text-slate-800 transition-colors duration-75 ease-in hover:text-slate-600">
            <Link to="/log-in">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
