import mongoose from "mongoose"

const AscensionItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    type: String,
  },
  { collection: "ascension-items" }
)

export default mongoose.models.AscensionItem ||
  mongoose.model("AscensionItem", AscensionItemSchema)
