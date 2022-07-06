import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"

import { PrismaClient } from "@prisma/client"

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient()
  const artifact = await prisma.artifacts.findUnique({
    where: {
      name: params.artifact,
    },
  })
  return {
    props: { artifact },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const prisma = new PrismaClient()
  const allArtifactNames = await prisma.artifacts.findMany({
    select: {
      name: true,
    },
  })

  const paths = allArtifactNames.map(({ name }) => ({
    params: { artifact: name },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function Artifact({ artifact }) {
  const stars = []
  for (let i = 0; i < artifact.stars; i++) {
    stars.push(<AiFillStar key={artifact.name + i} className="pr-1" />)
  }

  return (
    <div className="artifact">
      <Head>
        <title>{artifact.name} - Genshin Database</title>
        <meta
          name="description"
          content={`Genshin Impact artifact set ${artifact.name} details and bonuses`}
        />
        <meta
          name="keywords"
          content={`${artifact.name}, Artifact, Genshin Impact, Genshin,database`}
        />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar />
      <div className="flex items-center w-full md:w-3/4 mx-auto bg-gray-900 bg-opacity-60 mb-4">
        <div className="flex flex-col justify-center flex-1 pl-4 sm:pl-8 py-4 sm:py-6 text-gray-50">
          <h1 className="crimson-font text-3xl sm:text-4xl font-bold">
            {artifact.name.toUpperCase()}
          </h1>
          <div className="flex text-yellow-300 text-2xl sm:text-3xl">
            {stars.map((star) => star)}
          </div>
        </div>
        <div className="artifact-image relative">
          <Image
            src={`/assets/artifacts/${artifact.images[0]}.webp`}
            alt={`Artifact ${artifact.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto w-full md:w-9/12">
        <div className="w-full lg:w-6/12 lg:pr-2 mb-4">
          <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center">
            <span className="text-3xl font-semibold pb-1">Pieces</span>
            <hr className="mb-4" />
            <div className="flex flex-wrap justify-center">
              {artifact.images.map((image) => {
                return (
                  <Image
                    key={image}
                    src={`/assets/artifacts/${image}.webp`}
                    alt={`Artifact ${artifact.name}`}
                    height={94}
                    width={94}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 lg:pl-2 mb-4">
          <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center">
            <span className="text-3xl font-semibold pb-1">Set Bonus</span>
            <hr className="artifact-hr mb-4" />
            {artifact.bonus.map((bonus, index) => {
              return (
                <div key={bonus}>
                  <div className="text-lg xl:text-xl text-center font-semibold leading-none">
                    {(index + 1) * 2} Pieces
                  </div>
                  <div className="text-sm xl:text-base text-center pb-4">
                    {artifact.bonus[index]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
