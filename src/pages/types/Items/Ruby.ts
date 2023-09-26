import { Item } from "@/pages/types/Item";
import { Log } from "@/pages/types/Items/Log";
import { ItemTypes } from "@/pages/types/ItemTypes";

export class Ruby extends Item {
  constructor(amount: number) {
    super(ItemTypes.Ruby, [4, 5], amount, {
      [ItemTypes.HyperLog]: "trade",
    });
  }

  trade() {
    return new Log(this.amount * 450);
  }
}
