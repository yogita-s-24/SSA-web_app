import React from "react";
import AdminNav from "./components/AdminNav";
import ItemCard from "./components/ItemCard";
import UserCard from "./components/UserCard";

function admin() {
  let userInfoDemo = [
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
      email: "a@mail.com",
      testAttend: "4",
      testPass: "3",
      testFail: "1",
      class: "4",
      number: 123456789,
    },
    {
      name: "John",
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
        <AdminNav />
      </aside>
      <main className="h-full flex-[100%] md:h-full md:flex-[80%]">
        <div className="justify-centre my-4 flex w-full flex-row flex-wrap items-center justify-center  gap-4 px-8 md:mx-auto md:my-16 md:w-[80%] md:justify-evenly md:p-0">
          <ItemCard title="Test Attend" amount="20" icon="attend" />
          <ItemCard title="Test Pass" amount="20" icon="pass" />
          <ItemCard title="Test Fail" amount="20" icon="fail" />
        </div>
        <div className="grid  grid-cols-1 gap-3  px-2 py-10 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
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
