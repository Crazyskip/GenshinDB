import dbConnect from "../util/dbConnect"

import Character from "../models/Character"
import TalentBook from "../models/TalentBook"
import ElementalStone from "../models/ElementalStone"
import LocalItem from "../models/LocalItem"
import BossItem from "../models/BossItem"
import Jewel from "../models/Jewel"
import CommonItem from "../models/CommonItem"

export async function getCharacters() {
  await dbConnect()

  const characters = await Character.find({}).sort({ name: 1 })

  return JSON.parse(JSON.stringify(characters))
}

export async function getCharacter(characterName) {
  await dbConnect()

  const character = await Character.findOne({
    name: characterName.split("_").join(" "),
  }).populate("talentBook elementalStone localItem bossItem jewel commonItem")

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
