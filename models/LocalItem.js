import mongoose from "mongoose";

const LocalItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
  },
  { collection: "localItems" }
);

export default mongoose.models.LocalItem ||
  mongoose.model("LocalItem", LocalItemSchema);
