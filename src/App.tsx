import { useLocalStorage } from "@uidotdev/usehooks";
import { useTheme } from "./contexts/themeContext";

export default function App() {
    const { darkMode } = useTheme();
    
    const [background, setBackground] = useLocalStorage("background", "#ffffff");
    const [darkBackground, setDarkBackground] = useLocalStorage("darkBackground", "#000000");

    return (
        <main
          style={{
              backgroundColor: darkMode ? darkBackground : background
          }}
          className="w-full h-full"
        >
          <section>
            <input
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
            />
            <input
                type="color"
                value={darkBackground}
                onChange={(e) => setDarkBackground(e.target.value)}
            />
          </section>
        </main>
    );
}