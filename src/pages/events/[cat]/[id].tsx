import Image from "next/image";
import React from "react";

const EventPage = ({
  data,
}: {
  data: { image: string; title: string; description: string };
}) => {
  return (
    <div>
      {" "}
      <Image src={data.image} alt={data.title} width={1000} height={600} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../../data/data.json");

  const paths = allEvents.map((e) => ({
    params: {
      cat: e.city,
      id: e.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { cat: string; id: string };
}) {
  const id = context.params.id;
  const { allEvents } = await import("../../../../data/data.json");

  const eventsData = allEvents.find((e) => e.id === id);
  return {
    props: { data: eventsData },
  };
}
