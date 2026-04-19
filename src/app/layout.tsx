import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IEESEC | Software Engineering Community @ IHU",
    template: "%s | IEESEC",
  },
  description:
    "Η επίσημη φοιτητική κοινότητα Μηχανικής Λογισμικού του ΜΠΗΣ στο ΔΙΠΑΕ. Χτίζουμε projects, μοιραζόμαστε γνώσεις και αναπτύσσουμε το μέλλον του Software Engineering.",
  keywords: [
    "IEESEC",
    "Software Engineering",
    "Μηχανικών Πληροφορικής",
    "IHU",
    "ΔΙΠΑΕ",
    "ΜΠΗΣ",
    "ΙΕΕ",
    "Φοιτητική Ομάδα",
    "Programming",
    "Coding",
    "Hackathons",
    "Networking",
    "Thessaloniki",
    "Sindos",
    "Σίνδος",
    "SKG",
    "Open Source",
  ],
  authors: [{ name: "IEESEC Team" }],
  creator: "IEESEC",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    // TODO: Να βάλουμε με το πραγματικό link του site.
    // url: "https://ieesec.gr",
    siteName: "IEESEC",
    title: "IEESEC | Software Engineering Community",
    description:
      "Build real-world skills through open-source projects and workshops. Join the IEE Software Engineering community.",
    images: [
      {
        // TODO: Να φτιάξουμε μια εικόνα banner κι να μπει στο /public.
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IEESEC Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEESEC | Software Engineering Community",
    description: "Join the next generation of Software Engineers at IHU Sindos.",
    // TODO: Να βάλουμε το πραγματικό logo του site.
    // images: ["/og-image.png"],
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
    <html
      lang="el"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        jakartaSans.variable,
        geistMono.variable,
        geistSans.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

