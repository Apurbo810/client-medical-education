"use client";

import {
  ArrowLeft,
  Clock3,
  Maximize2,
  Minimize2,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useReveal } from "@/hooks/gsap";

interface VideoViewerProps {
  courseId: string;
  title: string;
  description?: string;
  youtubeId: string;
  duration?: number;
}

export function VideoViewer({
  courseId,
  title,
  description,
  youtubeId,
  duration,
}: VideoViewerProps) {
  const viewerRef = useReveal({
    y: 20,
    duration: 0.6,
    start: "top 95%",
    once: true,
  });

  const playerRef = useRef<HTMLDivElement | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

  /* =========================================================
     FULLSCREEN STATE
  ========================================================= */

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(
        document.fullscreenElement === playerRef.current,
      );
    }

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange,
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  /* =========================================================
     FULLSCREEN
  ========================================================= */

  async function toggleFullscreen() {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    try {
      if (!document.fullscreenElement) {
        await player.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  }

  /* =========================================================
     DURATION
  ========================================================= */

  const durationLabel =
    typeof duration === "number"
      ? `${Math.floor(duration / 60)} min`
      : null;

  return (
    <main
      ref={viewerRef}
      className="min-h-[calc(100vh-4rem)] bg-background"
    >
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 pt-0 pb-6 sm:px-6 lg:px-8 lg:pt-0 lg:pb-1">
          {/* =====================================================
              VIDEO AREA
          ===================================================== */}

          <div className="mx-auto flex w-full max-w-5xl items-start gap-3 sm:gap-4">
            {/* Back Button */}

            <Link
              href={`/student/learning/${courseId}`}
              className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:bg-muted hover:text-foreground"
              aria-label="Back to course"
            >
              <ArrowLeft className="size-4" />
            </Link>

            {/* =================================================
                VIDEO
            ================================================= */}

            <section
              ref={playerRef}
              className="video-player-container group relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-border bg-black shadow-lg"
              aria-label={`Video player for ${title}`}
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title={title}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Floating fullscreen button */}

              {!isFullscreen && (
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Enter fullscreen"
                  className="absolute bottom-4 right-4 inline-flex size-10 items-center justify-center rounded-lg bg-black/70 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-black/90 group-hover:opacity-100"
                >
                  <Maximize2 className="size-4" />
                </button>
              )}
            </section>
          </div>

          {/* =====================================================
              VIDEO INFORMATION
          ===================================================== */}

          <section className="mx-auto mt-3 w-full max-w-5xl">
            {/* Video Meta Row */}

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {/* Video Icon */}

                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play className="size-5 fill-current" />
                </div>

                {/* Video Type */}

                <span className="inline-flex h-10 items-center text-sm font-medium text-muted-foreground">
                  Video Lecture
                </span>

                {/* Duration */}

                {durationLabel && (
                  <span className="inline-flex h-10 items-center gap-2 rounded-full bg-muted px-3 text-sm text-muted-foreground">
                    <Clock3 className="size-3.5" />
                    {durationLabel}
                  </span>
                )}

                {/* Fullscreen */}

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-muted"
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="size-4" />
                      <span>Exit Fullscreen</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="size-4" />
                      <span>Fullscreen</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Title */}

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h1>

            {/* Description */}

            {description && (
              <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground sm:text-base">
                {description}
              </p>
            )}
          </section>
        </div>
      </div>

      {/* =========================================================
          FULLSCREEN STYLES
      ========================================================= */}

      <style jsx global>{`
        .video-player-container:fullscreen {
          width: 100vw;
          height: 100vh;
          max-width: none;
          max-height: none;
          margin: 0;
          padding: 0;
          border: none;
          border-radius: 0;
          background: #000;
        }

        .video-player-container:fullscreen > div {
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .video-player-container:fullscreen iframe {
          width: 100%;
          height: 100%;
        }

        .video-player-container:-webkit-full-screen {
          width: 100vw;
          height: 100vh;
          max-width: none;
          max-height: none;
          margin: 0;
          padding: 0;
          border: none;
          border-radius: 0;
          background: #000;
        }

        .video-player-container:-webkit-full-screen > div {
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .video-player-container:-webkit-full-screen iframe {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  );
}