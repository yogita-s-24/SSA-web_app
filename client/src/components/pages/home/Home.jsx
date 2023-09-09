import React from "react";
import Nav from "../../nav/Nav";
// import LogIn from "../auth/login/LogIn";
import { Registration } from "../export";

function Home() {
  return (
    <div>
      <Nav />
      <Registration/>
    </div>
  );
}

export default Home;
