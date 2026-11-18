import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
    const { darkMode } = useTheme();

    return (
        <main
          style={{
              backgroundColor: darkMode ? "#fff" : "#000"
          }}
          className="w-full h-full"
        >
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
    );
}