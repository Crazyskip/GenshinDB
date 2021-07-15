import dbConnect from "../util/dbConnect"

import Character from "../models/Character"
import CommonItem from "../models/CommonItem"
import AscensionBossItem from "../models/AscensionBossItem"
import AscensionGem from "../models/AscensionGem"
import AscensionItem from "../models/AscensionItem"
import TalentBook from "../models/TalentBook"
import BossItem from "../models/BossItem"

export async function getCharacters() {
  await dbConnect()

  const characters = await Character.find({}).sort({ name: 1 })

  return JSON.parse(JSON.stringify(characters))
}

export async function getCharacter(characterName) {
  await dbConnect()

  const characterResult = await Character.findOne({
    name: characterName.split("_").join(" "),
  })

  const character = characterResult.toObject()

  const ascensionBossItemPromise = await AscensionBossItem.findOne({
    name: character.ascension_boss_item_name,
  })

  const ascensionGemPromise = await AscensionGem.findOne({
    name: character.ascension_gem_name,
  })

  const ascensionItemPromise = await AscensionItem.findOne({
    name: character.ascension_item_name,
  })

  const commonItemPromise = await CommonItem.findOne({
    name: character.common_item_name,
  })

  const talentBookPromise = await TalentBook.findOne({
    name: character.talent_book_name,
  })

  const bossItemPromise = await BossItem.findOne({
    name: character.boss_item_name,
  })

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
  await dbConnect()

  const characters = await Character.find({}).find({}).select("name")

  return characters.map((character) => {
    return {
      params: {
        character: character.name.split(" ").join("_"),
      },
    }
  })
}
