import { Item } from "@/lib/types/Item";
import { ItemTypes } from "@/lib/types/ItemTypes";

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
