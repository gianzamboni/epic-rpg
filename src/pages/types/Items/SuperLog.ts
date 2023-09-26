import { ItemTypes } from "@/pages/types/ItemTypes";
import { Item } from "@/pages/types/Item";
import { MegaLog } from "@/pages/types/Items/MegaLog";

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
