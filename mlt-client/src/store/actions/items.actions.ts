import { PayloadAction } from "@reduxjs/toolkit";

import {
  getItemSagaPayload,
  queryItemsSagaPayload,
} from "../../models/Interfaces";
import { callbackPayload } from "../../models/Types";

export const itemsActions = {
  QUERY_ITEMS_SAGA: "items/queryItemsSaga",
  GET_ITEM_SAGA: "items/getItemSaga",
};

export const createItemsActions = {
  queryItems: (
    search: string,
    callback: callbackPayload
  ): PayloadAction<queryItemsSagaPayload> => {
    return {
      type: itemsActions.QUERY_ITEMS_SAGA,
      payload: {
        search: search,
        callback: callback,
      },
    };
  },
  getItems: (
    itemId: string,
    callback: callbackPayload
  ): PayloadAction<getItemSagaPayload> => {
    return {
      type: itemsActions.GET_ITEM_SAGA,
      payload: {
        itemId,
        callback: callback,
      },
    };
  },
};
