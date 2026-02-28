import { create } from "zustand";

export type ToolType = "highlight" | "comment" | "underline" | "draw" | "text";

type EditorState = {
  tool: ToolType;
  setTool: (t: ToolType) => void;

  pageIndex: number; // 0-based
  setPageIndex: (i: number) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  tool: "highlight",
  setTool: (t) => set({ tool: t }),

  pageIndex: 0,
  setPageIndex: (i) => set({ pageIndex: i }),
}));