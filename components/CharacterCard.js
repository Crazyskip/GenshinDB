import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card m-1 bg-gray-900 bg-opacity-60 hover:bg-opacity-80">
      <Link href={`/characters/${character.slug}`}>
        <a>
          <div className="flex">
            <div className="flex flex-col flex-1 px-6 justify-center">
              <h3 className="crimson-font font-bold text-3xl leading-7 sm:text-4xl">
                {character.name.toUpperCase()}
              </h3>
              <div className="text-xl">
                <span>{character.stars} ✦ </span>
                <span className="crimson-font font-bold">
                  {character.element.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="character-image relative">
              <Image
                src={`/assets/characters/${character.image}`}
                alt={`Character ${character.name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
