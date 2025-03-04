import { Archivo, Bai_Jamjuree, Barlow, Geo, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const baiJamjuree = Bai_Jamjuree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const archivo = Archivo({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const barlow = Barlow({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const geo = Geo({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
