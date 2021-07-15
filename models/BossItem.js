import mongoose from "mongoose"

const BossItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    boss: String,
  },
  { collection: "boss-items" }
)

export default mongoose.models.BossItem ||
  mongoose.model("BossItem", BossItemSchema)
