import mongoose from "mongoose"

const WeaponSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    stars: Number,
    type: String,
    atk: Number,
    secondaryStat: String,
    secondaryStatValue: Number,
    location: String,
    ascension_item1_name: String,
    ascension_item2_name: String,
    common_item_name: String,
    refinement: [String],
  },
  { collection: "weapons" }
)

export default mongoose.models.Weapon || mongoose.model("Weapon", WeaponSchema)
