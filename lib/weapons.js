import { connectToDatabase } from "../util/mongodb"

export async function getWeapons() {
  const { db } = await connectToDatabase()

  const weapons = await db
    .collection("weapons")
    .find({})
    .sort({ stars: -1, type: 1, name: 1 })
    .toArray()

  console.log(weapons)

  return JSON.parse(JSON.stringify(weapons))
}

export async function getWeapon(weaponName) {
  const { db } = await connectToDatabase()

  const weapon = await db
    .collection("weapons")
    .findOne({ name: weaponName.split("_").join(" ") })

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
