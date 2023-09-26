import { ItemTypes } from "@/pages/types/ItemTypes";
import { Item } from "@/pages/types/Item";
import { SuperLog } from "@/pages/types/Items/SuperLog";

export class EpicLog extends Item {
  constructor(amount: number) {
    super(ItemTypes.EpicLog, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "craft",
    });
  }

  craft() {
    return new SuperLog(this.amount / 10);
  }
}
