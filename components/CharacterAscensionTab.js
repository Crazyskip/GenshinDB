import Image from "next/image"

export default function CharacterAscensionTab({ character }) {
  function getImage(itemRow) {
    if (itemRow.item === "ascensionGem") {
      return `/assets/items/gems/${
        character.ascensionGem.gems[itemRow.rarity].image
      }`
    } else if (itemRow.item === "ascensionBossItem") {
      return `/assets/items/ascension/${character.ascensionBossItem.image}`
    } else if (itemRow.item === "local") {
      return `/assets/items/local/${character.ascensionItem.image}`
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        character.commonItem.items[itemRow.rarity].image
      }`
    }
  }

  const levelTemplate = ["20", "40", "50", "60", "70", "80"]

  const itemsTemplate = [
    [
      { item: "ascensionGem", rarity: 0, amount: 1 },
      { item: "local", amount: 3 },
      { item: "common", rarity: 0, amount: 3 },
    ],
    [
      { item: "ascensionGem", rarity: 1, amount: 3 },
      { item: "ascensionBossItem", amount: 2 },
      { item: "local", amount: 10 },
      { item: "common", rarity: 0, amount: 15 },
    ],
    [
      { item: "ascensionGem", rarity: 1, amount: 6 },
      { item: "ascensionBossItem", amount: 4 },
      { item: "local", amount: 20 },
      { item: "common", rarity: 1, amount: 12 },
    ],
    [
      { item: "ascensionGem", rarity: 2, amount: 3 },
      { item: "ascensionBossItem", amount: 8 },
      { item: "local", amount: 30 },
      { item: "common", rarity: 1, amount: 18 },
    ],
    [
      { item: "ascensionGem", rarity: 2, amount: 6 },
      { item: "ascensionBossItem", amount: 12 },
      { item: "local", amount: 45 },
      { item: "common", rarity: 2, amount: 12 },
    ],
    [
      { item: "ascensionGem", rarity: 3, amount: 6 },
      { item: "ascensionBossItem", amount: 20 },
      { item: "local", amount: 60 },
      { item: "common", rarity: 2, amount: 24 },
    ],
  ]

  const moraTemplate = [
    "20,000",
    "40,000",
    "60,000",
    "80,000",
    "100,000",
    "120,000",
  ]

  return (
    <div className="character-ascension-tab">
      <div className="w-80 mx-auto mt-4 p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
        <h3 className="text-4xl text-gray-50 mb-1">Ascension</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                src={`/assets/items/gems/${character.ascensionGem.gems[3].image}`}
                alt={character.ascensionGem.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.ascensionGem.name}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                src={`/assets/items/ascension/${character.ascensionBossItem.image}`}
                alt={character.ascensionBossItem.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-2">
              <span>{character.ascensionBossItem.boss}</span>
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

        {itemsTemplate.map((template, index) => {
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
                <span>Lvl {levelTemplate[index]}+</span>
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
                            src={getImage(rowItem)}
                            alt={"talent material"}
                            width={60}
                            height={60}
                            objectFit="fixed"
                          />
                        </div>
                        <div>
                          <span className="ascension-text">
                            x{rowItem.amount}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-4/12 sm:w-3/12">
                <div className="flex justify-center">
                  <div className="mora-image relative">
                    <Image
                      src="/assets/items/currency/mora.png"
                      alt="mora"
                      width={60}
                      height={60}
                      objectFit="responsive"
                    />
                  </div>
                  <div>
                    <span className="ascension-text">
                      {moraTemplate[index]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
