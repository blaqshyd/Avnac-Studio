/**
 * image-rembg-overlay.tsx
 *
 * A translucent overlay rendered on top of a canvas image node while its
 * background is being removed. Shows a horizontal shine sweep animation
 * so the user knows work is in progress.
 *
 * The overlay is positioned in scene-editor-canvas.tsx using the selection
 * bounds scaled to screen pixels; this component only handles the visual.
 */
import type { CSSProperties } from "react";

type ImageRembgOverlayProps = {
  style: CSSProperties;
};

export default function ImageRembgOverlay({ style }: ImageRembgOverlayProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-30 overflow-hidden"
      style={style}
    >
      {/* Frosted base */}
      <div className="absolute inset-0 rounded-[inherit] bg-white/20 backdrop-blur-[1px]" />

      {/* Shine sweep */}
      <div
        className="absolute inset-0 -top-[30%] rotate-12 h-[150%] w-[150%]"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 100%",
          animation: "avnac-rembg-shine 1.6s ease-in-out infinite",
        }}
      />

      {/* Centered label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md">
          Removing background…
        </span>
      </div>
    </div>
  );
}
