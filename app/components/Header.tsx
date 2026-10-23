import Link from "next/link";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Header(){


    return(
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    <Link href="/">Alessandro Cofussi<span className="text-primary">.</span></Link>
                </h1>

                <p className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">Full-stack developer</p>

                <p className="mt-4 max-w-xs leading-normal text-muted-foreground">Costruisco applicazioni web veloci, accessibili e curate nei dettagli</p>

                <Nav/>
            </div>

            <Socials/>
        </header>
    )
}
