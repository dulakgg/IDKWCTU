import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full border-t-3 px-6 py-10">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/"
                            className="text-3xl font-bold tracking-tight w-fit"
                        >
                            IDKWCTU
                        </Link>

                        <p className="text-sm max-w-xs">
                            A simple tool to test colors, contrast and readability.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold text-sm">
                                Navigation
                            </span>

                            <Link to="/#about" className="text-sm">
                                About
                            </Link>

                            <Link to="/#info" className="text-sm">
                                Info
                            </Link>

                            <Link to="/#contact" className="text-sm">
                                Contact
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="font-semibold text-sm">
                                Resources
                            </span>

                            <a
                                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm"
                            >
                                WCAG guidelines
                            </a>

                            <a
                                href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm"
                            >
                                Contrast requirements
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs opacity-50">
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
