import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { WeaponWithItems } from "../../common/types";
import WeaponAscensionTable from "../../components/WeaponAscensionTable";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

type PageProps = {
  weapon: WeaponWithItems;
};

const WeaponPage: NextPage<PageProps> = ({ weapon }) => {
  const stars = [];
  for (let i = 0; i < weapon.stars; i++) {
    stars.push(<AiFillStar className="pr-1" />);
  }

  return (
    <div className="weapon">
      <Head>
        <title>{weapon.name} - Genshin Database</title>
        <meta
          name="description"
          content={`Genshin Impact weapon ${weapon.name} ascension requirements and refinement details`}
        />
        <meta
          name="keywords"
          content={`${weapon.name}, weapon, Genshin Impact, Genshin, database`}
        />
        <meta name="author" content="Crazyskip" />
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
              priority
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

        <WeaponAscensionTable weapon={weapon} />

        <div className="w-full lg:w-6/12 mx-auto mb-4">
          <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center h-full">
            <span className="text-3xl font-semibold pb-1">Refinements</span>
            <hr className="artifact-hr mb-4" />
            <div className="flex flex-col items-center">
              {weapon.refinements.map((refinement, index) => {
                return (
                  <div key={refinement} className="text-center">
                    <div className="text-xl font-semibold leading-none">
                      Level {index + 1}
                    </div>
                    <div className="pb-6 px-8 sm:px-12 md:px-4">
                      {refinement}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip
        id="ascensionItem"
        type="dark"
        effect="solid"
        getContent={(rowItemString) => {
          const rowItem = JSON.parse(rowItemString);
          if (!rowItem) return "";
          if (rowItem.item === "ascensionItem1") {
            return weapon.primaryItem.items[rowItem.rarity].name;
          } else if (rowItem.item === "ascensionItem2") {
            return weapon.secondaryItem.items[rowItem.rarity].name;
          } else if (rowItem.item === "common") {
            return weapon.commonItem.items[rowItem.rarity].name;
          }
        }}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const weapon = await prisma.weapon.findUnique({
    where: { slug: context.params?.weapon as string },
    include: {
      primaryItem: true,
      secondaryItem: true,
      commonItem: true,
    },
  });
  return {
    props: { weapon },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();
  const weaponSlugs = await prisma.weapon.findMany({
    select: {
      slug: true,
    },
  });

  const paths = weaponSlugs.map((weapon) => ({
    params: { weapon: weapon.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default WeaponPage;
