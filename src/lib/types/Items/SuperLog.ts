import { ItemTypes } from "@/lib/types/ItemTypes";
import { Item } from "@/lib/types/Item";
import { MegaLog } from "@/lib/types/Items/MegaLog";

export class SuperLog extends Item {
  constructor(amount: number) {
    super(ItemTypes.SuperLog, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "craft",
    });
  }

  craft() {
    return new MegaLog(this.amount / 10);
  }
}
