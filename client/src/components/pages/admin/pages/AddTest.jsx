import React from "react";
import AdminNav from "../components/AdminNav";
import DashboardSideBar from "../components/DashboardSideBar";
import DashboardMain from "../components/DashboardMain";

function AddTest() {
  return (
    <section className="">
      <header className="sticky top-0 z-50">
        <AdminNav />
      </header>
      <main className="flex h-full flex-col md:flex-row">
        <aside className="w-full flex-[auto] border-b md:flex-[20%] md:border-b-0 md:border-r">
          <DashboardSideBar />
        </aside>
        <main className="h-full w-full flex-[100%] md:flex-[80%]">
          <DashboardMain />
        </main>
      </main>
    </section>
  );
}

export default AddTest;
