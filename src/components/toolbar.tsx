import { useState } from "react";

import { CgClose } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";

import { useTheme } from "../contexts/ThemeContext";
import Input from "./ui/input";

export default function Toolbar() {
    const [exportModalOpen, setExportModalOpen] = useState(false);
    const [exportSelection, setExportSelection] = useState<"light" | "dark" | "both" | null>(null);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const theme = useTheme();

    const { darkMode, setDarkMode } = theme;
    
    type ColorField = (typeof colors)[number]["fields"][number];

    const generateCSS = () => {
        const getColorVariables = (dark: boolean): string => {
            const fields: ColorField[] = colors.reduce<ColorField[]>(
                (result, section) => [...result, ...section.fields],
                []
            );

            return fields
                .filter((field) => !field[1].startsWith("dark"))
                .map((field) => {
                    const key = field[1];

                    const darkKey = `dark${key.charAt(0).toUpperCase()}${key.slice(1)}`;

                    const value = dark
                        ? theme[darkKey as keyof typeof theme]
                        : theme[key];

                    const variable = key.replace(
                        /[A-Z]/g,
                        (letter) => `-${letter.toLowerCase()}`
                    );

                    return `    --${variable}: ${value};`;
                })
                .join("\n");
        };

        const sharedVariables = [
            `    --font-family: ${theme.fontFamily};`,
            `    --heading-font-family: ${theme.headingFontFamily};`,
            `    --font-size: ${theme.fontSize}px;`,
            `    --heading-font-size: ${theme.headingFontSize}px;`,
            `    --small-font-size: ${theme.smallFontSize}px;`,
            `    --border-width: ${theme.borderWidth}px;`,
            `    --border-radius: ${theme.borderRadius}px;`,
        ].join("\n");

        const light = `:root {\n${getColorVariables(false)}\n}`;
        const dark = `.dark {\n${getColorVariables(true)}\n}`;
        const shared = `body {\n${sharedVariables}\n}`;

        if (exportSelection === "light") return `${light}\n\n${shared}`;
        if (exportSelection === "dark") return `${dark}\n\n${shared}`;

        return `${light}\n\n${dark}\n\n${shared}`;
    };

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
                data-contrast-ignore
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
                data-contrast-ignore
                className={`fixed left-0 top-0 z-9999 h-screen w-80 max-w-[90vw] transition-transform duration-500 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{
                    backgroundColor: toolbarColors.background,
                    color: toolbarColors.text,
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
                            <p className="m-3">You can click anywhere on the page to open an automatic contrast checker :D</p>
                            <h3 className="font-semibold" style={{ color: toolbarColors.text }}>
                                Appearance
                            </h3>
                            <button
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-full rounded-lg px-4 py-3 font-medium transition-colors hover:opacity-85 cursor-pointer"
                                style={{
                                    backgroundColor: toolbarColors.accent,
                                    color: toolbarColors.accentText,
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
                        <button
                            type="button"
                            onClick={() => setExportModalOpen(true)}
                            className="w-full rounded-lg px-2 py-3 font-medium transition-colors hover:opacity-85 cursor-pointer"
                            style={{
                                backgroundColor: toolbarColors.accent,
                                color: toolbarColors.accentText,
                            }}
                        >
                            Export theme
                        </button>
                    </div>
                </div>
            </aside>
            {exportModalOpen && (
                <div
                    data-contrast-ignore
                    className="fixed inset-0 z-10000 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => {
                        setExportModalOpen(false);
                        setExportSelection(null);
                    }}
                >
                    <div
                        className="w-full max-w-2xl rounded-xl border p-5 shadow-2xl"
                        style={{
                            backgroundColor: toolbarColors.background,
                            color: toolbarColors.text,
                            borderColor: toolbarColors.border,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-lg font-bold">Export theme</h2>

                            <button
                                onClick={() => {
                                    setExportModalOpen(false);
                                    setExportSelection(null);
                                }}
                                className="cursor-pointer"
                            >
                                <CgClose size={22} />
                            </button>
                        </div>

                        {!exportSelection ? (
                            <div className="flex flex-col gap-3">
                                <p className="text-sm opacity-60">
                                    Select which theme variables you want to export.
                                </p>

                                {([
                                    ["light", "Light theme", "Export :root variables"],
                                    ["dark", "Dark theme", "Export .dark variables"],
                                    ["both", "Both themes", "Export light and dark variables"],
                                ] as const).map(([value, title, description]) => (
                                    <button
                                        key={value}
                                        onClick={() => setExportSelection(value)}
                                        className="rounded-lg border p-4 text-left transition-colors hover:opacity-70 cursor-pointer"
                                        style={{ borderColor: toolbarColors.border }}
                                    >
                                        <div className="font-medium">{title}</div>
                                        <p className="text-sm opacity-60">{description}</p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">
                                        {exportSelection === "light"
                                            ? "Light theme CSS"
                                            : exportSelection === "dark"
                                            ? "Dark theme CSS"
                                            : "Complete theme CSS"}
                                    </span>

                                    <button
                                        onClick={() => setExportSelection(null)}
                                        className="text-sm opacity-60 hover:opacity-100 cursor-pointer"
                                    >
                                        Change selection
                                    </button>
                                </div>

                                <textarea
                                    readOnly
                                    value={generateCSS()}
                                    rows={16}
                                    className="w-full resize-y rounded-lg border p-3 font-mono text-xs outline-none"
                                    style={{
                                        backgroundColor: toolbarColors.inputBackground,
                                        color: toolbarColors.inputText,
                                        borderColor: toolbarColors.inputBorder,
                                    }}
                                />

                                <div className="flex justify-end">
                                    <button
                                        onClick={() =>
                                            navigator.clipboard.writeText(generateCSS())
                                        }
                                        className="rounded-lg px-5 py-2 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                                        style={{
                                            backgroundColor: toolbarColors.accent,
                                            color: toolbarColors.accentText,
                                        }}
                                    >
                                        Copy CSS
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
