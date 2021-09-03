import Head from "next/head"
import { useState } from "react"
import Navbar from "../components/Navbar"
import ArtifactCard from "../components/ArtifactCard"

import { getArtifacts } from "../lib/artifacts"

export async function getStaticProps() {
  const artifacts = await getArtifacts()
  return {
    props: {
      artifacts,
    },
    revalidate: 60,
  }
}

export default function Artifacts({ artifacts }) {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>Artifacts - Genshin Database</title>
        <meta
          name="description"
          content="List of Genshin Impact Artifact Sets including their set bonuses."
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, database, Artifact, Artifacts, Artifact Set"
        />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar page="Artifacts" />
      <div className="artifacts mx-auto text-gray-50">
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl text-center font-semibold">
            Artifacts
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
          {artifacts.map((artifact) =>
            artifact.name.toLowerCase().includes(search.toLowerCase()) ? (
              <ArtifactCard key={artifact._id} artifact={artifact} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  )
}
