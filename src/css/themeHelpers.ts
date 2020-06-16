import {
  colors,
  fontSizes,
  fonts,
  lineHeights,
  borders,
  spacing,
} from "./theme";

// https://stackoverflow.com/questions/56126004/how-to-extract-exact-union-type-from-object-key-strings-in-typescript
export type FontSize = keyof typeof fontSizes;
export type LineHeight = keyof typeof lineHeights;
export type FontName = keyof typeof fonts;
export type Color = keyof typeof colors;
export type Border = keyof typeof borders;
export type Spacing = keyof typeof spacing | "auto";

export const getFontSize = (value: FontSize = 3) => fontSizes[value];
export const getLineHeight = (value: LineHeight = 1) => lineHeights[value];
export const getFont = (value: FontName = "primary") => fonts[value];
export const getColor = (value: Color = "copyOne") => colors[value];
export const getBorder = (value: Border = "primaryThin") => borders[value];
export const getSpacing = (value: Spacing) =>
  value === "auto" ? value : spacing[value];
