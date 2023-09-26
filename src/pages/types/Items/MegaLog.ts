import { ItemTypes } from "@/pages/types/ItemTypes";
import { Item } from "@/pages/types/Item";
import { HyperLog } from "@/pages/types/Items/HyperLog";

export class MegaLog extends Item {
  constructor(amount: number) {
    super(ItemTypes.MegaLog, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "craft",
    });
  }

  craft() {
    return new HyperLog(this.amount / 10);
  }
}
