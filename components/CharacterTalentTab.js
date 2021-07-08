import Image from "next/image"

export default function CharacterTalentTab({ character }) {
  function getImage(itemRow) {
    if (itemRow.item === "talentBook") {
      return `/assets/items/talents/${
        character.talentBook.books[itemRow.rarity].image
      }`
    } else if (itemRow.item === "common") {
      return `/assets/items/common/${
        character.commonItem.items[itemRow.rarity].image
      }`
    } else if (itemRow.item === "bossItem") {
      return `/assets/items/talents/${character.bossItem.image}`
    } else if (itemRow.item === "crown") {
      return "/assets/items/talents/crown_of_sagehood.png"
    }
  }

  const itemsTemplate = [
    [
      { item: "talentBook", rarity: 0, amount: 3 },
      { item: "common", rarity: 0, amount: 3 },
    ],
    [
      { item: "talentBook", rarity: 1, amount: 2 },
      { item: "common", rarity: 1, amount: 3 },
    ],
    [
      { item: "talentBook", rarity: 1, amount: 4 },
      { item: "common", rarity: 1, amount: 4 },
    ],
    [
      { item: "talentBook", rarity: 1, amount: 6 },
      { item: "common", rarity: 1, amount: 6 },
    ],
    [
      { item: "talentBook", rarity: 1, amount: 9 },
      { item: "common", rarity: 1, amount: 9 },
    ],
    [
      { item: "talentBook", rarity: 2, amount: 4 },
      { item: "common", rarity: 2, amount: 4 },
      { item: "bossItem", amount: 1 },
    ],
    [
      { item: "talentBook", rarity: 2, amount: 6 },
      { item: "common", rarity: 2, amount: 6 },
      { item: "bossItem", amount: 1 },
    ],
    [
      { item: "talentBook", rarity: 2, amount: 12 },
      { item: "common", rarity: 2, amount: 9 },
      { item: "bossItem", amount: 2 },
    ],
    [
      { item: "talentBook", rarity: 2, amount: 12 },
      { item: "common", rarity: 2, amount: 9 },
      { item: "bossItem", amount: 2 },
      { item: "crown", amount: 1 },
    ],
  ]

  const moraTemplate = [
    "12,500",
    "17,500",
    "25,000",
    "30,000",
    "35,000",
    "120,000",
    "260,000",
    "450,000",
    "700,000",
  ]

  return (
    <div className="character-talent-tab">
      <div className="w-80 mx-auto mt-4 p-4 bg-gray-900 bg-opacity-70 text-gray-50 text-center">
        <h3 className="text-4xl text-gray-50 mb-1">Talents</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="item-image relative">
              <Image
                src={`/assets/items/talents/${character.talentBook.books[0].image}`}
                alt={character.talentBook.books[0].name}
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
                            src={getImage(rowItem)}
                            alt={"talent material"}
                            width={60}
                            height={60}
                            objectFit="fixed"
                          />
                        </div>
                        <div>
                          <span className="talent-text">x{rowItem.amount}</span>
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
                    <span className="talent-text">{moraTemplate[index]}</span>
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
