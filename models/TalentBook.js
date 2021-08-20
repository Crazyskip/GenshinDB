import mongoose from "mongoose";

const TalentBookSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    items: [{ name: String, image: String }],
    days: String,
  },
  { collection: "talentBooks" }
);

export default mongoose.models.TalentBook ||
  mongoose.model("TalentBook", TalentBookSchema);
