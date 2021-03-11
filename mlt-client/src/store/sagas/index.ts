import { takeEvery } from "redux-saga/effects";

import { fetchItemsSaga, getItemSaga } from "./items.sagas";
import { itemsActions } from "../actions/items.actions";

export default function* rootSaga() {
  yield takeEvery(itemsActions.QUERY_ITEMS_SAGA, fetchItemsSaga);
  yield takeEvery(itemsActions.GET_ITEM_SAGA, getItemSaga);
}
