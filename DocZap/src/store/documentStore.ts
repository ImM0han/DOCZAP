import { create } from "zustand";
import type { DocItem } from "../types/document.types";

type DocState = {
  userName: string;
  docs: DocItem[];
  recentIds: string[];
  selectedDocId: string | null;

  selectDoc: (id: string) => void;
  addMockDoc: () => void;
};

const nowISO = () => new Date().toISOString();

const MOCK: DocItem[] = [
  { id: "1", filename: "Invoice_Feb.pdf", fileType: "pdf",  sizeBytes: 582_211, uploadedAt: nowISO() },
  { id: "2", filename: "Project_Notes.docx", fileType: "docx", sizeBytes: 1_482_911, uploadedAt: nowISO() },
  { id: "3", filename: "Pitch_Deck.pptx", fileType: "pptx", sizeBytes: 3_902_003, uploadedAt: nowISO() },
  { id: "4", filename: "College_Form.pdf", fileType: "pdf",  sizeBytes: 402_111, uploadedAt: nowISO() },
];

export const useDocumentStore = create<DocState>((set, get) => ({
  userName: "Mohan",
  docs: MOCK,
  recentIds: ["1", "2", "3"],
  selectedDocId: null,

  selectDoc: (id) => set({ selectedDocId: id }),

  addMockDoc: () => {
    const id = `${Date.now()}`;
    const types = ["pdf", "docx", "pptx"] as const;
    const t = types[Math.floor(Math.random() * types.length)];
    const newDoc: DocItem = {
      id,
      filename: `New_File_${id.slice(-4)}.${t}`,
      fileType: t,
      sizeBytes: 250_000 + Math.floor(Math.random() * 4_000_000),
      uploadedAt: nowISO(),
    };

    const { docs, recentIds } = get();
    set({
      docs: [newDoc, ...docs],
      recentIds: [id, ...recentIds].slice(0, 10),
    });
  },
}));