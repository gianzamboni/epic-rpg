import { ItemTypes } from "@/lib/types/ItemTypes";
import { Item } from "@/lib/types/Item";
import { SuperLog } from "@/lib/types/Items/SuperLog";

export class EpicLog extends Item {
  constructor(amount: number) {
    super(ItemTypes.EpicLog, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "craft",
    });
  }

  craft() {
    return new SuperLog(this.amount / 25);
  }
}
