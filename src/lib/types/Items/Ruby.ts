import { Item } from "@/lib/types/Item";
import { Log } from "@/lib/types/Items/Log";
import { ItemTypes } from "@/lib/types/ItemTypes";

export class Ruby extends Item {
  constructor(amount: number) {
    super(ItemTypes.Ruby, [4, 5], amount, {
      [ItemTypes.HyperLog]: "trade",
    });
  }

  trade() {
    return new Log(this.amount * 850);
  }
}
