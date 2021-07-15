import mongoose from "mongoose"

const AscensionGemSchema = new mongoose.Schema(
  {
    name: String,
    gems: [{ name: String, image: String }],
  },
  { collection: "ascension-gems" }
)

export default mongoose.models.AscensionGem ||
  mongoose.model("AscensionGem", AscensionGemSchema)
