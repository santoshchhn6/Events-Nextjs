import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = ({ data }: { data: [] }) => (
  <main className="flex flex-row flex-wrap justify-center gap-5 m-10">
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
        <Link key={i} href={`/events/${e.id}`} className=" w-[300px]">
          <div className="w-fit h-[200px] overflow-hidden object-fill">
            <Image
              width={1920}
              height={1080}
              src={e.image}
              alt=""
              className="w-fit"
            />
          </div>

          <h2 className="mt-2 text-lg font-bold text-gray-600">{e.title}</h2>
          <p className="mt-2 text-gray-500">{e.description}</p>
        </Link>
      )
    )}
  </main>
);

export default Home;
