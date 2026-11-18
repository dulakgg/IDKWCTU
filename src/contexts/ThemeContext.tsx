import { createContext, useContext } from "react";

interface Theme {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;

    // Backgrounds
    background: string;
    setBackground: (value: string) => void;
    darkBackground: string;
    setDarkBackground: (value: string) => void;
    surface: string;
    setSurface: (value: string) => void;
    darkSurface: string;
    setDarkSurface: (value: string) => void;
    cardBackground: string;
    setCardBackground: (value: string) => void;
    darkCardBackground: string;
    setDarkCardBackground: (value: string) => void;
    inputBackground: string;
    setInputBackground: (value: string) => void;
    darkInputBackground: string;
    setDarkInputBackground: (value: string) => void;

    // Text colors
    textColor: string;
    setTextColor: (value: string) => void;
    darkTextColor: string;
    setDarkTextColor: (value: string) => void;
    mutedColor: string;
    setMutedColor: (value: string) => void;
    darkMutedColor: string;
    setDarkMutedColor: (value: string) => void;
    disabledColor: string;
    setDisabledColor: (value: string) => void;
    darkDisabledColor: string;
    setDarkDisabledColor: (value: string) => void;
    placeholderColor: string;
    setPlaceholderColor: (value: string) => void;
    darkPlaceholderColor: string;
    setDarkPlaceholderColor: (value: string) => void;

    // Typography
    fontFamily: string;
    setFontFamily: (value: string) => void;
    headingFontFamily: string;
    setHeadingFontFamily: (value: string) => void;
    fontSize: number;
    setFontSize: (value: number) => void;
    headingFontSize: number;
    setHeadingFontSize: (value: number) => void;
    smallFontSize: number;
    setSmallFontSize: (value: number) => void;

    // Borders
    borderColor: string;
    setBorderColor: (value: string) => void;
    darkBorderColor: string;
    setDarkBorderColor: (value: string) => void;
    borderWidth: number;
    setBorderWidth: (value: number) => void;
    borderRadius: number;
    setBorderRadius: (value: number) => void;

    // Buttons
    primaryColor: string;
    setPrimaryColor: (value: string) => void;
    darkPrimaryColor: string;
    setDarkPrimaryColor: (value: string) => void;
    primaryHover: string;
    setPrimaryHover: (value: string) => void;
    darkPrimaryHover: string;
    setDarkPrimaryHover: (value: string) => void;
    primaryActive: string;
    setPrimaryActive: (value: string) => void;
    darkPrimaryActive: string;
    setDarkPrimaryActive: (value: string) => void;

    // Secondary buttons
    secondaryColor: string;
    setSecondaryColor: (value: string) => void;
    darkSecondaryColor: string;
    setDarkSecondaryColor: (value: string) => void;
    secondaryHover: string;
    setSecondaryHover: (value: string) => void;
    darkSecondaryHover: string;
    setDarkSecondaryHover: (value: string) => void;
    secondaryActive: string;
    setSecondaryActive: (value: string) => void;
    darkSecondaryActive: string;
    setDarkSecondaryActive: (value: string) => void;

    // Interactive
    hoverBackground: string;
    setHoverBackground: (value: string) => void;
    darkHoverBackground: string;
    setDarkHoverBackground: (value: string) => void;
    activeBackground: string;
    setActiveBackground: (value: string) => void;
    darkActiveBackground: string;
    setDarkActiveBackground: (value: string) => void;
    selectedColor: string;
    setSelectedColor: (value: string) => void;
    darkSelectedColor: string;
    setDarkSelectedColor: (value: string) => void;
    focusColor: string;
    setFocusColor: (value: string) => void;
    darkFocusColor: string;
    setDarkFocusColor: (value: string) => void;
    disabledBackground: string;
    setDisabledBackground: (value: string) => void;
    darkDisabledBackground: string;
    setDarkDisabledBackground: (value: string) => void;

    // Cards
    cardHoverBackground: string;
    setCardHoverBackground: (value: string) => void;
    darkCardHoverBackground: string;
    setDarkCardHoverBackground: (value: string) => void;
    cardBorderColor: string;
    setCardBorderColor: (value: string) => void;
    darkCardBorderColor: string;
    setDarkCardBorderColor: (value: string) => void;

    // Inputs
    inputBorderColor: string;
    setInputBorderColor: (value: string) => void;
    darkInputBorderColor: string;
    setDarkInputBorderColor: (value: string) => void;
    inputFocusColor: string;
    setInputFocusColor: (value: string) => void;
    darkInputFocusColor: string;
    setDarkInputFocusColor: (value: string) => void;
}

export const ThemeContext = createContext<Theme | null>(null);

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}