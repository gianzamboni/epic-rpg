import { Item } from "@/pages/types/Item";
import { Fish } from "@/pages/types/Items/Fish";
import { ItemTypes } from "@/pages/types/ItemTypes";

export class GoldenFish extends Item {
  constructor(amount: number) {
    super(ItemTypes.GoldenFish, [4, 5], amount, {
      [ItemTypes.HyperLog]: "dismantle",
    });
  }

  dismantle() {
    return new Fish(this.amount * 12);
  }
}
