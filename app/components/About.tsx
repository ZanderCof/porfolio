import Section from "./Section";
import CertificatePreview from "./CertificatePreview";

export default function About() {
  return (
    <Section id="chi-sono" title="Chi sono">
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          Sono uno sviluppatore full-stack appassionato di informatica. Mi piace
          mettermi alla prova con piccoli progetti personali per migliorare le
          mie competenze e impararne di nuove.{" "}
          <span className="font-medium text-foreground">Design curato</span> e{" "}
          <span className="font-medium text-foreground">codice solido</span>:
          sono i due principi che guidano ogni progetto.
        </p>
        <p>
          La mia formazione combina lo studio strutturato con la pratica sul
          campo. Ho frequentato corsi di sviluppo software presso{" "}
          <CertificatePreview
            src="/attestati/aulab_attestato.png"
            alt="Attestato Full Stack Web Developer – Aulab Hackademy"
          >
            Aulab
          </CertificatePreview>{" "}
          e un percorso formativo promosso da Reply tramite Kronos, ottenendo
          attestati riconosciuti a livello europeo. Lavoro principalmente con
          Next.js, TypeScript, Prisma e PostgreSQL per il front-end e la
          gestione dei dati, e uso Python per la logica e l&apos;automazione. Mi
          interessa capire come funziona ogni parte di un sistema, dall&apos;interfaccia
          al database, e questo mi aiuta a progettare soluzioni più coerenti e
          facili da mantenere.
        </p>
        <p>
          Non mi fermo mai alla prima versione: rivedo il codice, cerco modi più
          chiari per scriverlo e presto attenzione ai dettagli che fanno la
          differenza per chi usa il prodotto. Sono sempre aperto a nuove sfide e
          a confrontarmi con altri sviluppatori.
        </p>
      </div>
    </Section>
  );
}