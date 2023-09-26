import { ItemTypes } from "@/pages/types/ItemTypes";
import { Item } from "@/pages/types/Item";
import { Log } from "@/pages/types/Items/Log";

export class Fish extends Item {
  constructor(amount: number) {
    super(ItemTypes.Fish, [4, 5], amount, {
      [ItemTypes.HyperLog]: "trade",
    });
  }

  trade() {
    return new Log(this.amount * 2);
  }
}
