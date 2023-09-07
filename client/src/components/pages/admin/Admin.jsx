import React from "react";
import AdminNav from "./components/AdminNav";
import ItemCard from "./components/ItemCard";
import UserCard from "./components/UserCard";

function admin() {
  return (
    <section className="flex h-full flex-col md:flex-row bg-sky-100/20">
      <aside className="flex-[20%] border-b shadow-sm md:border-r ">
        <AdminNav />
      </aside>
      <main className="flex-[100%] md:flex-[80%]">
        <div className="flex flex-row flex-wrap justify-centre md:justify-evenly items-center w-full my-4 md:w-[80%] md:mx-auto md:my-16 px-8 md:p-0 gap-3">
          <ItemCard title="Test Attend" amount="20" icon="attend"/>
          <ItemCard title="Test Pass" amount="20" icon="pass"/>
          <ItemCard title="Test Fail" amount="20" icon="fail"/>
        </div>
        <div className="overflow-y-auto">
          <UserCard/>
        </div>
      </main>
    </section>
  );
}

export default admin;
