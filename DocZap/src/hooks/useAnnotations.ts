import { useEditorStore, type ToolType } from "../store/editorStore";

export function useAnnotations() {
  const tool = useEditorStore((s) => s.tool);
  const setTool = useEditorStore((s) => s.setTool);

  const pageIndex = useEditorStore((s) => s.pageIndex);
  const setPageIndex = useEditorStore((s) => s.setPageIndex);

  return { tool, setTool, pageIndex, setPageIndex };
}