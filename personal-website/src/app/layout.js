import "./globals.css";
import Navbar from "./navbar/navbar";
import ParticlesBackground from "@/components/TSparticles";

export const metadata = {
  title: "Jacob Leader",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-floralWhite">
        <ParticlesBackground>
          <Navbar/>
          {children}
        </ParticlesBackground>
      </body>
    </html>
  );
}
