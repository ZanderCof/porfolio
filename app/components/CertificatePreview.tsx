"use client";

import { useState, type PointerEvent, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";

type CertificatePreviewProps = {
    src: string;
    alt: string;
    children: ReactNode;
};

// Il certificato è un A4 orizzontale
const WIDTH = 1400;
const HEIGHT = 990;

export default function CertificatePreview({ src, alt, children }: CertificatePreviewProps) {
    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    // L'anteprima al passaggio del mouse ha senso solo con un puntatore reale:
    // su touch il tap apre direttamente la modale
    const onPointerEnter = (e: PointerEvent) => {
        if (e.pointerType === "mouse") setHovered(true);
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <span className="relative inline-block">
                <Dialog.Trigger asChild>
                    <button
                        type="button"
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={() => setHovered(false)}
                        onClick={() => setHovered(false)}
                        className="cursor-zoom-in font-medium text-foreground underline decoration-primary/40 decoration-dotted underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:text-primary"
                    >
                        {children}
                    </button>
                </Dialog.Trigger>

                <AnimatePresence>
                    {hovered && (
                        <motion.span
                            aria-hidden
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 block w-80 -translate-x-1/2 origin-bottom overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
                        >
                            <Image src={src} alt="" width={WIDTH} height={HEIGHT} sizes="320px" className="block h-auto w-full" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>

            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild forceMount aria-describedby={undefined}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.94, y: 12 }}
                                transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
                                className="fixed inset-0 z-50 m-auto flex h-fit w-[calc(100%-2rem)] max-w-3xl flex-col gap-3 outline-none"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <Dialog.Title className="text-sm font-medium text-foreground">{alt}</Dialog.Title>
                                    <Dialog.Close
                                        aria-label="Chiudi"
                                        className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                                    >
                                        <X className="size-5" />
                                    </Dialog.Close>
                                </div>
                                <div className="overflow-hidden rounded-xl border border-border shadow-2xl">
                                    <Image src={src} alt={alt} width={WIDTH} height={HEIGHT} sizes="(max-width: 800px) 100vw, 768px" className="block h-auto w-full" />
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
