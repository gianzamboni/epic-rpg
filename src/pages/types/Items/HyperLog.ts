import { Item } from "@/pages/types/Item";
import { ItemTypes } from "@/pages/types/ItemTypes";

export class HyperLog extends Item {
  constructor(amount: number) {
    super(ItemTypes.HyperLog, [1, 2, 3, 4, 5], amount, {
      [ItemTypes.HyperLog]: "toHyperLogs",
    });
  }

  toHyperLogs() {
    return new HyperLog(this.amount);
  }
}
