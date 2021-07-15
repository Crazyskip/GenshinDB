import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"

export default function Abyss() {
  return (
    <div>
      <Head>
        <title>Spiral Abyss - Genshin Database</title>
        <meta name="description" content="Genshin Impact Database" />
        <meta name="keywords" content="Genshin" />
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
              href="https://preview.redd.it/h9hz6xrztfw61.png?width=2961&format=png&auto=webp&s=280478e62f6f49a521b4907484e92d69f6477835"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/info1.jpg"
                alt="abyss info 1"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/jpoimwrztfw61.png?width=2961&format=png&auto=webp&s=082e7546e9c402dd5b65f6aa9921c22d97c3478c"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/abyss/info2.jpg"
                alt="abyss info 2"
                width={1500}
                height={850}
                layout="responsive"
              />
            </a>
          </div>

          <div className="w-full xl:w-1/2 p-2">
            <a
              href="https://preview.redd.it/qk566a5u3n571.png?width=2981&format=png&auto=webp&s=fbee0ec5f1cb0d55180ac031375911085698f88c"
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
              href="https://preview.redd.it/bc5feh5u3n571.png?width=2981&format=png&auto=webp&s=2707cc704a1c089d09e02ca940ec431df7639628"
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
              href="https://preview.redd.it/z4svrg5u3n571.png?width=2981&format=png&auto=webp&s=fccf57f325aec3be65f9f34f1ebeed3df44e5aab"
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
              href="https://preview.redd.it/rsjl6x5u3n571.png?width=2981&format=png&auto=webp&s=6403ea0aefbd283bd75abc1433528dfad7713bf3"
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
