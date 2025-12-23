import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

export const metadata = {
  title: {
    template: "%s || MyShop E-commerce store",
    default: "E-commerce Site",
  },
  description:
    "Your ultimate destination for modern living. Explore a vast collection featuring the latest gadgets, trendy fashion, and fresh groceries—all in one place. Experience quality, convenience, and unbeatable value for every part of your life.",
  keywords: ["myShop", "online-shop", "online-shopping", "e-commerce site"],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Shop All Products | MyShop",
    description: "Explore our catalog of top-rated products.",
    siteName: "MyShop",
    type: "website",
    alternates: {
      canonical: `/`,
    },
    images: [
      {
        // url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MyShop Product Collection",
      },
    ],
  },
  twitter: {
    title: "Shop All Products | MyShop",
    description: "Explore our catalog of top-rated products.",
    siteName: "MyShop",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
