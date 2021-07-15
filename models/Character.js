import mongoose from "mongoose"

const CharacterSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    stars: Number,
    element: String,
    weapon: String,
    talent_book_name: String,
    boss_item_name: String,
    ascension_gem_name: String,
    ascension_boss_item_name: String,
    ascension_item_name: String,
    common_item_name: String,
  },
  { collection: "characters" }
)

export default mongoose.models.Character ||
  mongoose.model("Character", CharacterSchema)
