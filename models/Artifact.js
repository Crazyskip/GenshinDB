import mongoose from "mongoose";

const ArtifactSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    stars: Number,
    images: [String],
    bonus: [String],
  },
  { collection: "artifacts" }
);

export default mongoose.models.Artifact ||
  mongoose.model("Artifact", ArtifactSchema);
