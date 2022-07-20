import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ascensionItemTemplate,
  ascensionLevelTemplate,
  ascensionMoraTemplate,
} from "../lib/materialTemplates";
import { CharacterWithItems, ItemTemplate } from "../common/types";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

type Props = {
  character: CharacterWithItems;
};

const CharacterAscensionTab = ({ character }: Props) => {
  function getImage(itemRow: ItemTemplate) {
    if (itemRow.item === "jewel") {
      return `/assets/items/gems/${
        character.jewel.items[itemRow.rarity].image
      }`;
    } else if (itemRow.item === "elementalStone") {
      return `/assets/items/ascension/boss/${character.elementalStone.image}`;
    } else if (itemRow.item === "local") {
      return `/assets/items/ascension/character/${character.localItem.image}`;
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        character.commonItem.items[itemRow.rarity].image
      }`;
    }
    return "";
  }

  return (
    <div className="character-ascension-tab">
      <div className="w-80 mx-auto mt-4 p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
        <h3 className="text-4xl text-gray-50 mb-1">Ascension</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                data-tip={JSON.stringify({ item: "jewel", rarity: 3 })}
                data-for="ascensionItem"
                src={`/assets/items/gems/${character.jewel.items[3].image}`}
                alt={character.jewel.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.jewel.name}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                data-tip={JSON.stringify({ item: "elementalStone" })}
                data-for="ascensionItem"
                src={`/assets/items/ascension/boss/${character.elementalStone.image}`}
                alt={character.elementalStone.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.elementalStone.boss}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-11/12 mx-auto text-gray-50 my-4 text-center">
        <div className="flex bg-gray-900 text-lg">
          <div className="w-2/12">Level</div>
          <div className="w-6/12 sm:w-7/12">Materials</div>
          <div className="w-4/12 sm:w-3/12">Mora Cost</div>
        </div>

        {ascensionItemTemplate.map((template, index) => {
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
                <span>Lvl {ascensionLevelTemplate[index]}+</span>
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
                            alt={"talent material"}
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
                      {ascensionMoraTemplate[index]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactTooltip
        id="ascensionItem"
        type="dark"
        effect="solid"
        getContent={(rowItemString) => {
          const rowItem = JSON.parse(rowItemString);
          if (!rowItem) return "";
          if (rowItem.item === "jewel") {
            return character.jewel.items[rowItem.rarity].name;
          } else if (rowItem.item === "elementalStone") {
            return character.elementalStone.name;
          } else if (rowItem.item === "local") {
            return character.localItem.name;
          } else if (rowItem.item === "common") {
            return character.commonItem.items[rowItem.rarity].name;
          }
        }}
      />
    </div>
  );
};

export default CharacterAscensionTab;
