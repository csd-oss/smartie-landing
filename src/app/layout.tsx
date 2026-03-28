import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Software Development`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Smartie is a software development company based in Bratislava, Slovakia, building mobile applications for everyday life.",
  metadataBase: new URL(COMPANY.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Software Development`,
    description:
      "Software development company based in Bratislava, Slovakia. Building mobile apps for everyday life.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: COMPANY.url,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Bratislava",
    postalCode: COMPANY.zip,
    addressCountry: "SK",
  },
  taxID: COMPANY.ico.replace(/\s/g, ""),
  foundingDate: COMPANY.foundedDate,
  description:
    "Software development company building mobile applications for everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
