import type { Metadata } from "next";
import './globals.css';
import DocsShell from "./components/DocsShell";

export const metadata: Metadata = {
  title: {
    default: "Riverpod Gen Shortcuts — Flutter Code Generation Docs",
    template: "%s | Riverpod Gen Shortcuts",
  },
  description:
    "Boost your Flutter Riverpod workflow with code generation shortcuts, snippets, and comprehensive documentation. Speed up provider creation with smart shortcuts.",
  keywords: [
    "riverpod",
    "flutter",
    "code generation",
    "riverpod generator",
    "flutter snippets",
    "dart",
    "provider",
    "state management",
    "riverpod shortcuts",
  ],
  authors: [{ name: "Riverpod Gen Shortcuts" }],
  creator: "Riverpod Gen Shortcuts",
  metadataBase: new URL("https://riverpod-gen-shortcuts.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Riverpod Gen Shortcuts",
    title: "Riverpod Gen Shortcuts — Flutter Code Generation Docs",
    description:
      "Boost your Flutter Riverpod workflow with code generation shortcuts, snippets, and comprehensive documentation.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Riverpod Gen Shortcuts" }],
  },
  twitter: {
    card: "summary",
    title: "Riverpod Gen Shortcuts",
    description:
      "Flutter Riverpod code generation shortcuts and documentation.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DocsShell>
          <div className="mx-auto max-w-6xl space-y-20 px-6 py-10">
            {children}
          </div>
        </DocsShell>
      </body>
    </html>
  );
}
