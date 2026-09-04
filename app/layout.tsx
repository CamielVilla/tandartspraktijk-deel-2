import type {Metadata} from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tandartsenpraktijk de Tandenborstel",
    description: "Voor al uw klachten",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="nl">
        <body>
            <Navigation/>
            {children}
            </body>
        </html>
    );
}
