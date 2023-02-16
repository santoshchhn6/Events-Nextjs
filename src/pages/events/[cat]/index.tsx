import Image from "next/image";
import React from "react";

const EventPerCity = ({ data }: { data: [] }) => {
  return (
    <div>
      <h1>Event in Landon</h1>
      <div>
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
            <a key={i} href={`/events/${e.city}/${e.id}`}>
              <Image src={e.image} alt={e.title} width={200} height={200} />
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </a>
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

export async function getStaticProps(context: any) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../../data/data.json");
  const data = allEvents.filter((e) => e.city === id);
  console.log(data);
  return { props: { data } };
}
