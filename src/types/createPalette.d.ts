import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    white?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button/Button" {
  export interface ButtonPropsColorOverrides {
    white?: true;
  }
}

declare module "@mui/material/AppBar/AppBar"{
 export interface  AppBarPropsColorOverrides{
   white?:true
 }
}