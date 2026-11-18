
export default function HeroSection() {
    return (
        <section className="w-full px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-start gap-7">
                        <span className="text-sm font-medium border rounded-full px-4 py-2">
                            Your colors
                        </span>

                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                            Does your text
                            <br />
                            work with the
                            <br />
                            background?
                        </h1>

                        <p className="text-lg opacity-60 max-w-lg leading-relaxed">
                            Test text readability, contrast and color combinations.
                            See how your colors work together before using them in
                            your next project.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="px-7 py-3 rounded-xl border font-medium">
                                Start testing
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border rounded-3xl p-3 shadow-xl">
                            <div className="rounded-2xl border p-6 md:p-8 flex flex-col gap-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">
                                        Preview
                                    </span>
                                </div>

                                <div className="border rounded-2xl p-8 flex flex-col gap-4">
                                    <span className="text-xs uppercase tracking-widest opacity-50">
                                        Sample content
                                    </span>
                                    <h2 className="text-4xl font-bold">
                                        Make colors work.
                                    </h2>
                                    <p className="opacity-70 leading-relaxed">
                                        Good design starts with readable text
                                        and balanced color combinations.
                                    </p>
                                    <button className="border rounded-lg px-5 py-3 w-fit text-sm font-medium">
                                        Explore more
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="border rounded-xl p-4">
                                        <span className="text-xs opacity-50">
                                            TEXT COLOR
                                        </span>
                                        <p className="font-mono text-sm mt-2">
                                            #FFFFFF
                                        </p>
                                    </div>
                                    <div className="border rounded-xl p-4">
                                        <span className="text-xs opacity-50">
                                            BACKGROUND
                                        </span>
                                        <p className="font-mono text-sm mt-2">
                                            #181818
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
