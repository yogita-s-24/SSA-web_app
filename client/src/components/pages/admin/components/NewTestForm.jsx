import React from "react";

function NewTestForm() {
  return (
    <div>
      <form
        className="mx-auto flex  w-full flex-col border bg-white px-2  py-3 sm:w-[95%] md:w-[90%] lg:w-[80%]"
        action=""
      >
        <h1 className="mb-5 text-center text-3xl">New Test</h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:gap-4">
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="title" className="text-lg">
              Test Title :
            </label>
            <input
              className="px-1 mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="title"
            />
          </div>
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="Time" className="text-lg">
              Test Time :
            </label>
            <input
              className="px-1 mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="Time"
            />
          </div>
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="mark" className="text-lg">
              Test Mark :
            </label>
            <input
              className="px-1 mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
            />
          </div>
        </div>
        <h5 className="my-4 text-center text-2xl">Add Questions </h5>
        <div className="flex flex-col">
          <div className="group flex flex-col px-2 py-2 ">
            <div className="flex items-center justify-between">
              <label htmlFor="qus" className="mb-4 text-lg">
                1. Question :
              </label>
              <input
                className="px-1  mb-4 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
                type="text"
                name=""
                id="qus"
                placeholder="Add  Mark"
              />
            </div>
            <input
              className="px-1   rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="mark"
            />
          </div>
          <div className=" grid grid-cols-1 gap-4 p-2 sm:grid-cols-2">
          <div className="flex items-center justify-between col-span-2">
              <label htmlFor="ans" className=" text-lg">
                Answer:
              </label>
              <input
                className="px-1  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
                type="text"
                name=""
                id="ans"
                placeholder="Correct answer"
              />
            </div>
            <input
              className="px-1   rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              placeholder="Option 1"
            />
            <input
              className="px-1   rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              placeholder="Option 2"
            />
            <input
              className="px-1   rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              placeholder="Option 3"
            />
            <input
              className="px-1   rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              placeholder="Option 4"
            />
          </div>
        </div>
        <div className="my-4 flex w-full justify-center gap-8">
          <button className="mx-auto block  rounded bg-green-400 px-2 py-4">
            Add Another Question
          </button>
          <button className="mx-auto block  rounded bg-red-400 px-2 py-4">
            Submit Test
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTestForm;
