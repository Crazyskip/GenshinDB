import { Prisma } from "@prisma/client";

export type ItemTemplate = {
  item: string;
  rarity: number;
  amount: number;
};

export type WeaponItem = [ItemTemplate, ItemTemplate, ItemTemplate];

export type WeaponWithItems = Prisma.WeaponGetPayload<{
  include: { primaryItem: true; secondaryItem: true; commonItem: true };
}>;

export type CharacterWithItems = Prisma.CharacterGetPayload<{
  include: {
    talentBook: true;
    elementalStone: true;
    localItem: true;
    bossItem: true;
    jewel: true;
    commonItem: true;
  };
}>;
