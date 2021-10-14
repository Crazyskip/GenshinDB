import mongoose from "mongoose";

const WeaponPrimaryItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    days: String,
    items: [{ name: String, image: String }],
  },
  { collection: "weaponPrimaryItems" }
);

export default mongoose.models.WeaponPrimaryItem ||
  mongoose.model("WeaponPrimaryItem", WeaponPrimaryItemSchema);
