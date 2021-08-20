import mongoose from "mongoose";

const BossItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    boss: String,
  },
  { collection: "bossItems" }
);

export default mongoose.models.BossItem ||
  mongoose.model("BossItem", BossItemSchema);
