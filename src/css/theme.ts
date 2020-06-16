export const HEADER_HEIGHT = "70px";

const colorCodes = {
  // Core colors
  jungleGreen: "#29a8a5",
  mulberryWood: "#5b0826",
  burntSienna: "#e85a50",
  anzac: "#e5af4c",
  sage: "#929d79",
  sherpaBlue: "#00404d",
  copperRust: "#9a5351",

  // Greyscale
  black: "#000000",
  rhino: "#293653",
  waterloo: "#858597",
  santasGray: "#969baa",
  suitGray: "#b9b9ca",
  botticelli: "#d0dee7",
  mercury: "#e8e8ef",
  athensGray: "#f4f4f6",
  titanWhite: "#FCFCFF",
  white: "#FFFFFF",
};

export const colors = {
  ...colorCodes,
  copyOne: colorCodes["rhino"],
  copyTwo: colorCodes["jungleGreen"],
  copyThree: colorCodes["burntSienna"],
  primary: colorCodes["jungleGreen"],
  accentPrimary: colorCodes["anzac"],
  secondary: colorCodes["mulberryWood"],
};

export const fontSizes = {
  0: "10px",
  1: "12px",
  2: "14px",
  3: "16px",
  4: "20px",
  5: "30px",
};

export const lineHeights = {
  0: "1em",
  1: "1.2em",
  2: "1.5em",
};

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
};

export const fonts = {
  primary: "Merriweather, serif;",
  secondary: "Lato, sans-serif",
};

export const borders = {
  primaryThin: `1px solid ${colors.primary}`,
};
