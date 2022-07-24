import Image from "next/image";
import dynamic from "next/dynamic";
import {
  talentItemsTemplate,
  talentMoraTemplate,
} from "../lib/materialTemplates";
import { CharacterWithItems, ItemTemplate } from "../common/types";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

type Props = {
  character: CharacterWithItems;
};

const CharacterTalentTab = ({ character }: Props) => {
  function getImage(itemRow: ItemTemplate) {
    if (itemRow.item === "talentBook") {
      return `/assets/items/talents/${
        character.talentBook.items[itemRow.rarity].image
      }`;
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        character.commonItem.items[itemRow.rarity].image
      }`;
    } else if (itemRow.item === "bossItem") {
      return `/assets/items/talents/${character.bossItem.image}`;
    } else if (itemRow.item === "crown") {
      return "/assets/items/talents/crown_of_sagehood.webp";
    }
    return "";
  }

  return (
    <div className="character-talent-tab">
      <div className="w-80 mx-auto mt-4 p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
        <h3 className="text-4xl text-gray-50 mb-1">Talents</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                data-tip={JSON.stringify({ item: "talentBook", rarity: 0 })}
                data-for="talentItem"
                src={`/assets/items/talents/${character.talentBook.items[0].image}`}
                alt={character.talentBook.items[0].name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.talentBook.days}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                data-tip={JSON.stringify({ item: "bossItem" })}
                data-for="talentItem"
                src={`/assets/items/talents/${character.bossItem.image}`}
                alt={character.bossItem.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.bossItem.boss}</span>
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

        {talentItemsTemplate.map((template, index) => {
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
                <span>Lvl {index + 2}</span>
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
                            data-for="talentItem"
                            src={getImage(rowItem)}
                            alt={"talent material"}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <span className="talent-text">x{rowItem.amount}</span>
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
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <span className="talent-text">
                      {talentMoraTemplate[index]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactTooltip
        id="talentItem"
        type="dark"
        effect="solid"
        getContent={(rowItemString) => {
          const rowItem = JSON.parse(rowItemString);
          if (!rowItem) return "";
          if (rowItem.item === "talentBook") {
            return character.talentBook.items[rowItem.rarity].name;
          } else if (rowItem.item === "common") {
            return character.commonItem.items[rowItem.rarity].name;
          } else if (rowItem.item === "bossItem") {
            return character.bossItem.name;
          } else if (rowItem.item === "crown") {
            return "Crown of Sagehood";
          }
        }}
      />
    </div>
  );
};

export default CharacterTalentTab;
