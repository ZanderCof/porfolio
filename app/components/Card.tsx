import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
    aside: ReactNode;
    title: string;
    href?: string;
    description?: string;
    tags?: string[];
};

export default function Card({ aside, title, href, description, tags = [] }: CardProps) {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/4 lg:group-hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)] lg:group-hover:drop-shadow-lg" />

            <div className="z-10 mt-1 mb-2 sm:col-span-2">{aside}</div>

            <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-foreground">
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group/link inline-flex items-baseline text-base leading-tight font-medium text-foreground hover:text-primary focus-visible:text-primary"
                        >
                            {/* Rende cliccabile l'intera card */}
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                                {title}
                                <ArrowUpRight
                                    aria-hidden
                                    className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                                />
                            </span>
                        </a>
                    ) : (
                        <span className="text-base leading-tight">{title}</span>
                    )}
                </h3>

                {description && <p className="mt-2 text-sm leading-normal text-muted-foreground">{description}</p>}

                {tags.length > 0 && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Tecnologie usate">
                        {tags.map((tag) => (
                            <li key={tag} className="mt-2 mr-1.5">
                                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs leading-5 font-medium text-primary">{tag}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
