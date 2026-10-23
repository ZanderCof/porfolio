import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MicroSlats from "./components/MicroSlats";
import Projects from "./components/Projects";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <div className="relative">
      <div aria-hidden className="fixed inset-0 z-0">
        <MicroSlats
          preset="swell"
          color="#f97316"
          glintColor="#eab308"
          backgroundColor="transparent"
          slatWidth={10}
          slatHeight={25}
          gap={3}
          roundness={0.75}
          interactive
          cursorStrength={1}
          cursorSize={40}
          swirl={0}
          trail={1.4}
          lean={0}
          intro
        />
        {/* Velo scuro per mantenere leggibile il testo sopra lo sfondo */}
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <Spotlight />
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="contenuto" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Costruito con <span className="font-medium text-foreground">Next.js</span> e{" "}
                <span className="font-medium text-foreground">Tailwind CSS</span>, con il font{" "}
                <span className="font-medium text-foreground">Inter</span>. Layout ispirato a{" "}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-foreground hover:text-primary focus-visible:text-primary"
                >
                  Brittany Chiang
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
