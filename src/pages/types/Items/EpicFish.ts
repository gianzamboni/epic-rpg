import { Item } from "@/pages/types/Item";
import { GoldenFish } from "@/pages/types/Items/GoldenFish";
import { ItemTypes } from "@/pages/types/ItemTypes";

export class EpicFish extends Item {
  constructor(amount: number) {
    super(ItemTypes.EpicFish, [4, 5], amount, {
      [ItemTypes.HyperLog]: "dismantle",
    });
  }

  dismantle() {
    return new GoldenFish(this.amount * 80);
  }
}
