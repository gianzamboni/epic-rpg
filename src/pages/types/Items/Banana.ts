import { Apple } from "@/pages/types/Items/Apple";
import { Item } from "@/pages/types/Item";
import { ItemTypes } from "@/pages/types/ItemTypes";

export class Banana extends Item {
  constructor(amount: number) {
    super(ItemTypes.Banana, [4, 5], amount, {
      [ItemTypes.HyperLog]: "dismantle",
    });
  }

  dismantle() {
    return new Apple(this.amount * 12);
  }
}
