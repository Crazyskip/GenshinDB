import mongoose from "mongoose"

const AscensionBossItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    boss: String,
  },
  { collection: "ascension-boss-items" }
)

export default mongoose.models.AscensionBossItem ||
  mongoose.model("AscensionBossItem", AscensionBossItemSchema)
