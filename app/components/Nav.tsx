"use client";

import { useEffect, useState } from "react";

const items = [
    { id: "chi-sono", label: "Chi sono" },
    { id: "esperienza", label: "Esperienza" },
    { id: "progetti", label: "Progetti" },
];

export default function Nav() {
    const [active, setActive] = useState(items[0].id);

    useEffect(() => {
        // Una sezione è attiva quando attraversa la fascia al 30-40% dell'altezza dello schermo
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        for (const { id } of items) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="hidden lg:block" aria-label="Sezioni della pagina">
            <ul className="mt-16 w-max">
                {items.map(({ id, label }) => {
                    const isActive = active === id;
                    return (
                        <li key={id}>
                            <a href={`#${id}`} aria-current={isActive ? "location" : undefined} className="group flex items-center py-3">
                                <span
                                    className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                                        isActive
                                            ? "w-16 bg-primary"
                                            : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground"
                                    }`}
                                />
                                <span
                                    className={`text-xs font-bold uppercase tracking-widest ${
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground"
                                    }`}
                                >
                                    {label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
