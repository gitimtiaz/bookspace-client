"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES } from "@/components/home/slides";
import {
  BooksIllustration,
  QuillIllustration,
  OpenBookIllustration,
} from "@/components/home/SlideIllustrations";

const ILLUSTRATIONS = {
  books: BooksIllustration,
  quill: QuillIllustration,
  openbook: OpenBookIllustration,
};

const INTERVAL_MS = 6000;

const contentVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  }),
};

const illustrationVariants = {
  enter: { opacity: 0, scale: 0.92 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((next) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const goNext = useCallback(() => {
    goTo((index + 1) % SLIDES.length);
  }, [index, goTo]);

  const goPrev = useCallback(() => {
    goTo((index - 1 + SLIDES.length) % SLIDES.length);
  }, [index, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [index, isPaused, goNext]);

  const slide = SLIDES[index];
  const Illustration = ILLUSTRATIONS[slide.illustration];

  return (
    <section
      className="relative overflow-hidden bg-parchment dark:bg-ink"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-forest/10 blur-3xl dark:bg-forest/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-moss/5 blur-3xl dark:bg-moss/10"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28 lg:gap-16">

        {/* Left — animated copy */}
        <div className="flex-1 overflow-hidden text-center md:text-left">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Tag */}
              <span className="inline-block rounded-full border border-forest/40 bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest dark:border-moss/40 dark:bg-moss/10 dark:text-moss">
                {slide.tag}
              </span>

              {/* Headline */}
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink dark:text-parchment sm:text-5xl lg:text-6xl">
                {slide.headline.map((line, i) => (
                  <span
                    key={i}
                    className={
                      i === slide.accentLine
                        ? "block text-forest dark:text-moss"
                        : "block"
                    }
                  >
                    {line}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 dark:text-parchment/70 md:mx-0">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href={slide.cta.href}
                  className="rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-moss"
                >
                  {slide.cta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="rounded-lg border border-ink/20 px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/50 hover:text-ink dark:border-parchment/20 dark:text-parchment/80 dark:hover:border-parchment/50 dark:hover:text-parchment"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex justify-center gap-8 md:justify-start">
                {slide.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold text-ink dark:text-parchment">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-ink/50 dark:text-parchment/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — animated illustration */}
        <div className="flex w-full max-w-xs shrink-0 items-center justify-center md:max-w-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.illustration}
              variants={illustrationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Illustration className="w-full drop-shadow-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="relative flex items-center justify-center gap-4 pb-8">
        {/* Prev */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-ink/50 transition-colors hover:border-ink/50 hover:text-ink dark:border-parchment/20 dark:text-parchment/50 dark:hover:border-parchment/50 dark:hover:text-parchment"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-forest dark:bg-moss"
                  : "w-2 bg-ink/20 hover:bg-ink/40 dark:bg-parchment/30 dark:hover:bg-parchment/50"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-ink/50 transition-colors hover:border-ink/50 hover:text-ink dark:border-parchment/20 dark:text-parchment/50 dark:hover:border-parchment/50 dark:hover:text-parchment"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
