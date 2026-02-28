export type FileType = "pdf" | "docx" | "pptx";

export type DocItem = {
  id: string;
  filename: string;
  fileType: FileType;
  sizeBytes: number;
  uploadedAt: string; // ISO
};