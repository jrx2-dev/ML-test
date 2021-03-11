import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import {
  fetchItemsPayload,
  getItemPayload,
  getItemSagaPayload,
  ItemDetail,
  queryItemsSagaPayload,
  QueryResults,
} from "../../models/Interfaces";

import { fetchedItems, gettedItem } from "../slices/item.slices";
import callAPI from "../api/api";

export function* fetchItemsSaga(action: PayloadAction<queryItemsSagaPayload>) {
  const { payload } = action;

  const axiosConfig: AxiosRequestConfig = {
    url: `http://localhost:5000/api/items?q=${payload.search}`,
  };

  try {
    const functionToCall = (): Promise<
      AxiosResponse<QueryResults | ItemDetail>
    > => callAPI(axiosConfig);
    const response: AxiosResponse<QueryResults> = yield call(functionToCall);
    const payload: fetchItemsPayload = {
      categories: response.data.categories,
      items: response.data.items,
    };
    yield put(fetchedItems(payload));
    if (action.payload.callback) {
      action.payload.callback(true, null);
    }
  } catch (e) {
    if (action.payload.callback) {
      action.payload.callback(
        false,
        e.message || "Error al buscar resultados."
      );
    }
  }
};

export function* getItemSaga(action: PayloadAction<getItemSagaPayload>) {
  const { payload } = action;
  const axiosConfig: AxiosRequestConfig = {
    url: `http://localhost:5000/api/items/${payload.itemId}`,
  };

  try {
    const functionToCall = (): Promise<
      AxiosResponse<QueryResults | ItemDetail>
    > => callAPI(axiosConfig);
    const response: AxiosResponse<ItemDetail> = yield call(functionToCall);
    const payload: getItemPayload = {
      // utilizo las categories del item :)
      categories: response.data.item.categories as string[],
      item: response.data.item,
    };
    yield put(gettedItem(payload));
  } catch (e) {
    if (action.payload.callback) {
      action.payload.callback(false, e.message || "Error al buscar el item.");
    }
  }
};
