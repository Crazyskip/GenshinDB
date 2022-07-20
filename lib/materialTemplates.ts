import { ItemTemplate, WeaponItem } from "../common/types";

export const talentItemsTemplate: ItemTemplate[][] = [
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
    { item: "bossItem", rarity: 0, amount: 1 },
  ],
  [
    { item: "talentBook", rarity: 2, amount: 6 },
    { item: "common", rarity: 2, amount: 6 },
    { item: "bossItem", rarity: 0, amount: 1 },
  ],
  [
    { item: "talentBook", rarity: 2, amount: 12 },
    { item: "common", rarity: 2, amount: 9 },
    { item: "bossItem", rarity: 0, amount: 2 },
  ],
  [
    { item: "talentBook", rarity: 2, amount: 16 },
    { item: "common", rarity: 2, amount: 12 },
    { item: "bossItem", rarity: 0, amount: 2 },
    { item: "crown", rarity: 0, amount: 1 },
  ],
];

export const talentMoraTemplate: string[] = [
  "12,500",
  "17,500",
  "25,000",
  "30,000",
  "35,000",
  "120,000",
  "260,000",
  "450,000",
  "700,000",
];

export const ascensionMoraTemplate: string[] = [
  "20,000",
  "40,000",
  "60,000",
  "80,000",
  "100,000",
  "120,000",
];

export const ascensionLevelTemplate: string[] = [
  "20",
  "40",
  "50",
  "60",
  "70",
  "80",
];

export const ascensionItemTemplate: ItemTemplate[][] = [
  [
    { item: "jewel", rarity: 0, amount: 1 },
    { item: "local", rarity: 0, amount: 3 },
    { item: "common", rarity: 0, amount: 3 },
  ],
  [
    { item: "jewel", rarity: 1, amount: 3 },
    { item: "elementalStone", rarity: 0, amount: 2 },
    { item: "local", rarity: 0, amount: 10 },
    { item: "common", rarity: 0, amount: 15 },
  ],
  [
    { item: "jewel", rarity: 1, amount: 6 },
    { item: "elementalStone", rarity: 0, amount: 4 },
    { item: "local", rarity: 0, amount: 20 },
    { item: "common", rarity: 1, amount: 12 },
  ],
  [
    { item: "jewel", rarity: 2, amount: 3 },
    { item: "elementalStone", rarity: 0, amount: 8 },
    { item: "local", rarity: 0, amount: 30 },
    { item: "common", rarity: 1, amount: 18 },
  ],
  [
    { item: "jewel", rarity: 2, amount: 6 },
    { item: "elementalStone", rarity: 0, amount: 12 },
    { item: "local", rarity: 0, amount: 45 },
    { item: "common", rarity: 2, amount: 12 },
  ],
  [
    { item: "jewel", rarity: 3, amount: 6 },
    { item: "elementalStone", rarity: 0, amount: 20 },
    { item: "local", rarity: 0, amount: 60 },
    { item: "common", rarity: 2, amount: 24 },
  ],
];

export const weaponLevelTemplate: string[] = [
  "20",
  "40",
  "50",
  "60",
  "70",
  "80",
];

