import Header from "@/components/Header";
import afacadFont from "@/constants/afacadFont";
import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacadFont.variable} antialiased`}>
        <Header />
        <div className={"container xl:max-w-screen-xl"}>{children}</div>
      </body>
    </html>
  );
}
