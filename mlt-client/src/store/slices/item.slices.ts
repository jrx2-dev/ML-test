import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  fetchItemsPayload,
  getItemPayload,
  ItemsStoreReducer,
} from "../../models/Interfaces";

const initialState: ItemsStoreReducer = {
  item: null,
  items: [],
  categories: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchedItems: (
      state: ItemsStoreReducer,
      action: PayloadAction<fetchItemsPayload>
    ): ItemsStoreReducer => {
      const { categories, items } = action.payload;
      return {
        item: null,
        items: items,
        categories: categories,
      };
    },
    gettedItem: (
      state: ItemsStoreReducer,
      action: PayloadAction<getItemPayload>
    ): ItemsStoreReducer => {
      const { item, categories } = action.payload;
      return {
        item: item,
        items: [],
        categories: categories,
      };
    },
  },
});

export const { fetchedItems, gettedItem } = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;
