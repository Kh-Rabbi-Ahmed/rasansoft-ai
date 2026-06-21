import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasansoft | Full-Stack Software Agency",
  description:
    "Rasansoft builds custom software, designs digital products, and ships reliable infrastructure end to end.",
  openGraph: {
    title: "Rasansoft",
    description: "We build, design, and ship — end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
