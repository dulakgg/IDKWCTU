import { useState } from "react";

import { CgClose } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";

import { useTheme } from "../contexts/ThemeContext";
import Input from "./ui/input";

export default function Toolbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const theme = useTheme();

    const { darkMode, setDarkMode } = theme;
    
    const toolbarColors = darkMode
        ? {
              background: "#090909",
              text: "#f5f5f5",
              border: "#353535",
              inputBackground: "#181818",
              inputText: "#f5f5f5",
              inputBorder: "#454545",
              accent: "#ffffff",
              accentText: "#090909",
          }
        : {
              background: "#ffffff",
              text: "#111111",
              border: "#e5e5e5",
              inputBackground: "#f5f5f5",
              inputText: "#111111",
              inputBorder: "#d4d4d4",
              accent: "#111111",
              accentText: "#ffffff",
          };

    const colors = [
        {
            title: "Backgrounds",
            fields: [
                ["Background", "background"],
                ["Dark background", "darkBackground"],
                ["Surface", "surface"],
                ["Dark surface", "darkSurface"],
                ["Card background", "cardBackground"],
                ["Dark card background", "darkCardBackground"],
                ["Input background", "inputBackground"],
                ["Dark input background", "darkInputBackground"],
            ],
        },
        {
            title: "Text colors",
            fields: [
                ["Text color", "textColor"],
                ["Dark text color", "darkTextColor"],
                ["Muted color", "mutedColor"],
                ["Dark muted color", "darkMutedColor"],
                ["Disabled color", "disabledColor"],
                ["Dark disabled color", "darkDisabledColor"],
                ["Placeholder color", "placeholderColor"],
                ["Dark placeholder color", "darkPlaceholderColor"],
            ],
        },
        {
            title: "Borders",
            fields: [
                ["Border color", "borderColor"],
                ["Dark border color", "darkBorderColor"],
                ["Card border", "cardBorderColor"],
                ["Dark card border", "darkCardBorderColor"],
                ["Input border", "inputBorderColor"],
                ["Dark input border", "darkInputBorderColor"],
            ],
        },
        {
            title: "Primary buttons",
            fields: [
                ["Primary color", "primaryColor"],
                ["Dark primary color", "darkPrimaryColor"],
                ["Primary hover", "primaryHover"],
                ["Dark primary hover", "darkPrimaryHover"],
                ["Primary active", "primaryActive"],
                ["Dark primary active", "darkPrimaryActive"],
            ],
        },
        {
            title: "Secondary buttons",
            fields: [
                ["Secondary color", "secondaryColor"],
                ["Dark secondary color", "darkSecondaryColor"],
                ["Secondary hover", "secondaryHover"],
                ["Dark secondary hover", "darkSecondaryHover"],
                ["Secondary active", "secondaryActive"],
                ["Dark secondary active", "darkSecondaryActive"],
            ],
        },
        {
            title: "Interactive states",
            fields: [
                ["Hover background", "hoverBackground"],
                ["Dark hover background", "darkHoverBackground"],
                ["Active background", "activeBackground"],
                ["Dark active background", "darkActiveBackground"],
                ["Selected color", "selectedColor"],
                ["Dark selected color", "darkSelectedColor"],
                ["Focus color", "focusColor"],
                ["Dark focus color", "darkFocusColor"],
                ["Disabled background", "disabledBackground"],
                ["Dark disabled background", "darkDisabledBackground"],
            ],
        },
        {
            title: "Cards",
            fields: [
                ["Card hover background", "cardHoverBackground"],
                ["Dark card hover background", "darkCardHoverBackground"],
            ],
        },
        {
            title: "Inputs",
            fields: [
                ["Input focus", "inputFocusColor"],
                ["Dark input focus", "darkInputFocusColor"],
            ],
        },
    ] as const;

    const renderColorField = (
        label: string,
        value: string,
        setValue: (value: string) => void
    ) => (
        <div
            key={label}
            className={`flex flex-col gap-1 ${
                darkMode
                    ? "[&_input:not([type=color])]:bg-[#181818]! [&_input:not([type=color])]:text-[#f5f5f5]! [&_input]:border-[#454545]!"
                    : "[&_input:not([type=color])]:bg-[#f5f5f5]! [&_input:not([type=color])]:text-[#111111]! [&_input]:border-[#d4d4d4]!"
            }`}
            style={{ color: toolbarColors.text, colorScheme: darkMode ? "dark" : "light" }}
        >
            <label className="text-sm">{label}</label>
            <Input value={value} setValue={setValue} />
        </div>
    );

    const renderNumberField = (
        label: string,
        value: number,
        setValue: (value: number) => void
    ) => (
        <div className="flex flex-col gap-1" style={{ color: toolbarColors.text }}>
            <label className="text-sm">{label}</label>
            <input
                type="number"
                value={value}
                min={0}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full rounded-lg border px-3 py-2 outline-none"
                style={{
                    backgroundColor: toolbarColors.inputBackground,
                    color: toolbarColors.inputText,
                    borderColor: toolbarColors.inputBorder,
                    colorScheme: darkMode ? "dark" : "light",
                }}
            />
        </div>
    );

    const renderFontField = (
        label: string,
        value: string,
        setValue: (value: string) => void
    ) => (
        <div className="flex flex-col gap-1" style={{ color: toolbarColors.text }}>
            <label className="text-sm">{label}</label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 outline-none"
                style={{
                    backgroundColor: toolbarColors.inputBackground,
                    color: toolbarColors.inputText,
                    borderColor: toolbarColors.inputBorder,
                    colorScheme: darkMode ? "dark" : "light",
                    fontFamily: value,
                }}
            >
                {[
                    "Inter",
                    "Arial",
                    "Roboto",
                    "Outfit",
                    "Poppins",
                    "Montserrat",
                    "Open Sans",
                    "Lato",
                    "Nunito",
                    "Playfair Display",
                    "Merriweather",
                    "Georgia",
                    "monospace",
                    "sans-serif",
                    "serif",
                ].map((font) => (
                    <option key={font} value={font}>
                        {font}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <>
            <div
                className={`fixed bottom-1 left-1 z-9999 flex h-20 w-20 items-end justify-start transition-all duration-100 ease-in-out hover:scale-150 hover:translate-x-6 hover:-translate-y-6 ${
                    sidebarOpen
                        ? "pointer-events-none translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                }`}
            >
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open theme settings"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl transition-colors"
                    style={{
                        backgroundColor: toolbarColors.accent,
                        color: toolbarColors.accentText,
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.18)",
                    }}
                >
                    <FaPencil />
                </button>
            </div>

            <aside
                className={`fixed left-0 top-0 z-9999 h-screen w-80 max-w-[90vw] transition-transform duration-500 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{
                    backgroundColor: toolbarColors.background,
                    color: toolbarColors.text,
                    borderRight: `${theme.borderWidth}px solid ${toolbarColors.border}`,
                    borderRadius: `0 ${theme.borderRadius * 2}px ${theme.borderRadius * 2}px 0`,
                    fontFamily: theme.fontFamily,
                    colorScheme: darkMode ? "dark" : "light",
                    boxShadow: "4px 0 24px rgba(0, 0, 0, 0.12)",
                }}
            >
                <div className="flex h-full flex-col">
                    <div
                        className="flex items-center justify-between border-b p-4"
                        style={{ borderColor: toolbarColors.border }}
                    >
                        <h2
                            className="font-bold"
                            style={{
                                fontFamily: theme.headingFontFamily,
                                fontSize: `${theme.headingFontSize}px`,
                                color: toolbarColors.text,
                            }}
                        >
                            Theme settings
                        </h2>

                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close theme settings"
                            className="cursor-pointer rounded-lg p-2 transition-opacity hover:opacity-70"
                            style={{ color: toolbarColors.text }}
                        >
                            <CgClose size={25} />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
                        <section className="flex flex-col gap-3">
                            <h3 className="font-semibold" style={{ color: toolbarColors.text }}>
                                Appearance
                            </h3>

                            <button
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-full rounded-lg px-4 py-3 font-medium transition-colors hover:opacity-85"
                                style={{
                                    backgroundColor: toolbarColors.accent,
                                    color: toolbarColors.accentText,
                                    borderRadius: `${theme.borderRadius}px`,
                                }}
                            >
                                {darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            </button>
                        </section>

                        {colors.map((section) => (
                            <details
                                key={section.title}
                                className="rounded-xl border p-3"
                                style={{ borderColor: toolbarColors.border }}
                            >
                                <summary
                                    className="mb-3 cursor-pointer font-semibold"
                                    style={{ color: toolbarColors.text }}
                                >
                                    {section.title}
                                </summary>

                                <div className="flex flex-col gap-3">
                                    {section.fields.map(([label, key]) => {
                                        const setterKey =
                                            `set${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof theme;
                                        const setValue = theme[setterKey] as (value: string) => void;

                                        return renderColorField(label, theme[key], setValue);
                                    })}
                                </div>
                            </details>
                        ))}

                        <details
                            className="rounded-xl border p-3"
                            style={{ borderColor: toolbarColors.border }}
                        >
                            <summary
                                className="mb-3 cursor-pointer font-semibold"
                                style={{ color: toolbarColors.text }}
                            >
                                Typography
                            </summary>

                            <div className="flex flex-col gap-3">
                                {renderFontField(
                                    "Font family",
                                    theme.fontFamily,
                                    theme.setFontFamily
                                )}

                                {renderFontField(
                                    "Heading font family",
                                    theme.headingFontFamily,
                                    theme.setHeadingFontFamily
                                )}

                                {renderNumberField(
                                    "Font size",
                                    theme.fontSize,
                                    theme.setFontSize
                                )}

                                {renderNumberField(
                                    "Heading font size",
                                    theme.headingFontSize,
                                    theme.setHeadingFontSize
                                )}

                                {renderNumberField(
                                    "Small font size",
                                    theme.smallFontSize,
                                    theme.setSmallFontSize
                                )}
                            </div>
                        </details>

                        <details
                            className="rounded-xl border p-3"
                            style={{ borderColor: toolbarColors.border }}
                        >
                            <summary
                                className="mb-3 cursor-pointer font-semibold"
                                style={{ color: toolbarColors.text }}
                            >
                                Border settings
                            </summary>

                            <div className="flex flex-col gap-3">
                                {renderNumberField(
                                    "Border width",
                                    theme.borderWidth,
                                    theme.setBorderWidth
                                )}

                                {renderNumberField(
                                    "Border radius",
                                    theme.borderRadius,
                                    theme.setBorderRadius
                                )}
                            </div>
                        </details>
                    </div>
                </div>
            </aside>
        </>
    );
}
