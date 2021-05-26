//import { Reducer } from "react";
import { Reducer } from "redux";
import {
  GlobalState,
  GlobalActionTypes,
  SET_COLOR_SCHEME,
  RESET_COLOR_SCHEME,
} from "./types";

const initialState: GlobalState = {
  colorScheme: undefined,
};

const globalReducer: Reducer<GlobalState, GlobalActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: action.payload,
      };
    case RESET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: undefined,
      };
    default:
      return state;
  }
};

export { globalReducer };
