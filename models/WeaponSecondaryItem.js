import mongoose from "mongoose";

const WeaponSecondaryItemSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    items: [{ name: String, image: String }],
  },
  { collection: "weaponSecondaryItems" }
);

export default mongoose.models.WeaponSecondaryItem ||
  mongoose.model("WeaponSecondaryItem", WeaponSecondaryItemSchema);
