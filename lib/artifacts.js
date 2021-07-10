import { connectToDatabase } from "../util/mongodb"

export async function getArtifacts() {
  const { db } = await connectToDatabase()

  const artifacts = await db
    .collection("artifacts")
    .find({})
    .sort({ stars: 1 })
    .toArray()

  return JSON.parse(JSON.stringify(artifacts))
}

export async function getArtifact(artifactName) {
  const { db } = await connectToDatabase()

  const artifact = await db
    .collection("artifacts")
    .findOne({ name: artifactName.split("_").join(" ") })

  return JSON.parse(JSON.stringify(artifact))
}

export async function getAllArtifactNames() {
  const { db } = await connectToDatabase()

  const artifacts = await db
    .collection("artifacts")
    .find({})
    .project({ name: 1 })
    .toArray()

  return artifacts.map((artifact) => {
    return {
      params: {
        artifact: artifact.name.split(" ").join("_"),
      },
    }
  })
}
