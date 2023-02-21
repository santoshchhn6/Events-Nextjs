import EventCard from "@/components/events/EventCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EventPerCity = ({ data, pageName }: { data: []; pageName: string }) => {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-gray-700 font-bold text-lg ">
        Event in {pageName.toUpperCase()}
      </h1>
      <EventCard data={data} />
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
