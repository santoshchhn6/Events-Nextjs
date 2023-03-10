import Head from "next/head";
import Home from "@/components/home/Home";
import Image from "next/image";

export default function HomePage({ data }: { data: [] }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-[1000px] h-[500px] overflow-hidden object-fill">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Event"
          width={1920}
          height={1080}
          className="w-fit"
        />
      </div>

      <Home data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../../data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
