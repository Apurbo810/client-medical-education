"use client";

import {
  ArrowLeft,
  Download,
  FileText,
  Maximize2,
  Minimize2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useReveal } from "@/hooks/gsap";

interface PdfViewerProps {
  courseId: string;
  title: string;
  file: string;
}

export function PdfViewer({
  courseId,
  title,
  file,
}: PdfViewerProps) {
  const viewerRef = useReveal({
    y: 20,
    duration: 0.6,
    start: "top 95%",
    once: true,
  });

  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const [isFullscreen, setIsFullscreen] =
    useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(
        document.fullscreenElement ===
          containerRef.current,
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

  async function toggleFullscreen() {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    if (!document.fullscreenElement) {
      try {
        await container.requestFullscreen();
      } catch (error) {
        console.error(
          "Failed to enter fullscreen:",
          error,
        );
      }

      return;
    }

    try {
      await document.exitFullscreen();
    } catch (error) {
      console.error(
        "Failed to exit fullscreen:",
        error,
      );
    }
  }

  return (
    <main
      ref={viewerRef}
      className="min-h-[calc(100vh-4rem)] bg-background"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Header */}
        <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={`/student/learning/${courseId}`}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Back to course"
            >
              <ArrowLeft className="size-4" />
            </Link>

            <div className="flex min-w-0 items-center gap-3">
              <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                <FileText className="size-5" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  Course PDF
                </p>

                <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
                  {title}
                </h1>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Download */}
            <a
              href={file}
              download
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Download className="size-4" />

              <span>Download</span>
            </a>

            {/* Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
        </header>

        {/* PDF Viewer */}
        <section
          ref={containerRef}
          className={[
            "flex overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
            isFullscreen
              ? "h-screen w-screen rounded-none border-0"
              : "min-h-[70vh]",
          ].join(" ")}
          aria-label={`PDF viewer for ${title}`}
        >
          <iframe
            src={file}
            title={title}
            className={[
              "w-full border-0",
              isFullscreen
                ? "h-full min-h-0"
                : "h-[75vh] min-h-[600px]",
            ].join(" ")}
          />
        </section>
      </div>
    </main>
  );
}