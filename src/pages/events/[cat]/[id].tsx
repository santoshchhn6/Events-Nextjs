import Image from "next/image";
import React from "react";

const EventPage = ({
  data,
}: {
  data: { image: string; title: string; description: string };
}) => {
  return (
    <div className="flex justify-center">
      <div className=" w-[1000px] mb-10">
        <div className="w-fit h-[500px] overflow-hidden object-fill">
          <Image
            src={data.image}
            alt={data.title}
            width={1920}
            height={1080}
            className="w-fit"
          />
        </div>
        <h2 className="mt-2 text-lg font-bold text-gray-600">{data.title}</h2>
        <p className="mt-2 text-gray-500">{data.description}</p>
      </div>
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
