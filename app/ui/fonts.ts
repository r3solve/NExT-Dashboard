import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

// Exporting the Inter font with Latin subset
export const inter = Inter({
  subsets: ["latin"],
  weight:'200'
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
