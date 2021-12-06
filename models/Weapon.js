import mongoose from "mongoose";

const WeaponSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    stars: Number,
    type: String,
    atk: String,
    secondaryStat: String,
    secondaryStatValue: Number,
    location: String,
    refinements: [String],
    weaponPrimaryItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WeaponPrimaryItem",
    },
    weaponSecondaryItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WeaponSecondaryItem",
    },
    commonItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommonItem",
    },
  },
  { collection: "weapons" }
);

export default mongoose.models.Weapon || mongoose.model("Weapon", WeaponSchema);
