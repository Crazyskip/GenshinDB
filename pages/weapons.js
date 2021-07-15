import Head from "next/head"
import { useState } from "react"
import Navbar from "../components/Navbar"
import WeaponCard from "../components/WeaponCard"

import { getWeapons } from "../lib/weapons"

export async function getStaticProps() {
  const weapons = await getWeapons()
  return {
    props: {
      weapons,
    },
    revalidate: 1,
  }
}

export default function Weapons({ weapons }) {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <Head>
        <title>Weapons - Genshin Database</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Genshin Impact Database" />
        <meta name="keywords" content="Genshin" />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar page="Weapons" />
      <div className="weapons mx-auto text-gray-50">
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl text-center font-semibold">
            Weapons
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
          {weapons.map((weapon) =>
            weapon.name.toLowerCase().includes(search.toLowerCase()) ? (
              <WeaponCard key={weapon._id} weapon={weapon} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  )
}
