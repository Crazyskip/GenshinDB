import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    stars: Number,
    element: String,
    weapon: String,
    talentBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TalentBook",
    },
    elementalStone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ElementalStone",
    },
    localItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LocalItem",
    },
    bossItem: { type: mongoose.Schema.Types.ObjectId, ref: "BossItem" },
    jewel: { type: mongoose.Schema.Types.ObjectId, ref: "Jewel" },
    commonItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommonItem",
    },
  },
  { collection: "characters" }
);

export default mongoose.models.Character ||
  mongoose.model("Character", CharacterSchema);
