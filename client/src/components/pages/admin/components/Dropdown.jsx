import React, { useState } from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Dropdown({ title, items }) {
  let [isActive, setIsActive] = useState(false);
  return (
    <div className="relative bottom-0 -z-[999999] overflow-hidden">
      <button
        onClick={() => {
          const active = !isActive;
          setIsActive(active);
        }}
        className="z-10   flex items-center justify-center text-blue-400"
      >
        {title}
        {isActive ? (
          <BiChevronUp className="" />
        ) : (
          <BiChevronDown className="" />
        )}
      </button>
      <div
        className={`${
          isActive
            ? "absolute left-[-60%]  flex h-auto max-h-[150px] w-auto translate-x-[-50%] transform flex-col justify-start truncate border bg-white"
            : "hidden"
        } z-[888] rounded-sm  p-2 transition-all duration-200 ease-in`}
      >
        <div className="h-full w-full z-[777]   overflow-y-auto overflow-x-hidden">
          {items?.map((item, i) => {
            return (
              <div
                className="cursor-default border-b px-1 py-1 text-sm hover:bg-slate-50"
                key={i}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
