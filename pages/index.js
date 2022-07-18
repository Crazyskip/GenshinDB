import { PrismaClient } from "@prisma/client"
import Head from "next/head"
import { useState } from "react"
import CharacterCard from "../components/CharacterCard"
import Navbar from "../components/Navbar"

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const characters = await prisma.character.findMany({
    include: {
      talentBook: true,
      elementalStone: true,
      localItem: true,
      bossItem: true,
      jewel: true,
      commonItem: true,
    },
  })

  return {
    props: {
      characters,
    },
    revalidate: 60,
  }
}

export default function Home({ characters }) {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
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
        <meta name="author" content="Damon Jensen" />
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
  )
}
