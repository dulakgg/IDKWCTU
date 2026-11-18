
import { useLocalStorage } from "@uidotdev/usehooks";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    // Backgrounds
    const [background, setBackground] = useLocalStorage("background", "#f8fafc");
    const [darkBackground, setDarkBackground] = useLocalStorage("darkBackground", "#0f172a");
    const [surface, setSurface] = useLocalStorage("surface", "#f1f5f9");
    const [darkSurface, setDarkSurface] = useLocalStorage("darkSurface", "#1e293b");
    const [cardBackground, setCardBackground] = useLocalStorage("cardBackground", "#ffffff");
    const [darkCardBackground, setDarkCardBackground] = useLocalStorage("darkCardBackground", "#1e293b");
    const [inputBackground, setInputBackground] = useLocalStorage("inputBackground", "#ffffff");
    const [darkInputBackground, setDarkInputBackground] = useLocalStorage("darkInputBackground", "#1e293b");

    // Text colors
    const [textColor, setTextColor] = useLocalStorage("textColor", "#0f172a");
    const [darkTextColor, setDarkTextColor] = useLocalStorage("darkTextColor", "#f8fafc");
    const [mutedColor, setMutedColor] = useLocalStorage("mutedColor", "#64748b");
    const [darkMutedColor, setDarkMutedColor] = useLocalStorage("darkMutedColor", "#94a3b8");
    const [disabledColor, setDisabledColor] = useLocalStorage("disabledColor", "#94a3b8");
    const [darkDisabledColor, setDarkDisabledColor] = useLocalStorage("darkDisabledColor", "#475569");
    const [placeholderColor, setPlaceholderColor] = useLocalStorage("placeholderColor", "#94a3b8");
    const [darkPlaceholderColor, setDarkPlaceholderColor] = useLocalStorage("darkPlaceholderColor", "#64748b");

    // Typography
    const [fontFamily, setFontFamily] = useLocalStorage("fontFamily", "Inter");
    const [headingFontFamily, setHeadingFontFamily] = useLocalStorage("headingFontFamily", "Inter");

    const [fontSize, setFontSize] = useLocalStorage("fontSize", 16);
    const [headingFontSize, setHeadingFontSize] = useLocalStorage("headingFontSize", 24);
    const [smallFontSize, setSmallFontSize] = useLocalStorage("smallFontSize", 14);

    // Borders
    const [borderColor, setBorderColor] = useLocalStorage("borderColor", "#e2e8f0");
    const [darkBorderColor, setDarkBorderColor] = useLocalStorage("darkBorderColor", "#334155");

    const [borderWidth, setBorderWidth] = useLocalStorage("borderWidth", 1);
    const [borderRadius, setBorderRadius] = useLocalStorage("borderRadius", 6);

    // Buttons
    const [primaryColor, setPrimaryColor] = useLocalStorage("primaryColor", "#2563eb");
    const [darkPrimaryColor, setDarkPrimaryColor] = useLocalStorage("darkPrimaryColor", "#3b82f6");
    const [primaryHover, setPrimaryHover] = useLocalStorage("primaryHover", "#1d4ed8");
    const [darkPrimaryHover, setDarkPrimaryHover] = useLocalStorage("darkPrimaryHover", "#2563eb");
    const [primaryActive, setPrimaryActive] = useLocalStorage("primaryActive", "#1e40af");
    const [darkPrimaryActive, setDarkPrimaryActive] = useLocalStorage("darkPrimaryActive", "#1d4ed8");

    // Secondary buttons
    const [secondaryColor, setSecondaryColor] = useLocalStorage("secondaryColor", "#e2e8f0");
    const [darkSecondaryColor, setDarkSecondaryColor] = useLocalStorage("darkSecondaryColor", "#334155");
    const [secondaryHover, setSecondaryHover] = useLocalStorage("secondaryHover", "#cbd5e1");
    const [darkSecondaryHover, setDarkSecondaryHover] = useLocalStorage("darkSecondaryHover", "#475569");
    const [secondaryActive, setSecondaryActive] = useLocalStorage("secondaryActive", "#94a3b8");
    const [darkSecondaryActive, setDarkSecondaryActive] = useLocalStorage("darkSecondaryActive", "#64748b");

    // Interactive
    const [hoverBackground, setHoverBackground] = useLocalStorage("hoverBackground", "#e2e8f0");
    const [darkHoverBackground, setDarkHoverBackground] = useLocalStorage("darkHoverBackground", "#334155");
    const [activeBackground, setActiveBackground] = useLocalStorage("activeBackground", "#cbd5e1");
    const [darkActiveBackground, setDarkActiveBackground] = useLocalStorage("darkActiveBackground", "#475569");
    const [selectedColor, setSelectedColor] = useLocalStorage("selectedColor", "#dbeafe");
    const [darkSelectedColor, setDarkSelectedColor] = useLocalStorage("darkSelectedColor", "#1e3a8a");
    const [focusColor, setFocusColor] = useLocalStorage("focusColor", "#3b82f6");
    const [darkFocusColor, setDarkFocusColor] = useLocalStorage("darkFocusColor", "#60a5fa");
    const [disabledBackground, setDisabledBackground] = useLocalStorage("disabledBackground", "#f1f5f9");
    const [darkDisabledBackground, setDarkDisabledBackground] = useLocalStorage("darkDisabledBackground", "#1e293b");

    // Cards
    const [cardHoverBackground, setCardHoverBackground] = useLocalStorage("cardHoverBackground", "#f8fafc");
    const [darkCardHoverBackground, setDarkCardHoverBackground] = useLocalStorage("darkCardHoverBackground", "#334155");
    const [cardBorderColor, setCardBorderColor] = useLocalStorage("cardBorderColor", "#e2e8f0");
    const [darkCardBorderColor, setDarkCardBorderColor] = useLocalStorage("darkCardBorderColor", "#334155");

    // Inputs
    const [inputBorderColor, setInputBorderColor] = useLocalStorage("inputBorderColor", "#cbd5e1");
    const [darkInputBorderColor, setDarkInputBorderColor] = useLocalStorage("darkInputBorderColor", "#475569");
    const [inputFocusColor, setInputFocusColor] = useLocalStorage("inputFocusColor", "#3b82f6");
    const [darkInputFocusColor, setDarkInputFocusColor] = useLocalStorage("darkInputFocusColor", "#60a5fa");

    return (
        <ThemeContext.Provider
            value={{
                darkMode, setDarkMode,

                // Backgrounds
                background, setBackground,
                darkBackground, setDarkBackground,
                surface, setSurface,
                darkSurface, setDarkSurface,
                cardBackground, setCardBackground,
                darkCardBackground, setDarkCardBackground,
                inputBackground, setInputBackground,
                darkInputBackground, setDarkInputBackground,

                // Text colors
                textColor, setTextColor,
                darkTextColor, setDarkTextColor,
                mutedColor, setMutedColor,
                darkMutedColor, setDarkMutedColor,
                disabledColor, setDisabledColor,
                darkDisabledColor, setDarkDisabledColor,
                placeholderColor, setPlaceholderColor,
                darkPlaceholderColor, setDarkPlaceholderColor,

                // Typography
                fontFamily, setFontFamily,
                headingFontFamily, setHeadingFontFamily,
                fontSize, setFontSize,
                headingFontSize, setHeadingFontSize,
                smallFontSize, setSmallFontSize,

                // Borders
                borderColor, setBorderColor,
                darkBorderColor, setDarkBorderColor,
                borderWidth, setBorderWidth,
                borderRadius, setBorderRadius,

                // Buttons
                primaryColor, setPrimaryColor,
                darkPrimaryColor, setDarkPrimaryColor,
                primaryHover, setPrimaryHover,
                darkPrimaryHover, setDarkPrimaryHover,
                primaryActive, setPrimaryActive,
                darkPrimaryActive, setDarkPrimaryActive,

                // Secondary buttons
                secondaryColor, setSecondaryColor,
                darkSecondaryColor, setDarkSecondaryColor,
                secondaryHover, setSecondaryHover,
                darkSecondaryHover, setDarkSecondaryHover,
                secondaryActive, setSecondaryActive,
                darkSecondaryActive, setDarkSecondaryActive,

                // Interactive
                hoverBackground, setHoverBackground,
                darkHoverBackground, setDarkHoverBackground,
                activeBackground, setActiveBackground,
                darkActiveBackground, setDarkActiveBackground,
                selectedColor, setSelectedColor,
                darkSelectedColor, setDarkSelectedColor,
                focusColor, setFocusColor,
                darkFocusColor, setDarkFocusColor,
                disabledBackground, setDisabledBackground,
                darkDisabledBackground, setDarkDisabledBackground,

                // Cards
                cardHoverBackground, setCardHoverBackground,
                darkCardHoverBackground, setDarkCardHoverBackground,
                cardBorderColor, setCardBorderColor,
                darkCardBorderColor, setDarkCardBorderColor,

                // Inputs
                inputBorderColor, setInputBorderColor,
                darkInputBorderColor, setDarkInputBorderColor,
                inputFocusColor, setInputFocusColor,
                darkInputFocusColor, setDarkInputFocusColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
