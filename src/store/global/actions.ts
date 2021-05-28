import {
  GlobalActionTypes,
  SET_COLOR_SCHEME,
  ColorSchemeName,
  RESET_COLOR_SCHEME,
} from "./types";

export function setColorScheme(
  colorScheme: ColorSchemeName
): GlobalActionTypes {
  return { type: SET_COLOR_SCHEME, payload: colorScheme };
}

export function resetColorScheme(): GlobalActionTypes {
  return { type: RESET_COLOR_SCHEME };
}
