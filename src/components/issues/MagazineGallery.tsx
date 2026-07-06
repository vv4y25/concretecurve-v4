"use client";

import { useState } from "react";
import Image from "next/image";
import type { MagazinePage } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { ModalViewer } from "@/components/issues/ModalViewer";

type MagazineGalleryProps = {
  pages: MagazinePage[];
};

export function MagazineGallery({ pages }: MagazineGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-surface py-16 md:py-24" aria-labelledby="gallery-heading">
      <Container>
        <h2
          id="gallery-heading"
          className="mb-10 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
        >
          Magazine Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {pages.map((page, index) => (
            <button
              key={page.slug}
              type="button"
              className="group relative aspect-[3/4] overflow-hidden border border-border bg-background text-left transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open page ${page.number}${page.title ? `: ${page.title}` : ""}`}
            >
              <Image
                src={page.thumbnail}
                alt={page.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                <p className="text-xs font-medium text-white">
                  Page {String(page.number).padStart(2, "0")}
                </p>
                {page.title && (
                  <p className="truncate text-xs text-white/80">{page.title}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <ModalViewer
          pages={pages}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