export const weaponItemTemplate: WeaponItem[][] = [
  [
    [
      { item: "ascensionItem1", rarity: 0, amount: 1 },
      { item: "ascensionItem2", rarity: 0, amount: 1 },
      { item: "common", rarity: 0, amount: 1 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 1 },
      { item: "ascensionItem2", rarity: 0, amount: 4 },
      { item: "common", rarity: 0, amount: 2 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 2 },
      { item: "ascensionItem2", rarity: 1, amount: 2 },
      { item: "common", rarity: 1, amount: 2 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 1 },
      { item: "ascensionItem2", rarity: 1, amount: 4 },
      { item: "common", rarity: 1, amount: 3 },
    ],
  ],
  [
    [
      { item: "ascensionItem1", rarity: 0, amount: 1 },
      { item: "ascensionItem2", rarity: 0, amount: 1 },
      { item: "common", rarity: 0, amount: 1 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 1 },
      { item: "ascensionItem2", rarity: 0, amount: 5 },
      { item: "common", rarity: 0, amount: 4 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 3 },
      { item: "ascensionItem2", rarity: 1, amount: 3 },
      { item: "common", rarity: 1, amount: 3 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 1 },
      { item: "ascensionItem2", rarity: 1, amount: 5 },
      { item: "common", rarity: 1, amount: 4 },
    ],
  ],
  [
    [
      { item: "ascensionItem1", rarity: 0, amount: 2 },
      { item: "ascensionItem2", rarity: 0, amount: 2 },
      { item: "common", rarity: 0, amount: 1 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 2 },
      { item: "ascensionItem2", rarity: 0, amount: 8 },
      { item: "common", rarity: 0, amount: 5 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 4 },
      { item: "ascensionItem2", rarity: 1, amount: 4 },
      { item: "common", rarity: 1, amount: 4 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 2 },
      { item: "ascensionItem2", rarity: 1, amount: 8 },
      { item: "common", rarity: 1, amount: 6 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 4 },
      { item: "ascensionItem2", rarity: 2, amount: 6 },
      { item: "common", rarity: 2, amount: 4 },
    ],
    [
      { item: "ascensionItem1", rarity: 3, amount: 3 },
      { item: "ascensionItem2", rarity: 2, amount: 12 },
      { item: "common", rarity: 2, amount: 8 },
    ],
  ],
  [
    [
      { item: "ascensionItem1", rarity: 0, amount: 3 },
      { item: "ascensionItem2", rarity: 0, amount: 3 },
      { item: "common", rarity: 0, amount: 2 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 3 },
      { item: "ascensionItem2", rarity: 0, amount: 12 },
      { item: "common", rarity: 0, amount: 8 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 6 },
      { item: "ascensionItem2", rarity: 1, amount: 6 },
      { item: "common", rarity: 1, amount: 6 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 3 },
      { item: "ascensionItem2", rarity: 1, amount: 12 },
      { item: "common", rarity: 1, amount: 9 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 6 },
      { item: "ascensionItem2", rarity: 2, amount: 9 },
      { item: "common", rarity: 2, amount: 6 },
    ],
    [
      { item: "ascensionItem1", rarity: 3, amount: 4 },
      { item: "ascensionItem2", rarity: 2, amount: 18 },
      { item: "common", rarity: 2, amount: 12 },
    ],
  ],
  [
    [
      { item: "ascensionItem1", rarity: 0, amount: 5 },
      { item: "ascensionItem2", rarity: 0, amount: 5 },
      { item: "common", rarity: 0, amount: 3 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 5 },
      { item: "ascensionItem2", rarity: 0, amount: 18 },
      { item: "common", rarity: 0, amount: 12 },
    ],
    [
      { item: "ascensionItem1", rarity: 1, amount: 9 },
      { item: "ascensionItem2", rarity: 1, amount: 9 },
      { item: "common", rarity: 1, amount: 9 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 5 },
      { item: "ascensionItem2", rarity: 1, amount: 18 },
      { item: "common", rarity: 1, amount: 14 },
    ],
    [
      { item: "ascensionItem1", rarity: 2, amount: 9 },
      { item: "ascensionItem2", rarity: 2, amount: 14 },
      { item: "common", rarity: 2, amount: 9 },
    ],
    [
      { item: "ascensionItem1", rarity: 3, amount: 6 },
      { item: "ascensionItem2", rarity: 2, amount: 27 },
      { item: "common", rarity: 2, amount: 18 },
    ],
  ],
];

export const weaponMoraTemplate: string[][] = [
  ["5,000", "5,000", "5,000", "10,000"],
  ["5,000", "5,000", "5,000", "10,000", "15,000"],
  ["5,000", "10,000", "15,000", "20,000", "25,000", "30,000"],
  ["5,000", "15,000", "20,000", "30,000", "35,000", "45,000"],
  ["10,000", "20,000", "30,000", "45,000", "55,000", "65,000"],
];
