import Card from "./Card";
import Section from "./Section";

const projects = [
    {
        title: "Piattaforma D&D",
        href: "https://compendio-psi.vercel.app/",
        // Il video è già montato avanti + indietro, così il loop non ha stacchi
        video: { src: "/progetti/dnd.mp4", poster: "/progetti/dnd-poster.jpg" },
        description:
            "Ho creato questo sito per permettere a me e ai miei amici di giocare a D&D comodamente con strumenti utili.",
        tags: ["Next.js", "Tailwind CSS", "Python", "ReactBits", "Prisma", "Neon", "BetterAuth", ],
    },
];

export default function Projects() {
    return (
        <Section id="progetti" title="Progetti">
            <ul className="group/list">
                {projects.map(({ video, ...project }) => (
                    <li key={project.title} className="mb-12">
                        <Card
                            {...project}
                            aside={
                                video ? (
                                    <video
                                        src={video.src}
                                        poster={video.poster}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        aria-hidden
                                        className="aspect-video w-full rounded border-2 border-border object-cover object-top transition-colors group-hover:border-primary/40 sm:translate-y-1"
                                    />
                                ) : (
                                    // Al posto di questo riquadro puoi mettere uno screenshot con next/image
                                    <div className="aspect-video rounded border-2 border-border bg-linear-to-br from-primary/40 via-primary/10 to-transparent transition-colors group-hover:border-primary/40 sm:translate-y-1" />
                                )
                            }
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
