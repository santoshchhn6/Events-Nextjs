import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = ({ data }: { data: [] }) => (
  <main className="">
    {data.map(
      (
        e: {
          id: string;
          title: string;
          description: string;
          image: string;
        },
        i
      ) => (
        <Link key={i} href={`/events/${e.id}`}>
          <Image width={200} height={200} src={e.image} alt="" />
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </Link>
      )
    )}
  </main>
);

export default Home;
