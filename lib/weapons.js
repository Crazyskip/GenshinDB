import { connectToDatabase } from "../util/mongodb"

export async function getWeapons() {
  const { db } = await connectToDatabase()

  const weapons = await db
    .collection("weapons")
    .find({})
    .sort({ stars: -1, type: 1, name: 1 })
    .toArray()

  return JSON.parse(JSON.stringify(weapons))
}

export async function getWeapon(weaponName) {
  const { db } = await connectToDatabase()

  const weapon = await db
    .collection("weapons")
    .findOne({ name: weaponName.split("_").join(" ") })

  const ascensionItem1Promise = db
    .collection("ascension-items")
    .findOne({ name: weapon.ascension_item1_name })

  const ascensionItem2Promise = db
    .collection("ascension-items")
    .findOne({ name: weapon.ascension_item2_name })

  const commonItemPromise = db
    .collection("common-items")
    .findOne({ name: weapon.common_item_name })

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
  const { db } = await connectToDatabase()

  const weapons = await db
    .collection("weapons")
    .find({})
    .project({ name: 1 })
    .toArray()

  return weapons.map((weapon) => {
    return {
      params: {
        weapon: weapon.name.split(" ").join("_"),
      },
    }
  })
}
