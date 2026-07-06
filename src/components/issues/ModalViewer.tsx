"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { MagazinePage } from "@/lib/types";
import { cn } from "@/lib/utils";

type ModalViewerProps = {
  pages: MagazinePage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ModalViewer({ pages, currentIndex, onClose, onNavigate }: ModalViewerProps) {
  const [zoomed, setZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const page = pages[currentIndex];

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < pages.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, onNavigate, pages.length]);

  useEffect(() => {
    setZoomed(false);
  }, [currentIndex]);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  if (!page) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Page ${page.number} viewer`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mb-4 flex items-center justify-between text-white">
          <p className="text-sm">
            Page {String(page.number).padStart(2, "0")}
            {page.title && <span className="text-white/70"> — {page.title}</span>}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? "Zoom Out" : "Zoom In"}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="rounded-sm p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close viewer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "relative mx-auto aspect-[3/4] w-full overflow-auto bg-background",
            zoomed ? "max-h-[85vh] cursor-zoom-out" : "max-h-[75vh] cursor-zoom-in",
          )}
          onClick={() => setZoomed((z) => !z)}
        >
          <Image
            src={page.full}
            alt={page.alt}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className={cn(
              "object-contain transition-transform duration-300",
              zoomed && "scale-150",
            )}
            priority
          />
        </div>

        {page.title && (
          <p className="mt-4 text-center text-sm text-white/80">{page.title}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="rounded-sm px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous page"
          >
            &larr; Previous
          </button>
          <span className="text-sm text-white/60">
            {currentIndex + 1} / {pages.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === pages.length - 1}
            className="rounded-sm px-4 py-2 text-sm text-white transition-colors hover:bg-white/10 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next page"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
