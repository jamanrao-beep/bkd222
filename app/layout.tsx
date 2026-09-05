import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.badrikedardevelopers.com"),
  title: "Badri Kedar Developers | Building Trust. Creating Communities.",
  description: "Crafting premium real estate spaces that inspire trust, elevate lifestyles and create lasting value in Uttarakhand.",
  alternates: {
    canonical: "https://www.badrikedardevelopers.com",
  },
  openGraph: {
    title: "Badri Kedar Developers",
    description: "Premium land opportunities across Uttarakhand with high growth potential and secure returns.",
    url: "https://www.badrikedardevelopers.com",
    siteName: "Badri Kedar Developers",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.badrikedardevelopers.com/#organization",
      name: "Badri Kedar Developers",
      url: "https://www.badrikedardevelopers.com",
      logo: "https://www.badrikedardevelopers.com/BKD_Logo_V2.png",
      email: "Badrikedardevelopers@gmail.com",
      telephone: "+91-90585-71709",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bhagirath Enclave, 52, Balbir Rd, Dalanwala",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/badrikedardevelopers",
        "https://www.facebook.com/share/1EnGjVx2PK/",
        "https://youtube.com/@badrikedardevelopers",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.badrikedardevelopers.com/#website",
      url: "https://www.badrikedardevelopers.com",
      name: "Badri Kedar Developers",
      publisher: {
        "@id": "https://www.badrikedardevelopers.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-gray-800 bg-[#f8f9fa]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
