import EventCard from "@/components/events/EventCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Events = ({ data }: { data: [] }) => <EventCard data={data} />;

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
