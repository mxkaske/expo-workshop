import { combineReducers, createStore } from "redux";
import {
  useSelector as useRdxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalReducer } from "./global/reducers";
import { GlobalState } from "./global/types";

const globalPersistConfig = {
  key: "global",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  global: persistReducer<GlobalState>(globalPersistConfig, globalReducer),
  // todo: ...next possible reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useRdxSelector;

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
