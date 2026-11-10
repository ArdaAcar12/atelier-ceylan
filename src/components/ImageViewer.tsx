"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Minus, RotateCw, Search } from "lucide-react";

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const MAX_SCALE = 3;
const MIN_SCALE = 1;

export default function ImageViewer({
  src,
  alt,
  isOpen,
  onClose,
}: ImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const clampScale = useCallback((v: number) => Math.min(Math.max(v, MIN_SCALE), MAX_SCALE), []);

  const zoomIn = useCallback(() => setScale((s) => clampScale(s + 0.25)), [clampScale]);
  const zoomOut = useCallback(() => setScale((s) => clampScale(s - 0.25)), [clampScale]);
  const reset = useCallback(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY / 200;
      setScale((s) => clampScale(s + delta));
    },
    [clampScale]
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    },
    [pos]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setPos({ x: e.clientX - start.x, y: e.clientY - start.y });
    },
    [isDragging, start]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;

  return (
    <div
      onClick={onClose}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Resim inceleme"
    >
      <div
        className="relative w-[85vw] h-[85vh] max-w-[1200px] max-h-[900px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onWheel={onWheel}
        style={{ touchAction: "none" }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              zoomOut();
            }}
            className="w-9 h-9 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="Küçült"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              reset();
            }}
            className="w-9 h-9 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="Sıfırla"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              zoomIn();
            }}
            className="w-9 h-9 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="Büyüt"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform,
            transformOrigin: "center center",
            transition: isDragging ? "none" : "transform 0.15s ease-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
