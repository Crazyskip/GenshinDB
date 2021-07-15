import Head from "next/head"
import CharacterBanner from "../../components/CharacterBanner"
import Navbar from "../../components/Navbar"
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useTabsContext,
} from "@reach/tabs"

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
  function CustomTab({ index, ...props }) {
    const { selectedIndex, focusedIndex } = useTabsContext()
    return (
      <Tab
        style={{
          color: `${selectedIndex === index ? "rgba(249, 250, 251, 1)" : ""}`,
        }}
        {...props}
      />
    )
  }

  return (
    <div>
      <Head>
        <title>{characterData.name} - Genshin Database</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Genshin Impact Database" />
        <meta name="keywords" content="Genshin" />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar />
      <CharacterBanner character={characterData} />
      <Tabs className="mt-4 w-full md:w-10/12 lg:w-3/4 mx-auto bg-gray-900 bg-opacity-30 pb-4">
        <TabList className="bg-gray-900 bg-opacity-90 text-gray-400 text-xl text-center">
          <CustomTab
            className="px-6 py-3 hover:text-gray-50 focus:outline-none"
            index={0}
          >
            Talents
          </CustomTab>
          <CustomTab
            className="px-6 py-3 hover:text-gray-50 focus:outline-none"
            index={1}
          >
            Ascension
          </CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel className="focus:outline-none">
            <CharacterTalentTab character={characterData} />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <CharacterAscensionTab character={characterData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
