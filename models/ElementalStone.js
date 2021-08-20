import mongoose from "mongoose";

const ElementalStoneSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    boss: String,
  },
  { collection: "elementalStones" }
);

export default mongoose.models.ElementalStone ||
  mongoose.model("ElementalStone", ElementalStoneSchema);
