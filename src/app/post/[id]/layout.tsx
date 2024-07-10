import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=device-dpi"></meta></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
