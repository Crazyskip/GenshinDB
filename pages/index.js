import Head from "next/head"
import { useState } from "react"
import CharacterCard from "../components/CharacterCard"
import Navbar from "../components/Navbar"

import { getCharacters } from "../lib/characters"

export async function getStaticProps() {
  const characters = await getCharacters()
  return {
    props: {
      characters,
    },
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
        <title>Genshin Database</title>
        <meta name="description" content="Database for Genshin Impact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Characters" />
      <div className="text-gray-50 w-11/12 mx-auto">
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
          {characters
            .filter((character) =>
              character.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((character) => {
              return <CharacterCard key={character._id} character={character} />
            })}
        </div>
      </div>
    </div>
  )
}
