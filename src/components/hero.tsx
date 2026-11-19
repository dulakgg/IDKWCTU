import { useTheme } from "../contexts/ThemeContext";

export default function HeroSection() {
    const theme = useTheme();
    const { darkMode } = theme;

    const colors = {
        background: darkMode ? theme.darkBackground : theme.background,
        surface: darkMode ? theme.darkSurface : theme.surface,
        card: darkMode ? theme.darkCardBackground : theme.cardBackground,
        input: darkMode ? theme.darkInputBackground : theme.inputBackground,

        text: darkMode ? theme.darkTextColor : theme.textColor,
        muted: darkMode ? theme.darkMutedColor : theme.mutedColor,
        disabled: darkMode ? theme.darkDisabledColor : theme.disabledColor,
        placeholder: darkMode ? theme.darkPlaceholderColor : theme.placeholderColor,

        border: darkMode ? theme.darkBorderColor : theme.borderColor,

        primary: darkMode ? theme.darkPrimaryColor : theme.primaryColor,
        primaryHover: darkMode ? theme.darkPrimaryHover : theme.primaryHover,
        primaryActive: darkMode ? theme.darkPrimaryActive : theme.primaryActive,

        secondary: darkMode ? theme.darkSecondaryColor : theme.secondaryColor,
        secondaryHover: darkMode ? theme.darkSecondaryHover : theme.secondaryHover,
        secondaryActive: darkMode ? theme.darkSecondaryActive : theme.secondaryActive,

        hover: darkMode ? theme.darkHoverBackground : theme.hoverBackground,
        active: darkMode ? theme.darkActiveBackground : theme.activeBackground,
        selected: darkMode ? theme.darkSelectedColor : theme.selectedColor,
        focus: darkMode ? theme.darkFocusColor : theme.focusColor,
        disabledBackground: darkMode ? theme.darkDisabledBackground : theme.disabledBackground,

        cardHover: darkMode ? theme.darkCardHoverBackground : theme.cardHoverBackground,
        cardBorder: darkMode ? theme.darkCardBorderColor : theme.cardBorderColor,

        inputBorder: darkMode ? theme.darkInputBorderColor : theme.inputBorderColor,
        inputFocus: darkMode ? theme.darkInputFocusColor : theme.inputFocusColor,
    };

    const borderStyle = {
        borderColor: colors.border,
        borderWidth: `${theme.borderWidth}px`,
        borderRadius: `${theme.borderRadius}px`,
    };

    const cardBorderStyle = {
        borderColor: colors.cardBorder,
        borderWidth: `${theme.borderWidth}px`,
        borderRadius: `${theme.borderRadius}px`,
    };

    const headingStyle = {
        color: colors.text,
        fontFamily: theme.headingFontFamily,
        fontSize: `${theme.headingFontSize * 2.5}px`,
    };

    const bodyStyle = {
        color: colors.text,
        fontFamily: theme.fontFamily,
        fontSize: `${theme.fontSize}px`,
    };

    return (
        <section
            className="w-full px-6 py-24 transition-colors duration-200"
            style={{
                backgroundColor: colors.background,
                ...bodyStyle,
            }}
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-start gap-7">
                        <span
                            className="text-sm font-medium border rounded-full px-4 py-2"
                            style={{
                                ...borderStyle,
                                backgroundColor: colors.surface,
                                color: colors.primary,
                                fontSize: `${theme.smallFontSize}px`,
                            }}
                        >
                            Your colors
                        </span>

                        <h1
                            className="font-bold tracking-tight leading-[1.05]"
                            style={headingStyle}
                        >
                            Does your text
                            <br />
                            work with the
                            <br />
                            background?
                        </h1>

                        <p
                            className="max-w-lg leading-relaxed"
                            style={{
                                color: colors.muted,
                                fontSize: `${theme.fontSize + 2}px`,
                            }}
                        >
                            Test text readability, contrast and color combinations.
                            See how your colors work together before using them in
                            your next project.
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                className="px-7 py-3 font-medium transition-colors"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: "#ffffff",
                                    borderRadius: `${theme.borderRadius}px`,
                                    border: `${theme.borderWidth}px solid ${colors.primary}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primaryHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primary;
                                }}
                                onMouseDown={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primaryActive;
                                }}
                                onMouseUp={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primaryHover;
                                }}
                            >
                                Start testing
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="p-3 shadow-xl transition-colors duration-200"
                            style={{
                                ...borderStyle,
                                backgroundColor: colors.surface,
                            }}
                        >
                            <div
                                className="p-6 md:p-8 flex flex-col gap-8 transition-colors duration-200"
                                style={{
                                    ...borderStyle,
                                    backgroundColor: colors.card,
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <span
                                        className="font-semibold"
                                        style={{
                                            color: colors.text,
                                            fontFamily: theme.headingFontFamily,
                                            fontSize: `${theme.fontSize}px`,
                                        }}
                                    >
                                        Preview
                                    </span>
                                </div>

                                <div
                                    className="p-8 flex flex-col gap-4 transition-colors duration-200"
                                    style={{
                                        ...cardBorderStyle,
                                        backgroundColor: colors.card,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.cardHover;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.card;
                                    }}
                                >
                                    <span
                                        className="uppercase tracking-widest"
                                        style={{
                                            color: colors.muted,
                                            fontSize: `${theme.smallFontSize - 2}px`,
                                        }}
                                    >
                                        Sample content
                                    </span>

                                    <h2
                                        className="font-bold"
                                        style={{
                                            color: colors.text,
                                            fontFamily: theme.headingFontFamily,
                                            fontSize: `${theme.headingFontSize}px`,
                                        }}
                                    >
                                        Make colors work.
                                    </h2>

                                    <p
                                        className="leading-relaxed"
                                        style={{
                                            color: colors.muted,
                                            fontSize: `${theme.fontSize}px`,
                                        }}
                                    >
                                        Good design starts with readable text
                                        and balanced color combinations.
                                    </p>

                                    <button
                                        className="border px-5 py-3 w-fit font-medium transition-colors"
                                        style={{
                                            backgroundColor: colors.secondary,
                                            color: colors.text,
                                            borderColor: colors.border,
                                            borderWidth: `${theme.borderWidth}px`,
                                            borderRadius: `${theme.borderRadius}px`,
                                            fontSize: `${theme.smallFontSize}px`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.secondaryHover;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.secondary;
                                        }}
                                        onMouseDown={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.secondaryActive;
                                        }}
                                        onMouseUp={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.secondaryHover;
                                        }}
                                    >
                                        Explore more
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        {
                                            label: "TEXT COLOR",
                                            value: colors.text,
                                        },
                                        {
                                            label: "BACKGROUND",
                                            value: colors.background,
                                        },
                                        {
                                            label: "PRIMARY",
                                            value: colors.primary,
                                        },
                                        {
                                            label: "BORDER",
                                            value: colors.border,
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="p-4"
                                            style={{
                                                ...cardBorderStyle,
                                                backgroundColor: colors.surface,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: colors.muted,
                                                    fontSize: `${theme.smallFontSize - 2}px`,
                                                }}
                                            >
                                                {item.label}
                                            </span>

                                            <p
                                                className="mt-2"
                                                style={{
                                                    color: colors.text,
                                                    fontSize: `${theme.smallFontSize}px`,
                                                }}
                                            >
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Test your input colors..."
                                    style={{
                                        backgroundColor: colors.input,
                                        color: colors.text,
                                        borderColor: colors.inputBorder,
                                        borderWidth: `${theme.borderWidth}px`,
                                        borderRadius: `${theme.borderRadius}px`,
                                        fontSize: `${theme.fontSize}px`,
                                        outlineColor: colors.inputFocus,
                                    }}
                                    className="w-full px-4 py-3 border placeholder:opacity-100"
                                />

                                <button
                                    disabled
                                    className="px-5 py-3 w-fit font-medium border"
                                    style={{
                                        backgroundColor: colors.disabledBackground,
                                        color: colors.disabled,
                                        borderColor: colors.border,
                                        borderRadius: `${theme.borderRadius}px`,
                                        borderWidth: `${theme.borderWidth}px`,
                                        fontSize: `${theme.fontSize}px`,
                                    }}
                                >
                                    Disabled button
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}