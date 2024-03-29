// import {IndexSignature}from './types';
// export interface Theme {
//     color: IndexSignature;
//     breakpoint: {
//         mobileMax: number;
//     };
// }

export const theme = {
  color: {
    black: "#000",
    silver: "#ccc",
    alto: "#ddd",
    gallery: "#eee",
    white: "#fff",
    teal: "#008080",
    cardinal: "#c41e3a",
    forestGreen: "#228c22",
  },
  breakpoint: {
    mobileMax: 767,
  },
} as const;
