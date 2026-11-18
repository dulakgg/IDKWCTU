import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
    const theme = useTheme();
    const { darkMode } = theme;

    const colors = {
        background: darkMode ? theme.darkBackground : theme.background,
        surface: darkMode ? theme.darkSurface : theme.surface,
        text: darkMode ? theme.darkTextColor : theme.textColor,
        muted: darkMode ? theme.darkMutedColor : theme.mutedColor,
        border: darkMode ? theme.darkBorderColor : theme.borderColor,
        hover: darkMode ? theme.darkHoverBackground : theme.hoverBackground,
        primary: darkMode ? theme.darkPrimaryColor : theme.primaryColor,
    };

    const headingStyle = {
        color: colors.text,
        fontFamily: theme.headingFontFamily,
    };

    const linkStyle = {
        color: colors.muted,
        fontFamily: theme.fontFamily,
        fontSize: `${theme.smallFontSize}px`,
        transition: "color 150ms ease",
    };

    return (
        <footer
            className="w-full px-6 py-10 transition-colors duration-200"
            style={{
                backgroundColor: colors.background,
                borderTop: `${theme.borderWidth}px solid ${colors.border}`,
                color: colors.text,
                fontFamily: theme.fontFamily,
            }}
        >
            <div className="mx-auto max-w-7xl flex flex-col gap-8">

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/"
                            className="text-3xl font-bold tracking-tight w-fit"
                            style={headingStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = colors.primary;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = colors.text;
                            }}
                        >
                            IDKWCTU
                        </Link>

                        <p
                            className="max-w-xs"
                            style={{
                                color: colors.muted,
                                fontSize: `${theme.smallFontSize}px`,
                            }}
                        >
                            A simple tool to test colors, contrast and readability.
                        </p>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-3">
                            <span
                                className="font-semibold"
                                style={{
                                    ...headingStyle,
                                    fontSize: `${theme.smallFontSize}px`,
                                }}
                            >
                                Navigation
                            </span>

                            {[
                                { to: "/#about", label: "About" },
                                { to: "/#info", label: "Info" },
                                { to: "/#contact", label: "Contact" },
                            ].map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    style={linkStyle}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = colors.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = colors.muted;
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <span
                                className="font-semibold"
                                style={{
                                    ...headingStyle,
                                    fontSize: `${theme.smallFontSize}px`,
                                }}
                            >
                                Resources
                            </span>

                            {[
                                {
                                    href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                                    label: "WCAG guidelines",
                                },
                                {
                                    href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
                                    label: "Contrast requirements",
                                },
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = colors.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = colors.muted;
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-3"
                    style={{
                        borderColor: colors.border,
                        color: colors.muted,
                        fontSize: `${theme.smallFontSize - 2}px`,
                    }}
                >
                    <span>
                        © {new Date().getFullYear()} IDKWCTU. All rights reserved lol.
                    </span>

                    <span>
                        Made because I was bored.
                    </span>
                </div>

            </div>
        </footer>
    );
}