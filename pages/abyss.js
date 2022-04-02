import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"

export default function Abyss() {
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
        <meta name="author" content="Damon Jensen" />
        <meta
          name="viewport"
          content="initial-scale=0.9, width=device-width, user-scalable=no"
        />
      </Head>
      <Navbar page="Spiral Abyss" />
      <div className="abyss mx-auto text-gray-50">
        <h2 className="text-4xl sm:text-5xl text-center font-semibold">
          Spiral Abyss
        </h2>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://i.imgur.com/Md49mdB.png"
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
              href="https://i.imgur.com/o8bMjLy.png"
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
              href="https://preview.redd.it/ilt6qsimjyq81.png?width=2981&format=png&auto=webp&s=19e5afad92913645891bb38ba5ad9b75e21c3d1c"
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
              href="https://preview.redd.it/onbqenimjyq81.png?width=2981&format=png&auto=webp&s=017f38676d2463ea5b3f2263af9da06da1ab0c45"
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
  )
}
