import React from "react";
import { FcPlus, FcEditImage } from "react-icons/fc";
import UserCard from "./UserCard";
import UserItem from "./UserItem";

function OldTest() {
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
    <>
      <h2 className="text-center text-3xl">Old Tests</h2>
      <div className="my-[5vh] flex flex-col gap-4 ">
        {testDataPre.map((test, i) => {
          return (
            <UserItem
              key={i}
              title={test.testTitle}
              date={test.testDate}
              deleteClick
              edClick
              AllQ={test.testQuestionAmount}
              Mark={test.info.testMark}
              Time={test.info.testTime}
            />
          );
        })}

        <div className="flex w-full items-center justify-center">
          <button className="group flex items-center gap-3 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-100 ease-in active:bg-blue-400 ">
            Add New Test{" "}
            <FcPlus className="transform transition-shadow duration-100 ease-in group-active:scale-150" />
          </button>
        </div>
      </div>
    </>
  );
}

export default OldTest;
