"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/hero/campus3.jpg",
    title: "Student Community",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing. ",
  },
  {
    image: "/images/hero/campus2.jpg",
    title: "Open Source Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    image: "/images/hero/campus1.jpg",
    title: "Networking",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing. ",
  },
];

export function HeroCarousel() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              {/* Overlays for readability */}
              <div className="absolute inset-0 hero-overlay opacity-60" />
              <div className="absolute inset-0 hero-vignette" />
              <div className="absolute inset-0 hero-fade" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                  {slide.title}
                </h2>
                <p className="mt-5 max-w-lg text-lg text-white/85 sm:text-xl leading-relaxed drop-shadow-[0_2px_10px_rgb(0,0,0,0.5)]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel arrow controls */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm border border-white/10 transition-all duration-200 hover:bg-white/20 hover:text-white cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm border border-white/10 transition-all duration-200 hover:bg-white/20 hover:text-white cursor-pointer"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {/* Carousel katw endeixeis */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              selectedIndex === index ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </section>
  );
}
