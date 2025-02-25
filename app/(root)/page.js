import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-emibold">
          {query ? `Search result for ${query}` : "all startups"}
        </p>
      </section>
    </>
  );
}
