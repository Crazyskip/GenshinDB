import mongoose from "mongoose";

const CommonItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    items: [{ name: String, image: String }],
  },
  { collection: "commonItems" }
);

export default mongoose.models.CommonItem ||
  mongoose.model("CommonItem", CommonItemSchema);
