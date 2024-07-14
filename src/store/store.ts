import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

import saga from "./middlewares/saga";
import { sagaWatcher } from "./middlewares/watcher";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      saga
    ),
});

saga.run(sagaWatcher);

export type RootState = ReturnType<typeof store.getState>;

export default store;
