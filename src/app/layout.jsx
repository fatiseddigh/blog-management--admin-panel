import afacadFont from "@/constants/afacadFont";
import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacadFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
