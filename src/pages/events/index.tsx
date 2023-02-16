import Image from "next/image";
import React from "react";

function Events({ data }: { data: [] }) {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {data.map((e: { id: string; title: string; image: string }, i) => (
          <a key={i} href={`/events/${e.id}`}>
            <Image src={e.image} alt={e.title} width={200} height={200} />
            <h2>{e.title}</h2>
          </a>
        ))}
      </div>
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
