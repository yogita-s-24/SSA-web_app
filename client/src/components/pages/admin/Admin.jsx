import React from "react";
import AdminNav from "./components/AdminNav";
import ItemCard from "./components/ItemCard";
import UserCard from "./components/UserCard";

function admin({onClick}) {
  let userInfoDemo = [
    {
      name: "a",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "b",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "c",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "d",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "e",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "f",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "g",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
  ];
  return (
    <section className="flex h-full flex-col  bg-sky-100/20 transition-all duration-200 ease-in">
      <aside className=" sticky top-0">
        <AdminNav onClick={onClick}/>
      </aside>
      <main className="h-full flex-[100%] md:h-full md:flex-[80%]">
        <div className="justify-centre my-4 flex w-full flex-row flex-wrap items-center justify-center  gap-4 px-8 md:mx-auto md:my-16 md:w-[80%] md:justify-evenly md:p-0">
          <ItemCard title="Test Attend" amount="20" icon="attend" />
          <ItemCard title="Test Pass" amount="20" icon="pass" />
          <ItemCard title="Test Fail" amount="20" icon="fail" />
        </div>
        <div className="h-full px-1  ">
          {userInfoDemo.map((user, i) => {
            return (
              <UserCard
                key={i}
                clas={user.class}
                email={user.email}
                name={user.name}
                number={user.number}
                testP={user.testPass}
                testA={user.testAttend}
                testF={user.testFail}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default admin;
