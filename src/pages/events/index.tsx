import Image from "next/image";
import Link from "next/link";
import React from "react";

function Events({ data }: { data: [] }) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 m-10">
      {data.map((e: { id: string; title: string; image: string }, i) => (
        <Link key={i} href={`/events/${e.id}`} className=" w-[400px]">
          <div className="w-fit h-[250px] overflow-hidden object-fill">
            <Image
              width={1920}
              height={1080}
              src={e.image}
              alt=""
              className="w-fit"
            />
          </div>

          <h2 className="mt-2 text-lg font-bold text-gray-600">{e.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
