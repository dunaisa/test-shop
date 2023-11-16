import { Card } from "./Card";


export type Cart = {
  items: Card[],
  totalValue: number,
  totalPrice: number,
};