import React from "react";
import { FcPlus, FcEditImage } from "react-icons/fc";
import { AiTwotoneDelete } from "react-icons/ai";

function TestAdd() {
  let testDataPre = [
    {
      id: 1, //mongodb _id
      testDate: "10-02-2023",
      testTitle: "Test 1",
      testQuestionAmount: 10,
      info: {
        testMark: 10,
        testTime: "30 min",
        //some information
      },
    },
    {
      id: 2, //mongodb _id
      testDate: "10-02-2023",
      testTitle: "Test 2",
      testQuestionAmount: 10,
      info: {
        testMark: 10,
        testTime: "30 min",
        //some information
      },
    },
    {
      id: 3, //mongodb _id
      testDate: "10-02-2023",
      testTitle: "Test 3",
      testQuestionAmount: 10,
      info: {
        testMark: 10,
        testTime: "30 min",
        //some information
      },
    },
    {
      id: 4, //mongodb _id
      testDate: "10-02-2023",
      testTitle: "Test 4",
      testQuestionAmount: 10,
      info: {
        testMark: 10,
        testTime: "30 min",
        //some information
      },
    },
    {
      id: 5, //mongodb _id
      testDate: "10-02-2023",
      testTitle: "Test 5",
      testQuestionAmount: 10,
      info: {
        testMark: 10,
        testTime: "30 min",
        //some information
      },
    },
  ];
  return (
    <section className="flex flex-col px-4 sm:px-3 md:px-8 ">
        <h2 className="text-center text-3xl">Old Tests</h2>
      <div className="my-[5vh] flex flex-col gap-4 ">
        {testDataPre.map((test, i) => {
          return (
            <div
              className="flex flex-col gap-2 rounded bg-blue-100 px-3 py-4 transition-colors duration-200 ease-in  hover:bg-blue-100/50 sm:m-0 md:mx-auto md:w-[90%] lg:w-[80%] "
              key={i}
            >
              <div className=" flex justify-between ">
                <span className="text-lg">{test.testTitle}</span>
                <span className="flex items-center gap-3 text-sm">
                  {test.testDate}
                  <button className=" group mx-2 flex items-center text-3xl">
                    <AiTwotoneDelete className=" transform text-red-500/70 transition-transform duration-100 ease-in group-hover:scale-110" />
                  </button>
                  <button className=" group mx-2 flex items-center text-3xl">
                    <FcEditImage className=" transform transition-transform duration-100 ease-in group-hover:scale-110" />
                  </button>
                </span>
              </div>
              <div className="  flex w-full flex-row justify-around">
                <span>All Question : {test.testQuestionAmount}</span>
                <span>Mark : {test.info.testMark}</span>
                <span>Time : {test.info.testTime}</span>
              </div>
            </div>
          );
        })}

        <div className="flex w-full items-center justify-center">
          <button className="group flex items-center gap-3 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-100 ease-in active:bg-blue-400 ">
            Add New Test{" "}
            <FcPlus className="transform transition-shadow duration-100 ease-in group-active:scale-150" />
          </button>
        </div>
      </div>
      <form
        className="mx-auto flex  w-full flex-col bg-white px-2 py-3  sm:w-[95%] md:w-[90%] lg:w-[80%] border"
        action=""
      >
        <h1 className="text-center text-3xl mb-5">New Test</h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:gap-4">
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="title" className="text-lg">
              Test Title :
            </label>
            <input
              className="mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="title"
            />
          </div>
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="title" className="text-lg">
              Test Time :
            </label>
            <input
              className="mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="title"
            />
          </div>
          <div className="group flex flex-col px-2 py-2 md:flex-row">
            <label htmlFor="title" className="text-lg">
              Test Mark :
            </label>
            <input
              className="mx-3 mt-2 rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="title"
            />
          </div>
        </div>
        <h5 className="my-4 text-center text-2xl">Add Questions </h5>
        <div className="flex flex-col">
          <div className="group col-span-4 flex flex-col px-2 py-2 ">
            <label htmlFor="title" className="mb-4 text-lg">
              1. Question :
            </label>
            <input
              className="  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in focus:bg-white/60  active:bg-slate-50 group-hover:border-gray-500 md:mt-0"
              type="text"
              name=""
              id="title"
            />
          </div>
          <div className=" grid grid-cols-1 gap-4 p-2 sm:grid-cols-2">
            <label htmlFor="title" className="text-lg sm:col-span-2 ">
              Answer :
            </label>
            <input
              className="  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              id="title"
              placeholder="Option 1"
            />
            <input
              className="  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              id="title"
              placeholder="Option 2"
            />
            <input
              className="  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              id="title"
              placeholder="Option 3"
            />
            <input
              className="  rounded border border-gray-300 bg-transparent outline-none transition-all duration-100 ease-in hover:border-gray-500  focus:bg-white/60 active:bg-slate-50 md:mt-0"
              type="text"
              name=""
              id="title"
              placeholder="Option 4"
            />
          </div>
        </div>
        <div className="my-4 w-full flex justify-center gap-8">
          <button className="mx-auto block  rounded bg-green-400 px-2 py-4">
            Add Another Question
          </button>
          <button className="mx-auto block  rounded bg-red-400 px-2 py-4">
            Submit Test
          </button>
        </div>
      </form>
    </section>
  );
}

export default TestAdd;
