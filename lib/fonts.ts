import { MuseoModerno, Poppins } from "next/font/google";

export const museomoderno = MuseoModerno({
    subsets: ["latin"],
    variable: "--font-museo-moderno",
    weight: ["100", "300", "400", "700", "900"],
})

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
})