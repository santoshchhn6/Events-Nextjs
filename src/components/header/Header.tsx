import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const style = {
  active: "border-blue-400 bg-blue-100 border-b-4 text-blue-400",
  btn: "h-12 p-2 flex items-center text-gray-500 text-xl border-blue-400 hover:bg-blue-100 hover:border-b-4 hover:text-blue-400",
};

const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <header>
      <nav className="border pl-10 flex ">
        {/* <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className=""
        ></Image> */}
        <Link
          className={style.btn + (active === "home" ? style.active : "")}
          href="/"
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          className={style.btn + (active === "events" ? style.active : "")}
          href="/events"
          onClick={() => setActive("events")}
        >
          Events
        </Link>
        <Link
          className={style.btn + (active === "about" ? style.active : "")}
          href="/about"
          onClick={() => setActive("about")}
        >
          About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
