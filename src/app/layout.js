import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Aadhaar Verify",
  description: "Simple ID verification system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
