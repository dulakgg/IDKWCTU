import ContrastCursor from "./components/contrastCursor";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
    const { darkMode, background, darkBackground, textColor, darkTextColor, fontFamily  } = useTheme();

    return (
        <main
          style={{
              backgroundColor: darkMode ? background : darkBackground,
              color: darkMode ? textColor : darkTextColor,
              fontFamily: fontFamily
          }}
        >
            <ContrastCursor />
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
    );
}