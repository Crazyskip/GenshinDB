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
              href="https://preview.redd.it/r90wgypft3r91.png?width=3230&format=png&auto=webp&s=9f98668802f5bfe9f8ee29b38b2aea1412c50f9f"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor9.webp"
                alt="abyss floor 9"
                width={2198}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/aiet3brft3r91.png?width=3230&format=png&auto=webp&s=2412dc95cea85da671814526eadecab854c24f74"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor10.webp"
                alt="abyss floor 10"
                width={2198}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>

          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/zf30zlqft3r91.png?width=3230&format=png&auto=webp&s=836fd6a52404c4cec96b3feadf70e563bbe441cf"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor11.webp"
                alt="abyss floor 11"
                width={2198}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/myu5ulqft3r91.png?width=3229&format=png&auto=webp&s=185a574e7d4e39e628f34fc2612c34e378e1e2ca"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor12.webp"
                alt="abyss floor 12"
                width={2198}
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
