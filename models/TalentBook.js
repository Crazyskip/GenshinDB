import mongoose from "mongoose"

const TalentBookSchema = new mongoose.Schema(
  {
    name: String,
    books: [{ name: String, image: String }],
    days: String,
  },
  { collection: "talent-books" }
)

export default mongoose.models.TalentBook ||
  mongoose.model("TalentBook", TalentBookSchema)
