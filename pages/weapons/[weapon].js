import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"

import { getWeapon, getAllWeaponNames } from "../../lib/weapons"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"

export async function getStaticProps({ params }) {
  const weapon = await getWeapon(params.weapon)
  return {
    props: { weapon },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await getAllWeaponNames()
  return {
    paths,
    fallback: false,
  }
}

export default function Weapon({ weapon }) {
  const stars = []
  for (let i = 0; i < weapon.stars; i++) {
    stars.push(<AiFillStar className="pr-1" />)
  }

  return (
    <div className="weapon">
      <Navbar />
      <div className="w-full md:w-9/12 mx-auto">
        <div className="flex items-center bg-gray-900 bg-opacity-60 mb-4">
          <div className="flex flex-col justify-center flex-1 pl-4 sm:pl-8  text-gray-50">
            <h1 className="crimson-font text-3xl sm:text-4xl font-bold">
              {weapon.name.toUpperCase()}
            </h1>
            <div className="flex text-yellow-300 text-2xl sm:text-3xl">
              {stars.map((star, index) => (
                <div key={index}>{star}</div>
              ))}
            </div>
          </div>
          <div className="weapon-image relative">
            <Image
              src={`/assets/weapons/${weapon.image}`}
              alt={`Weapon ${weapon.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 lg:pr-2 mb-4">
            <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center">
              <span className="text-3xl font-semibold pb-1">Details</span>
              <hr className="mb-4" />
              <div className="flex flex-col justify-center">
                <div>
                  <span className="font-medium">Type: </span>
                  <span className="font-light">{weapon.type}</span>
                </div>
                <div>
                  <span className="font-medium">Base ATK: </span>
                  <span className="font-light">{weapon.atk}</span>
                </div>
                <div>
                  <span className="font-medium">Secondary Stat: </span>
                  <span className="font-light">
                    {weapon.secondaryStatValue === 0
                      ? "None"
                      : `${weapon.secondaryStatValue}${weapon.secondaryStat}`}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Location: </span>
                  <span className="font-light">{weapon.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 lg:pl-2 mb-4">
            <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center h-full">
              <span className="text-3xl font-semibold pb-1">Builds</span>
              <hr className="mb-4" />
              <div className="flex flex-wrap justify-center">
                {/* {builds.map((character) => {
                  return (
                    <Link
                      key={character.key}
                      href={`/characters/${character.key.split(" ").join("_")}`}
                    >
                      <a className="px-1">
                        <Image
                          className="rounded-full"
                          src={`/assets/characters/${character.image
                            .split(" ")
                            .join("_")}`}
                          width={90}
                          height={90}
                        />
                      </a>
                    </Link>
                  )
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
