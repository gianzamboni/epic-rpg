import { ItemTypes } from "@/lib/types/ItemTypes";
import { Item } from "@/lib/types/Item";
import { Log } from "@/lib/types/Items/Log";

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
