import Card from "./Card";
import Section from "./Section";

const experiences = [
    {
        period: "Ago 2023 — Oggi",
        title: "Operatore Mainframe · Esselunga, Pioltello (MI)",
        description:
            "Gestisco l'elaborazione dei dati che garantisce la corretta comunicazione tra negozi e magazzini. Monitoro le elaborazioni batch notturne, individuando e risolvendo tempestivamente eventuali anomalie per assicurare la continuità operativa.",
        tags: ["JCL", "Mainframe", "Pacchetto Office"],
    },
];

export default function Experience() {
    return (
        <Section id="esperienza" title="Esperienza">
            <ol className="group/list">
                {experiences.map(({ period, ...card }) => (
                    <li key={card.title} className="mb-12">
                        <Card
                            {...card}
                            aside={
                                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{period}</p>
                            }
                        />
                    </li>
                ))}
            </ol>
        </Section>
    );
}
