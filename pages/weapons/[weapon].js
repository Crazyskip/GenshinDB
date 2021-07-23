import Head from "next/head"
import Image from "next/image"
import Navbar from "../../components/Navbar"

import { getWeapon, getAllWeaponNames } from "../../lib/weapons"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"

export async function getStaticProps({ params }) {
  const weapon = await getWeapon(params.weapon)
  return {
    props: { weapon },
    revalidate: 60,
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

  function getImage(itemRow) {
    if (itemRow.item === "ascensionItem1") {
      return `/assets/items/ascension/weapon1/${
        weapon.ascensionItem1.images[itemRow.rarity]
      }`
    } else if (itemRow.item === "ascensionItem2") {
      return `/assets/items/ascension/weapon2/${
        weapon.ascensionItem2.images[itemRow.rarity]
      }`
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        weapon.commonItem.items[itemRow.rarity].image
      }`
    }
  }

  const levelTemplate = ["20", "40", "50", "60", "70", "80"]

  const itemTemplates = [
    [
      [
        { item: "ascensionItem1", rarity: 0, amount: 1 },
        { item: "ascensionItem2", rarity: 0, amount: 1 },
        { item: "common", rarity: 0, amount: 1 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 1 },
        { item: "ascensionItem2", rarity: 0, amount: 4 },
        { item: "common", rarity: 0, amount: 2 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 2 },
        { item: "ascensionItem2", rarity: 1, amount: 2 },
        { item: "common", rarity: 1, amount: 2 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 1 },
        { item: "ascensionItem2", rarity: 1, amount: 4 },
        { item: "common", rarity: 1, amount: 3 },
      ],
    ],
    [
      [
        { item: "ascensionItem1", rarity: 0, amount: 1 },
        { item: "ascensionItem2", rarity: 0, amount: 1 },
        { item: "common", rarity: 0, amount: 1 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 1 },
        { item: "ascensionItem2", rarity: 0, amount: 5 },
        { item: "common", rarity: 0, amount: 4 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 3 },
        { item: "ascensionItem2", rarity: 1, amount: 3 },
        { item: "common", rarity: 1, amount: 3 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 1 },
        { item: "ascensionItem2", rarity: 1, amount: 5 },
        { item: "common", rarity: 1, amount: 4 },
      ],
    ],
    [
      [
        { item: "ascensionItem1", rarity: 0, amount: 2 },
        { item: "ascensionItem2", rarity: 0, amount: 2 },
        { item: "common", rarity: 0, amount: 1 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 2 },
        { item: "ascensionItem2", rarity: 0, amount: 8 },
        { item: "common", rarity: 0, amount: 5 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 4 },
        { item: "ascensionItem2", rarity: 1, amount: 4 },
        { item: "common", rarity: 1, amount: 4 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 2 },
        { item: "ascensionItem2", rarity: 1, amount: 8 },
        { item: "common", rarity: 1, amount: 6 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 4 },
        { item: "ascensionItem2", rarity: 2, amount: 6 },
        { item: "common", rarity: 2, amount: 4 },
      ],
      [
        { item: "ascensionItem1", rarity: 3, amount: 3 },
        { item: "ascensionItem2", rarity: 2, amount: 12 },
        { item: "common", rarity: 2, amount: 8 },
      ],
    ],
    [
      [
        { item: "ascensionItem1", rarity: 0, amount: 3 },
        { item: "ascensionItem2", rarity: 0, amount: 3 },
        { item: "common", rarity: 0, amount: 2 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 3 },
        { item: "ascensionItem2", rarity: 0, amount: 12 },
        { item: "common", rarity: 0, amount: 8 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 6 },
        { item: "ascensionItem2", rarity: 1, amount: 6 },
        { item: "common", rarity: 1, amount: 6 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 3 },
        { item: "ascensionItem2", rarity: 1, amount: 12 },
        { item: "common", rarity: 1, amount: 9 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 6 },
        { item: "ascensionItem2", rarity: 2, amount: 9 },
        { item: "common", rarity: 2, amount: 6 },
      ],
      [
        { item: "ascensionItem1", rarity: 3, amount: 4 },
        { item: "ascensionItem2", rarity: 2, amount: 18 },
        { item: "common", rarity: 2, amount: 12 },
      ],
    ],
    [
      [
        { item: "ascensionItem1", rarity: 0, amount: 5 },
        { item: "ascensionItem2", rarity: 0, amount: 5 },
        { item: "common", rarity: 0, amount: 3 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 5 },
        { item: "ascensionItem2", rarity: 0, amount: 18 },
        { item: "common", rarity: 0, amount: 12 },
      ],
      [
        { item: "ascensionItem1", rarity: 1, amount: 9 },
        { item: "ascensionItem2", rarity: 1, amount: 9 },
        { item: "common", rarity: 1, amount: 9 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 5 },
        { item: "ascensionItem2", rarity: 1, amount: 18 },
        { item: "common", rarity: 1, amount: 14 },
      ],
      [
        { item: "ascensionItem1", rarity: 2, amount: 9 },
        { item: "ascensionItem2", rarity: 2, amount: 14 },
        { item: "common", rarity: 2, amount: 9 },
      ],
      [
        { item: "ascensionItem1", rarity: 3, amount: 6 },
        { item: "ascensionItem2", rarity: 2, amount: 27 },
        { item: "common", rarity: 2, amount: 18 },
      ],
    ],
  ]

  const moraTemplates = [
    ["5,000", "5,000", "5,000", "10,000"],
    ["5,000", "5,000", "5,000", "10,000", "15,000"],
    ["5,000", "10,000", "15,000", "20,000", "25,000", "30,000"],
    ["5,000", "15,000", "20,000", "30,000", "35,000", "45,000"],
    ["10,000", "20,000", "30,000", "45,000", "55,000", "65,000"],
  ]

  return (
    <div className="weapon">
      <Head>
        <title>{weapon.name} - Genshin Database</title>
        <meta
          name="description"
          content={`Genshin Impact ${weapon.name} ascension requirements and refinement details`}
        />
        <meta
          name="keywords"
          content={`Genshin Impact,Genshin,database,${weapon.name}`}
        />
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
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
          <div className="w-full lg:w-6/12 lg:pr-2 mb-4 mx-auto">
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
        </div>

        <div className="w-80 mx-auto p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
          <h3 className="text-4xl text-gray-50 mb-1">Ascension</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="item-image relative">
                <Image
                  src={`/assets/items/ascension/weapon1/${weapon.ascensionItem1.images[0]}`}
                  alt={weapon.ascensionItem1.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mx-2">
                <span>{weapon.ascensionItem1.days}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto text-gray-50 my-4 text-center">
          <div className="flex bg-gray-900 text-lg">
            <div className="w-2/12">Level</div>
            <div className="w-6/12 sm:w-7/12">Materials</div>
            <div className="w-4/12 sm:w-3/12">Mora Cost</div>
          </div>

          {itemTemplates[weapon.stars - 1].map((template, index) => {
            return (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2
                    ? "bg-gray-900 bg-opacity-90"
                    : "bg-gray-900 bg-opacity-70"
                }`}
              >
                <div className="w-2/12">
                  <span>Lvl {levelTemplate[index]}+</span>
                </div>

                <div className="w-6/12 sm:w-7/12">
                  <div className="flex flex-col justify-center sm:flex-row">
                    {template.map((rowItem) => {
                      return (
                        <div
                          key={`${rowItem.item} ${index} ${rowItem.amount}`}
                          className="flex justify-center"
                        >
                          <div className="item-image relative">
                            <Image
                              src={getImage(rowItem)}
                              alt={"talent material"}
                              width={60}
                              height={60}
                              objectFit="fixed"
                            />
                          </div>
                          <div>
                            <span className="ascension-text">
                              x{rowItem.amount}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="w-4/12 sm:w-3/12">
                  <div className="flex justify-center">
                    <div className="mora-image relative">
                      <Image
                        src="/assets/items/currency/mora.png"
                        alt="mora"
                        width={60}
                        height={60}
                        objectFit="responsive"
                      />
                    </div>
                    <div>
                      <span className="ascension-text">
                        {moraTemplates[weapon.stars - 1][index]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full lg:w-6/12 mx-auto mb-4">
          <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center h-full">
            <span className="text-3xl font-semibold pb-1">Refinements</span>
            <hr className="artifact-hr mb-4" />
            <div className="flex flex-col items-center">
              {weapon.refinement.map((refinement, index) => {
                return (
                  <div key={refinement} className="text-center">
                    <div className="text-xl font-semibold leading-none">
                      Level {index + 1}
                    </div>
                    <div className="pb-6 px-8 sm:px-12 md:px-4">
                      {refinement}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
