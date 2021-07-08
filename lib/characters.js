import { connectToDatabase } from "../util/mongodb"

export async function getCharacters() {
  const { db } = await connectToDatabase()

  const characters = await db
    .collection("characters")
    .find({})
    .sort({ name: 1 })
    .toArray()

  return JSON.parse(JSON.stringify(characters))
}

export async function getCharacter(characterName) {
  const { db } = await connectToDatabase()

  const character = await db
    .collection("characters")
    .findOne({ name: characterName.split("_").join(" ") })

  const ascensionBossItemPromise = db
    .collection("ascension-boss-items")
    .findOne({ name: character.ascension_boss_item_name })

  const ascensionGemPromise = db
    .collection("ascension-gems")
    .findOne({ name: character.ascension_gem_name })

  const ascensionItemPromise = db
    .collection("ascension-items")
    .findOne({ name: character.ascension_item_name })

  const commonItemPromise = db
    .collection("common-items")
    .findOne({ name: character.common_item_name })

  const talentBookPromise = db
    .collection("talent-books")
    .findOne({ name: character.talent_book_name })

  const bossItemPromise = db
    .collection("boss-items")
    .findOne({ name: character.boss_item_name })

  const [
    ascensionBossItem,
    ascensionGem,
    ascensionItem,
    commonItem,
    talentBook,
    bossItem,
  ] = await Promise.all([
    ascensionBossItemPromise,
    ascensionGemPromise,
    ascensionItemPromise,
    commonItemPromise,
    talentBookPromise,
    bossItemPromise,
  ])

  delete character.ascension_boss_item_name
  delete character.ascension_gem_name
  delete character.ascension_item_name
  delete character.common_item_name
  delete character.talent_book_name
  delete character.boss_item_name

  character.ascensionBossItem = ascensionBossItem
  character.ascensionGem = ascensionGem
  character.ascensionItem = ascensionItem
  character.commonItem = commonItem
  character.talentBook = talentBook
  character.bossItem = bossItem

  return JSON.parse(JSON.stringify(character))
}

export async function getAllCharacterNames() {
  const { db } = await connectToDatabase()

  const characters = await db
    .collection("characters")
    .find({})
    .project({ name: 1 })
    .toArray()

  return characters.map((character) => {
    return {
      params: {
        character: character.name.split(" ").join("_"),
      },
    }
  })
}
