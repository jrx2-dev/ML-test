import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import RootSaga from "./sagas/index";

import { itemsSliceReducer } from "./slices/item.slices";

let sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActionPaths: ["payload.callback"],
    },
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    items: itemsSliceReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(RootSaga);

export default store;
