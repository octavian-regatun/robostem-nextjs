import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button/Button" {
  export interface ButtonPropsColorOverrides {
    white?: true;
    black?: true;
  }
}

declare module "@mui/material/AppBar/AppBar" {
  export interface AppBarPropsColorOverrides {
    white?: true;
    black?: true;
  }
}
