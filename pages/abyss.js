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
          content="Genshin Impact Spiral Abyss 2.3 infographics with details and recommendations. Contains infographics of all enemies and provides recommendations for elements and techniques for completing"
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, Spiral Abyss, Abyss, 2.3 Abyss, Database, Infographic"
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
              href="https://preview.redd.it/0fme1bqbime71.png?width=1920&format=png&auto=webp&s=d2678c6f66868137674571e8f505f2007b42f504"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor9.webp"
                alt="abyss floor 9"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/tic1kxacime71.png?width=1920&format=png&auto=webp&s=3579eb940e4c1e7d1a0e0b62ac548a68964d6f27"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor10.webp"
                alt="abyss floor 10"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>

          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/p6tsf29snt281.png?width=1920&format=png&auto=webp&s=40f2546e479b8cc20f945ebcd83810b635289b79"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor11.webp"
                alt="abyss floor 11"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/wo2iqz8snt281.png?width=1920&format=png&auto=webp&s=11034082668139fd777e991137b805ecb3317d44"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor12.webp"
                alt="abyss floor 12"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
