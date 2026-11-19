
import { useEffect, useState } from "react";

interface CursorInfo {
    x: number;
    y: number;
    foreground: string;
    background: string;
    ratio: number;
    element: string;
}

function parseColor(color: string): [number, number, number] | null {
    const match = color.match(/[\d.]+/g);

    if (!match || match.length < 3) return null;

    return [
        Number(match[0]),
        Number(match[1]),
        Number(match[2]),
    ];
}

function luminance(color: string): number {
    const rgb = parseColor(color);

    if (!rgb) return 0;

    const [r, g, b] = rgb.map((value) => {
        const channel = value / 255;

        return channel <= 0.04045
            ? channel / 12.92
            : Math.pow((channel + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrast(foreground: string, background: string): number {
    const first = luminance(foreground);
    const second = luminance(background);

    return (
        (Math.max(first, second) + 0.05) /
        (Math.min(first, second) + 0.05)
    );
}

function getBackground(element: HTMLElement): string {
    let current: HTMLElement | null = element;

    while (current) {
        const background = getComputedStyle(current).backgroundColor;

        if (
            background !== "transparent" &&
            background !== "rgba(0, 0, 0, 0)"
        ) {
            return background;
        }

        current = current.parentElement;
    }

    return getComputedStyle(document.body).backgroundColor;
}

function getStatus(ratio: number) {
    if (ratio >= 7) {
        return {
            label: "Excellent",
            description: "Meets the highest WCAG accessibility standard.",
            color: "#22c55e",
            level: "AAA",
        };
    }

    if (ratio >= 4.5) {
        return {
            label: "Good",
            description: "Meets the WCAG AA standard for normal text.",
            color: "#22c55e",
            level: "AA",
        };
    }

    if (ratio >= 3) {
        return {
            label: "Needs improvement",
            description: "Suitable only for large text under WCAG AA.",
            color: "#eab308",
            level: "Large text only",
        };
    }

    return {
        label: "Poor readability",
        description: "Does not meet WCAG AA contrast requirements.",
        color: "#ef4444",
        level: "Fail",
    };
}

export default function ContrastCursor() {
    const [info, setInfo] = useState<CursorInfo | null>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let animationFrame = 0;

        const handleClick = () => {
            setActive((prev) => !prev);
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!active) return;

            cancelAnimationFrame(animationFrame);

            const { clientX, clientY } = event;

            animationFrame = requestAnimationFrame(() => {
                const element = document.elementFromPoint(clientX, clientY);

                if (!(element instanceof HTMLElement)) return;
                if (element.closest("[data-contrast-ignore]")) return;

                const styles = getComputedStyle(element);
                const foreground = styles.color;
                const background = getBackground(element);
                const ratio = getContrast(foreground, background);

                setInfo({
                    x: clientX,
                    y: clientY,
                    foreground,
                    background,
                    ratio,
                    element: element.tagName.toLowerCase(),
                });
            });
        };

        const handleMouseLeave = () => setInfo(null);

        window.addEventListener("click", handleClick);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [active]);

    const visible = active && info !== null;

    const status = getStatus(info?.ratio ?? 1);

    const requirements = [
        { label: "AA", value: 4.5 },
        { label: "AAA", value: 7 },
    ];

    return (
        <div
            data-contrast-ignore
            className={`pointer-events-none fixed z-99999 w-64 rounded-xl border border-white/10 bg-[#111827] p-4 text-white shadow-2xl transition-opacity duration-200 ${
                visible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{
                left: info?.x ?? 0,
                top: (info?.y ?? 0) - 16,
                transform: "translate(-50%, -100%)",
            }}
        >
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold">
                        Text readability
                    </p>
                    <p className="text-[10px] text-gray-400">
                        Accessibility checker
                    </p>
                </div>

                <span
                    className="rounded-md px-2 py-1 text-[10px] font-bold"
                    style={{
                        color: status.color,
                        backgroundColor: `${status.color}18`,
                    }}
                >
                    {status.label}
                </span>
            </div>

            <div className="mb-3 rounded-lg bg-white/5 p-3">
                <p className="text-[10px] text-gray-400">
                    Contrast ratio
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight">
                        {info?.ratio.toFixed(2) ?? "0.00"}:1
                    </span>

                    <span
                        className="text-xs font-semibold"
                        style={{ color: status.color }}
                    >
                        {status.level}
                    </span>
                </div>

                <p className="mt-1 text-[10px] leading-relaxed text-gray-400">
                    {status.description}
                </p>
            </div>

            <div className="mb-3 space-y-2">
                {requirements.map((requirement) => {
                    const passed = (info?.ratio ?? 0) >= requirement.value;

                    return (
                        <div
                            key={requirement.label}
                            className="flex items-center justify-between text-xs"
                        >
                            <span className="text-gray-400">
                                WCAG {requirement.label}
                                <span className="ml-1 text-gray-500">
                                    ({requirement.value}:1)
                                </span>
                            </span>

                            <span
                                className={
                                    passed
                                        ? "font-semibold text-green-400"
                                        : "font-semibold text-red-400"
                                }
                            >
                                {passed ? "Passed" : "Not passed"}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="border-t border-white/10 pt-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Detected colors
                </p>

                {[
                    {
                        label: "Text color",
                        value: info?.foreground ?? "N/A",
                    },
                    {
                        label: "Background",
                        value: info?.background ?? "N/A",
                    },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="mb-2 flex items-center gap-2"
                    >
                        <div
                            className="h-7 w-7 shrink-0 rounded-md border border-white/10"
                            style={{ backgroundColor: item.value }}
                        />

                        <div className="min-w-0">
                            <p className="text-[10px] text-gray-400">
                                {item.label}
                            </p>
                            <p className="truncate text-xs font-medium">
                                {item.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
