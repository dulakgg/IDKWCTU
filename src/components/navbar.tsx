import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
    const theme = useTheme();
    const { darkMode } = theme;

    const colors = {
        background: darkMode ? theme.darkBackground : theme.background,
        text: darkMode ? theme.darkTextColor : theme.textColor,
        muted: darkMode ? theme.darkMutedColor : theme.mutedColor,
        border: darkMode ? theme.darkBorderColor : theme.borderColor,
        primary: darkMode ? theme.darkPrimaryColor : theme.primaryColor,
    };

    const linkStyle = {
        color: colors.text,
        fontFamily: theme.fontFamily,
        fontSize: `${theme.fontSize}px`,
        transition: "color 150ms ease",
    };

    return (
        <nav
            className="flex justify-between items-center pl-2 px-5 py-2 transition-colors duration-200"
            style={{
                backgroundColor: colors.background,
                borderBottom: `${theme.borderWidth}px solid ${colors.border}`,
                color: colors.text,
                fontFamily: theme.fontFamily,
            }}
        >
            <Link
                to="/"
                className="p-3 font-bold tracking-tight"
                style={{
                    color: colors.text,
                    fontFamily: theme.headingFontFamily,
                    fontSize: `${theme.headingFontSize * 2}px`,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.text;
                }}
            >
                IDKWCTU
            </Link>

            <ul className="flex gap-8 items-center pr-5">
                {[
                    { to: "/#about", label: "about" },
                    { to: "/#info", label: "info" },
                    { to: "/#contact", label: "contact us" },
                ].map((item) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            style={linkStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = colors.primary;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = colors.text;
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}