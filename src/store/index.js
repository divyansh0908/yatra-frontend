import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tripReducer from "./trip.slice";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, tripReducer);

export const store = configureStore({
    reducer: {
        trip: persistedReducer,
    },
});

export const persistor = persistStore(store);



