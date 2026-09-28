import Navbar from "./lib/NavBar";
import Hero from "./lib/Hero";
import Footer from "./lib/Footer";

export default function NotFound() {
  return (
    <div>
      <div
        className="bg-[#0033dd] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "20px 20px",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}