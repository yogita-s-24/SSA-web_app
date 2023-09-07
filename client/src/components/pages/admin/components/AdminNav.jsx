import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/logo.png";
import { SiTestcafe } from "react-icons/si";

function AdminNav({ onClick }) {
  return (
    <section className="h-full w-full">
      <header className="flex flex-row items-center justify-between bg-[#B9E9FC] px-4 py-2">
        <Link to="/">
          <img className="w-10 " src={Logo} alt="" />
        </Link>
        <span className="text-xl text-slate-700">Super Six Academy</span>
      </header>
      <nav className="flex flex-row md:flex-col gap-3 flex-wrap p-4">
        <div
          className="group my-4 mx-auto md:w-full cursor-pointer rounded-md border border-sky-500/10 bg-white p-2 shadow-sm transition-shadow duration-200 ease-in hover:shadow-md hover:shadow-sky-500/10"
          onClick={onClick}
        >
          <span className=" flex items-center gap-x-2">
            <SiTestcafe className="text-xl text-sky-900 transition-colors duration-200 ease-in group-hover:text-sky-500" />{" "}
            Section 4 th
          </span>
        </div>
        <div
          className="group my-4 mx-auto md:w-full cursor-pointer rounded-md border border-sky-500/10 bg-white p-2 shadow-sm transition-shadow duration-200 ease-in hover:shadow-md hover:shadow-sky-500/10"
          onClick={onClick}
        >
          <span className=" flex items-center gap-x-2">
            <SiTestcafe className="text-xl text-sky-900 transition-colors duration-200 ease-in group-hover:text-sky-500" />{" "}
            Section 5 th
          </span>
        </div>
      </nav>
    </section>
  );
}

export default AdminNav;
