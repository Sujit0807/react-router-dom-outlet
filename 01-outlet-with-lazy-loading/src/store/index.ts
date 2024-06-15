import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./slices";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware);
    },
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

const store = makeStore();

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]

sagaMiddleware.run(rootSaga);

export default store;
