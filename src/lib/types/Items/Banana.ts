import { Apple } from "@/lib/types/Items/Apple";
import { Item } from "@/lib//types/Item";
import { ItemTypes } from "@/lib/types/ItemTypes";

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
