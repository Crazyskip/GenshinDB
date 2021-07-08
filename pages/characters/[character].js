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
    revalidate: 1,
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

  console.log(characterData)

  return (
    <div>
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
          <CustomTab
            className="px-6 py-3 hover:text-gray-50 focus:outline-none"
            index={2}
          >
            Builds
          </CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel className="focus:outline-none">
            <CharacterTalentTab character={characterData} />
          </TabPanel>
          <TabPanel className="focus:outline-none">
            <CharacterAscensionTab character={characterData} />
          </TabPanel>
          <TabPanel className="focus:outline-none"></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
