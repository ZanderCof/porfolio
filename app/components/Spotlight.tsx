"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Aggiorna le variabili CSS direttamente, senza re-render a ogni movimento
        const onMove = (e: PointerEvent) => {
            ref.current?.style.setProperty("--x", `${e.clientX}px`);
            ref.current?.style.setProperty("--y", `${e.clientY}px`);
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
            style={{
                background:
                    "radial-gradient(600px at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--primary) 12%, transparent), transparent 80%)",
            }}
        />
    );
}
