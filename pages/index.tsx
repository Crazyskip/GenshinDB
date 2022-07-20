import { Character, PrismaClient } from "@prisma/client";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";

type Props = {
  characters: Character[];
};

const Characters: NextPage<Props> = ({ characters }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Characters - Genshin Database</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="List of Genshin Impact Characters including their ascension and talent requirements."
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, database, characters, character"
        />
        <meta name="author" content="Crazyskip" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar page="Characters" />
      <div className="characters text-gray-50 mx-auto">
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl text-center font-semibold">
            Characters
          </h2>
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            placeholder="Search"
            autoComplete="off"
            className="text-lg bg-gray-900 bg-opacity-80 focus:outline-none rounded px-2 py-1 w-full mt-4 md:mt-0 md:w-3/12 md:absolute md:right-1 md:top-3"
          />
        </div>
        <div className="my-4 flex flex-wrap">
          {characters.map((character) =>
            character.name.toLowerCase().includes(search.toLowerCase()) ? (
              <CharacterCard key={character.id} character={character} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const characters = await prisma.character.findMany({
    orderBy: [{ name: "asc" }],
  });

  return {
    props: {
      characters,
    },
    revalidate: 1,
  };
};

export default Characters;
