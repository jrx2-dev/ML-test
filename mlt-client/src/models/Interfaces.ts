import { callbackPayload } from "./Types";

interface Author {
  name: string;
  lastname: string;
}

interface ItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
  city_name?: string;
  categories?: string[];
}

export interface ItemDetail {
  author: Author;
  item: Item;
}

export interface QueryResults {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemsStoreReducer {
  item: Item | null;
  items: Item[];
  categories: string[];
}

export interface queryItemsSagaPayload {
  search: string;
  callback: callbackPayload;
}

export interface getItemSagaPayload {
  itemId: string;
  callback: callbackPayload;
}

export interface fetchItemsPayload {
  categories: string[];
  items: Item[];
}

export interface getItemPayload {
  categories: string[];
  item: Item;
}
