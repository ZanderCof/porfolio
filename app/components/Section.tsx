import type { ReactNode } from "react";

type SectionProps = {
    id: string;
    title: string;
    children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} aria-label={title} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            {/* Su mobile il titolo resta attaccato in alto; su desktop lo sostituisce l'indice a sinistra */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">{title}</h2>
            </div>
            {children}
        </section>
    );
}
