import React from "react";
import { FcPlus, FcEditImage } from "react-icons/fc";
import { AiTwotoneDelete } from "react-icons/ai";
import NewTestForm from "./NewTestForm";

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
    <NewTestForm/>
    </section>
  );
}

export default TestAdd;
