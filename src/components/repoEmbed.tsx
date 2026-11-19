
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { GrGithub } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";

interface GitHubRepoData {
    name: string;
    full_name: string;
    stargazers_count: number;
    html_url: string;
}

export default function GitHubRepo() {
    const theme = useTheme();
    const { darkMode } = theme;

    const [repo, setRepo] = useState<GitHubRepoData | null>(null);

    const colors = {
        background: darkMode ? theme.darkSurface : theme.surface,
        text: darkMode ? theme.darkTextColor : theme.textColor,
        muted: darkMode ? theme.darkMutedColor : theme.mutedColor,
        border: darkMode ? theme.darkBorderColor : theme.borderColor,
        hover: darkMode ? theme.darkHoverBackground : theme.hoverBackground,
        primary: darkMode ? theme.darkPrimaryColor : theme.primaryColor,
    };

    useEffect(() => {
        fetch("https://api.github.com/repos/dulakgg/IDKWCTU")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch repository");
                return response.json();
            })
            .then((data: GitHubRepoData) => setRepo(data))
            .catch(console.error);
    }, []);

    if (!repo) {
        return (
            <div
                className="flex items-center gap-3 p-3"
                style={{
                    color: colors.muted,
                    fontSize: `${theme.smallFontSize}px`,
                }}
            >
                <GrGithub size={22} />
                Loading repository...
            </div>
        );
    }

    return (
        <div
            className="flex items-center gap-3 p-3 border transition-colors duration-200"
            style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
                borderRadius: `${theme.borderRadius}px`,
                fontFamily: theme.fontFamily,
            }}
        >
            <img
                src="/android-chrome-512x512.png"
                alt="logo"
                className="size-10"
            />

            <div className="flex flex-col min-w-0">
                <span
                    className="font-semibold truncate"
                    style={{
                        color: colors.text,
                        fontFamily: theme.headingFontFamily,
                        fontSize: `${theme.smallFontSize}px`,
                    }}
                >
                    {repo.name}
                </span>

                <span
                    className="flex items-center gap-1"
                    style={{
                        color: colors.muted,
                        fontSize: `${theme.smallFontSize - 2}px`,
                    }}
                >
                    <FaStar size={11} />
                    {repo.stargazers_count} stars
                </span>
            </div>

            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-150"
                style={{
                    backgroundColor: colors.hover,
                    color: colors.text,
                    border: `${theme.borderWidth}px solid ${colors.border}`,
                    borderRadius: `${theme.borderRadius}px`,
                    fontSize: `${theme.smallFontSize - 1}px`,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                    e.currentTarget.style.color = darkMode ? "#000" : "#fff";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.hover;
                    e.currentTarget.style.color = colors.text;
                }}
            >
                <GrGithub size={15} />
                Star
            </a>
        </div>
    );
}
