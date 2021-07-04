import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#25D484",
  primaryBright: "#25D484",
  primaryDark: "#25D484",
  secondary: "#289489",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2F7F6",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#EAECEC",
  tertiary: "#EFF4F5",
  text: "#2D3836",
  textDisabled: "#BDC2C4",
  textSubtle: "#5C6362",
  borderColor: "#E9EAEB",
  card: "#FCFFFE",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#17776D",
  background: "#1B1D1D",
  backgroundDisabled: "#3a4242",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#485050",
  primaryDark: "#0098A1",
  tertiary: "#353838",
  text: "#D9E6E6",
  textDisabled: "#616b67",
  textSubtle: "#DFECEC",
  borderColor: "#303332",
  card: "#2B2F2F",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
