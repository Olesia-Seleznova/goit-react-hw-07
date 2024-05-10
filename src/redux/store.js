import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "root",
  storage: storage,
};

const persistContactsReduser = persistReducer(
  contactsPersistConfig,
  contactsReduser
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReduser,
    filters: filtersReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
