import React from "react";

function ChoosSubject() {
  return (
    <header className=" my-8 grid grid-cols-2 gap-4 border-b px-4 pb-[5vh] sm:grid-cols-3 md:mt-[5vh] md:gap-8 md:px-8 ">
      <div className=" flex h-full w-full  items-center justify-center ">
        <span className="truncate break words mx-auto block h-full w-full cursor-pointer select-none rounded-md px-4 py-3 text-center text-lg shadow-md shadow-blue-100 transition-shadow duration-75 ease-in active:shadow-lg active:shadow-blue-200 sm:text-xl md:text-3xl ">
          English
        </span>
      </div>
      <div className=" flex h-full w-full  items-center justify-center ">
        <span className="truncate break words mx-auto block h-full w-full cursor-pointer select-none rounded-md px-4 py-3 text-center text-lg shadow-md shadow-blue-100 transition-shadow duration-75 ease-in active:shadow-lg active:shadow-blue-200 sm:text-xl  md:text-3xl">
          General Knowledge
        </span>
      </div>
      <div className=" flex h-full w-full  items-center justify-center ">
        <span className="truncate break words mx-auto block h-full w-full cursor-pointer select-none rounded-md px-4 py-3 text-center text-lg shadow-md shadow-blue-100 transition-shadow duration-75 ease-in active:shadow-lg active:shadow-blue-200 sm:text-xl  md:text-3xl">
          Quick Test
        </span>
      </div>
    </header>
  );
}

export default ChoosSubject;
