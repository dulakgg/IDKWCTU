import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
    const { darkMode, background, darkBackground, textColor, darkTextColor } = useTheme();

    return (
        <main
          style={{
              backgroundColor: darkMode ? background : darkBackground,
              color: darkMode ? textColor : darkTextColor
          }}
        >
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
    );
}