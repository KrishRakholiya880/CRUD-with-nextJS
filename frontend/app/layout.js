import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { getRobots } from "./_components/robots/robots";
// fonts
import { Oswald, Roboto, Roboto_Condensed, Work_Sans } from "next/font/google"; // Import the fonts you want

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./_components/ScrollToTop/ScrollToTop";

// fonts
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

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
  robots: getRobots({}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${roboto.className} ${workSans.variable} ${oswald.variable} `}>
        <Header />

        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Footer />
      </body>
    </html>
  );
}
