import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

export default function WeaponCard({ weapon }) {
  const stars = [];
  for (let i = 0; i < weapon.stars; i++) {
    stars.push(<AiFillStar key={i} className="pr-1" />);
  }
  return (
    <div className="weapon-card m-1 bg-gray-900 bg-opacity-60 hover:bg-opacity-80">
      <Link href={`/weapons/${weapon.slug}`}>
        <a>
          <div className="flex">
            <div className="flex flex-col flex-1 px-6 justify-center">
              <h3 className="crimson-font font-bold text-2xl sm:text-3xl xl:text-4xl">
                {weapon.name.toUpperCase()}
              </h3>
              <div className="flex text-yellow-300 text-2xl sm:text-3xl">
                {stars.map((star) => star)}
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
        </a>
      </Link>
    </div>
  );
}
