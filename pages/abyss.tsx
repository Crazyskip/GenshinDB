import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Abyss: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spiral Abyss - Genshin Database</title>
        <meta
          name="description"
          content="Genshin Impact Spiral Abyss 2.4 infographics with details and recommendations. Contains infographics of all enemies and provides recommendations for elements and techniques for completing"
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, Spiral Abyss, Abyss, 2.4 Abyss, Database, Infographic"
        />
        <meta name="author" content="Crazyskip" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar page="Spiral Abyss" />
      <div className="abyss mx-auto text-gray-50">
        <h1 className="text-4xl sm:text-5xl text-center font-semibold">
          Spiral Abyss
        </h1>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/u75ri8d05w291.png?width=2981&format=png&auto=webp&s=3ec70f4ca2ff6ff07be7c3b4cb75f28b13142388"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor9.webp"
                alt="abyss floor 9"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/tai5xbd05w291.png?width=2981&format=png&auto=webp&s=08d840d8e715bbf6390ea38cf2c2a12d78dd58ee"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor10.webp"
                alt="abyss floor 10"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>

          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/kkayrvb2o7c91.png?width=3230&format=png&auto=webp&s=8d2e7d688333f14eb933bba62791784879665118"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor11.webp"
                alt="abyss floor 11"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/b3ko5erqp7c91.png?width=3230&format=png&auto=webp&s=ee66ee7985f154b8e0d69afe7279f5db43184d18"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor12.webp"
                alt="abyss floor 12"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abyss;
