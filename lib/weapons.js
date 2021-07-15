import dbConnect from "../util/dbConnect"

import Weapon from "../models/Weapon"
import AscensionItem from "../models/AscensionItem"
import CommonItem from "../models/CommonItem"

export async function getWeapons() {
  await dbConnect()

  const weapons = await Weapon.find({}).sort({ stars: -1, type: 1, name: 1 })

  return JSON.parse(JSON.stringify(weapons))
}

export async function getWeapon(weaponName) {
  await dbConnect()

  const weaponResult = await Weapon.findOne({
    name: weaponName.split("_").join(" "),
  })

  const weapon = weaponResult.toObject()

  const ascensionItem1Promise = AscensionItem.findOne({
    name: weapon.ascension_item1_name,
  })

  const ascensionItem2Promise = AscensionItem.findOne({
    name: weapon.ascension_item2_name,
  })

  const commonItemPromise = CommonItem.findOne({
    name: weapon.common_item_name,
  })

  const [ascensionItem1, ascensionItem2, commonItem] = await Promise.all([
    ascensionItem1Promise,
    ascensionItem2Promise,
    commonItemPromise,
  ])

  delete weapon.ascension_item1_name
  delete weapon.ascension_item2_name
  delete weapon.common_item_name

  weapon.ascensionItem1 = ascensionItem1
  weapon.ascensionItem2 = ascensionItem2
  weapon.commonItem = commonItem

  return JSON.parse(JSON.stringify(weapon))
}

export async function getAllWeaponNames() {
  await dbConnect()

  const weapons = await Weapon.find({}).select("name")

  return weapons.map((weapon) => {
    return {
      params: {
        weapon: weapon.name.split(" ").join("_"),
      },
    }
  })
}
