import dbConnect from "../util/dbConnect"

import Artifact from "../models/Artifact"

export async function getArtifacts() {
  await dbConnect()

  const artifacts = await Artifact.find({}).sort({ stars: -1, name: 1 })

  return JSON.parse(JSON.stringify(artifacts))
}

export async function getArtifact(artifactName) {
  await dbConnect()

  const artifact = await Artifact.findOne({
    name: artifactName.split("_").join(" "),
  })

  return JSON.parse(JSON.stringify(artifact))
}

export async function getAllArtifactNames() {
  await dbConnect()

  const artifacts = await Artifact.find({}).select("name")

  return artifacts.map((artifact) => {
    return {
      params: {
        artifact: artifact.name.split(" ").join("_"),
      },
    }
  })
}
