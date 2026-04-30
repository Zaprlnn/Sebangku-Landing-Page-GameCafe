import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CafeShowcase } from "./components/CafeShowcase";
import { GameLibrary } from "./components/GameLibrary";
import { CoffeeMenu } from "./components/CoffeeMenu";
import { DessertMenu } from "./components/DessertMenu";
import { SignatureMenu } from "./components/SignatureMenu";
import { GameMaster } from "./components/GameMaster";
import { EventCalendar } from "./components/EventCalendar";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <CafeShowcase />
      <GameLibrary />
      <CoffeeMenu />
      <DessertMenu />
      <SignatureMenu />
      <GameMaster />
      <EventCalendar />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
