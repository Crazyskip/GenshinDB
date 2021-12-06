import dbConnect from "../util/dbConnect"

import Weapon from "../models/Weapon"
import WeaponPrimaryItem from "../models/WeaponPrimaryItem"
import WeaponSecondaryItem from "../models/WeaponSecondaryItem"
import CommonItem from "../models/CommonItem"

export async function getWeapons() {
  await dbConnect()

  const weapons = await Weapon.find({}).sort({ stars: -1, type: 1, name: 1 })

  return JSON.parse(JSON.stringify(weapons))
}

export async function getWeapon(weaponName) {
  await dbConnect()

  const weapon = await Weapon.findOne({
    name: weaponName.split("_").join(" "),
  }).populate("weaponPrimaryItem weaponSecondaryItem commonItem")

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
