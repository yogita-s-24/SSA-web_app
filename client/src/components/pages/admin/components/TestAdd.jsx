import React from "react";
import NewTestForm from "./NewTestForm";
import OldTest from "./OldTest";

function TestAdd() {
  return (
    <section className="flex flex-col px-4 sm:px-3 md:px-8 ">
      <OldTest />
      <NewTestForm />
    </section>
  );
}

export default TestAdd;
