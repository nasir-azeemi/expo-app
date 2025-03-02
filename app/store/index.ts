import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { Platform } from "react-native";


let storageType;

// Use AsyncStorage for React Native, localStorage for Web
if (Platform.OS === "web") {
  storageType = storage;
} else {
  storageType = AsyncStorage;
}

// Persist the Redux store
const persistConfig = {
  key: "root",
  storage: storageType,
};

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the root reducer and apply the saga middleware
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// Create a persisted store
const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>;

export { persistor, store, RootState };
