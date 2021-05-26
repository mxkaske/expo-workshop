import { ColorSchemeName as RNColorSchemeName } from "react-native";

export type ColorSchemeName = RNColorSchemeName;

export interface GlobalState {
  colorScheme: ColorSchemeName;
}

export const SET_COLOR_SCHEME = "SET_COLOR_SCHEME";

interface SetColorSchemeAction {
  type: typeof SET_COLOR_SCHEME;
  payload: ColorSchemeName;
}

export const RESET_COLOR_SCHEME = "RESET_COLOR_SCHEME";

interface ResetColorSchemeAction {
  type: typeof RESET_COLOR_SCHEME;
}

export type GlobalActionTypes = SetColorSchemeAction | ResetColorSchemeAction;
