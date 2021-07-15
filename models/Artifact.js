import mongoose from "mongoose"

const ArtifactSchema = new mongoose.Schema(
  {
    name: String,
    stars: Number,
    images: [String],
    bonus: [String],
  },
  { collection: "artifacts" }
)

export default mongoose.models.Artifact ||
  mongoose.model("Artifact", ArtifactSchema)
