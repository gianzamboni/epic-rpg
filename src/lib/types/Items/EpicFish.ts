import { Item } from "@/lib/types/Item";
import { GoldenFish } from "@/lib/types/Items/GoldenFish";
import { ItemTypes } from "@/lib/types/ItemTypes";

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
