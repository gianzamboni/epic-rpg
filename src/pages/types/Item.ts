import { ItemTypes } from "@/pages/types/ItemTypes";

type ConversionChain = Record<ItemTypes.HyperLog, "trade" | "dismantle" | "craft" | "toHyperLogs">;

export class Item {  
  name: ItemTypes;
  areas: number[];
  amount: number;
  chains: ConversionChain;

  constructor(
    name: ItemTypes,
    areas: number[],
    amount: number,
    conversionChain: ConversionChain
  ) {
    this.name = name;
    this.areas = areas;
    this.amount = amount;
    this.chains = conversionChain;
  }

  trade(): Item {
    throw "This item can not be traded";
  }

  dismantle(): Item {
    throw "This item can not be dismantled";
  }

  craft(): Item {
    throw "This item can not be crafted";
  }

  toHyperLogs(): Item {
    return this[this.chains[ItemTypes.HyperLog]]().toHyperLogs();
  }
}


