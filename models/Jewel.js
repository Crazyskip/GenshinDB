import mongoose from "mongoose";

const JewelSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    items: [{ name: String, image: String }],
  },
  { collection: "jewels" }
);

export default mongoose.models.Jewel || mongoose.model("Jewel", JewelSchema);
