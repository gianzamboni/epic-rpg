import { Item } from "@/lib/types/Item";
import { Fish } from "@/lib/types/Items/Fish";
import { ItemTypes } from "@/lib/types/ItemTypes";

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
