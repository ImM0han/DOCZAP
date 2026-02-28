import type { FileType } from "../types/document.types";

export function typeEmoji(t: FileType) {
  if (t === "pdf") return "📕";
  if (t === "docx") return "📝";
  return "📊";
}

export function typeLabel(t: FileType) {
  return t.toUpperCase();
}



export function typeGradients(t: FileType): readonly string[] {
  if (t === "pdf") return ["#FFE8E8", "#FFCECE"] as const;
  if (t === "docx") return ["#E0F7F6", "#B2EBE8"] as const;
  return ["#FFF8D6", "#FFE97A"] as const;
}

export function typeTileBg(t: FileType) {
  if (t === "pdf") return "#FFE8E8";
  if (t === "docx") return "#E0F7F6";
  return "#FFF8D6";
}

export function typeTileText(t: FileType) {
  if (t === "pdf") return "#FF6B6B";
  if (t === "docx") return "#4ECDC4";
  return "#C9A600";
}