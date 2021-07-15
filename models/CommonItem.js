import mongoose from "mongoose"

const CommonItemSchema = new mongoose.Schema(
  {
    name: String,
    books: [{ name: String, image: String }],
    image: String,
  },
  { collection: "common-items" }
)

export default mongoose.models.CommonItem ||
  mongoose.model("CommonItem", CommonItemSchema)
