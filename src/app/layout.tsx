import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Joy's Grill & Burger House - Premium Burgers in Camp Hill, PA",
  description: "Discover gourmet burgers and grilled specialties at Joy's Grill & Burger House. Fresh ingredients, 4.9★ rated, $10-$20 per person.",
  keywords: "burger restaurant, gourmet burgers, Camp Hill PA, fast food, grilled food, cheeseburger, restaurant",
  metadataBase: new URL("https://joysgrill.com"),
  alternates: {
    canonical: "https://joysgrill.com",
  },
  openGraph: {
    title: "Joy's Grill & Burger House",
    description: "Premium gourmet burgers crafted with fresh ingredients. Highly rated burger restaurant in Camp Hill, PA.",
    url: "https://joysgrill.com",
    siteName: "Joy's Grill & Burger House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy's Grill & Burger House",
    description: "Premium gourmet burgers in Camp Hill, PA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${sourceSans3.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}