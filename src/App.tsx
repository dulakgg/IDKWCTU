import { useLocalStorage } from "@uidotdev/usehooks";

export default function App() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

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
            <nav>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch to light" : "Switch to dark"}
              </button>
            </nav>
          </section>
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