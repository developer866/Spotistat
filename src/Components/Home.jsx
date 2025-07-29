import React from "react";
import Search from './Search'
import Nav from "./Nav";

function Home() {
  return (
    <main className="bg-green-300 r w-full md:flex md:justify-center md:gap-4 m-auto md:h-[100vh] ">
      <div className="block md:flex">
        <Nav />
        <Search />
      </div>
    </main>
  );
}

export default Home;
