import Image from "next/image";
import Link from "next/link";
import React from "react";

const style = {
  btn: "border-blue-400 h-12 p-2 flex items-center text-gray-500 text-xl hover:bg-blue-100 hover:border-b-4 hover:text-blue-400",
};

const Header = () => {
  return (
    <header>
      <nav className="border pl-10 flex ">
        {/* <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className=""
        ></Image> */}
        <Link className={style.btn} href="/">
          Home
        </Link>
        <Link className={style.btn} href="/events">
          Events
        </Link>
        <Link className={style.btn} href="/about">
          About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
