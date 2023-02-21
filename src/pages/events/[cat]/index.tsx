import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EventPerCity = ({ data, pageName }: { data: []; pageName: string }) => {
  
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-gray-700 font-bold text-lg mb-5">
        Event in {pageName.toUpperCase()}
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-5 m-5">
        {data.map(
          (
            e: {
              id: string;
              city: string;
              image: string;
              title: string;
              description: string;
            },
            i
          ) => (
            <Link
              key={i}
              href={`/events/${e.city}/${e.id}`}
              className=" w-[300px]"
            >
              <div className="w-fit h-[200px] overflow-hidden object-fill">
                <Image
                  width={1920}
                  height={1080}
                  src={e.image}
                  alt=""
                  className="w-fit"
                />
              </div>

              <h2 className="mt-2 text-lg font-bold text-gray-600">
                {e.title}
              </h2>
              <p className="mt-2 text-gray-500">{e.description}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default EventPerCity;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../../data/data.json");
  const allPaths = events_categories.map((e) => ({
    params: {
      cat: e.id.toString(),
    },
  }));
  console.log(allPaths);
  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context: { params: { cat: string } }) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../../data/data.json");
  const data = allEvents.filter((e) => e.city === id);
  console.log(data);
  return { props: { data, pageName: id } };
}
