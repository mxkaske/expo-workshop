import { GlobalActionTypes, SET_COLOR_SCHEME, ColorSchemeName } from "./types";

export function setColorScheme(
  colorScheme: ColorSchemeName
): GlobalActionTypes {
  return { type: SET_COLOR_SCHEME, payload: colorScheme };
}
