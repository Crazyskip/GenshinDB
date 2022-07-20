import Image from "next/image";
import { ItemTemplate, WeaponWithItems } from "../common/types";
import {
  weaponItemTemplate,
  weaponLevelTemplate,
  weaponMoraTemplate,
} from "../lib/materialTemplates";

type Props = {
  weapon: WeaponWithItems;
};

const WeaponAscensionTable = ({ weapon }: Props) => {
  function getImage(itemRow: ItemTemplate) {
    if (itemRow.item === "ascensionItem1") {
      return `/assets/items/ascension/weapon1/${
        weapon.primaryItem.items[itemRow.rarity].image
      }`;
    } else if (itemRow.item === "ascensionItem2") {
      return `/assets/items/ascension/weapon2/${
        weapon.secondaryItem.items[itemRow.rarity].image
      }`;
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        weapon.commonItem.items[itemRow.rarity].image
      }`;
    }
    return "";
  }

  return (
    <>
      <div className="w-80 mx-auto p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
        <h3 className="text-4xl text-gray-50 mb-1">Ascension</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                data-tip={JSON.stringify({
                  item: "ascensionItem1",
                  rarity: 0,
                })}
                data-for="ascensionItem"
                src={`/assets/items/ascension/weapon1/${weapon.primaryItem.items[0].image}`}
                alt={weapon.primaryItem.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{weapon.primaryItem.days}</span>
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

        {weaponItemTemplate[weapon.stars - 1].map((template, index) => {
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
                <span>Lvl {weaponLevelTemplate[index]}+</span>
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
                            data-tip={JSON.stringify(rowItem)}
                            data-for="ascensionItem"
                            src={getImage(rowItem)}
                            alt={"weapon ascension material"}
                            width={60}
                            height={60}
                            layout="fixed"
                          />
                        </div>
                        <div>
                          <span className="ascension-text">
                            x{rowItem.amount}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-4/12 sm:w-3/12">
                <div className="flex justify-center">
                  <div className="mora-image relative">
                    <Image
                      src="/assets/items/currency/mora.webp"
                      alt="mora"
                      width={60}
                      height={60}
                      layout="responsive"
                    />
                  </div>
                  <div>
                    <span className="ascension-text">
                      {weaponMoraTemplate[weapon.stars - 1][index]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeaponAscensionTable;
