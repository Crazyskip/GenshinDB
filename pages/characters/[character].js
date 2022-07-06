import Head from "next/head"
import { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import CharacterBanner from "../../components/CharacterBanner"
import Navbar from "../../components/Navbar"
import { getCharacter, getAllCharacterNames } from "../../lib/characters"
import CharacterTalentTab from "../../components/CharacterTalentTab"
import CharacterAscensionTab from "../../components/CharacterAscensionTab"

export async function getStaticProps({ params }) {
  const characterData = await getCharacter(params.character)
  return {
    props: {
      characterData,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = await getAllCharacterNames()
  return {
    paths,
    fallback: false,
  }
}

export default function Character({ characterData }) {
  const [tabIndex, setTabIndex] = useState(0)

  const CustomTab = ({ children, index, ...otherProps }) => (
    <Tab
      {...otherProps}
      className={`py-3 px-6 focus:outline-none cursor-pointer hover:text-gray-50 ${
        tabIndex === index ? "text-gray-50" : "text-gray-400"
      }`}
    >
      <h1>{children}</h1>
    </Tab>
  )

  CustomTab.tabsRole = "Tab"

  return (
    <div>
      <Head>
        <title>{characterData.name} - Genshin Database</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Genshin Impact character ${characterData.name} ascension and talent requirements`}
        />
        <meta
          name="keywords"
          content={`${characterData.name}, character, Genshin Impact, Genshin, database`}
        />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar />
      <CharacterBanner character={characterData} />
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-4 w-full md:w-10/12 lg:w-3/4 mx-auto bg-gray-900 bg-opacity-30 pb-4"
      >
        <TabList className="flex justify-center bg-gray-900 bg-opacity-90 text-gray-400 text-xl text-center">
          <CustomTab index={0}>Talents</CustomTab>
          <CustomTab index={1}>Ascension</CustomTab>
        </TabList>

        <TabPanel className="focus:outline-none">
          <CharacterTalentTab character={characterData} />
        </TabPanel>
        <TabPanel className="focus:outline-none">
          <CharacterAscensionTab character={characterData} />
        </TabPanel>
      </Tabs>
    </div>
  )
}
