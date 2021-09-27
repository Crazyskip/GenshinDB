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
          content="Genshin Impact Spiral Abyss 2.1 details and recommendations."
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, Spiral Abyss, Abyss, 2.1 Abyss, Database"
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
                src="/assets/abyss/floor9.jpg"
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
                src="/assets/abyss/floor10.jpg"
                alt="abyss floor 10"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>

          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/0kalsfabysn71.png?width=1920&format=png&auto=webp&s=2560f14fb3417d1a50ac591625230905ed873a28"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor11.jpg"
                alt="abyss floor 11"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/9l9j3cqdysn71.png?width=1920&format=png&auto=webp&s=d36dbeb91a5527d69f86e5c4226653c90b6f68c4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/floor12.jpg"
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
