import { ItemTypes } from "@/pages/types/ItemTypes";
import { Item } from "@/pages/types/Item";
import { EpicLog } from "@/pages/types/Items/EpicLog";

export class Log extends Item {
  constructor(amount: number) {
    super(ItemTypes.Log, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "craft",
    });
  }

  craft() {
    return new EpicLog(this.amount / 25);
  }
}
