import { useMemo } from "react";
import { useDocumentStore } from "../store/documentStore";

export function useDocument() {
  const docs = useDocumentStore((s) => s.docs);
  const selectedDocId = useDocumentStore((s) => s.selectedDocId);

  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return docs.find((d) => d.id === selectedDocId) ?? null;
  }, [docs, selectedDocId]);

  return { selectedDoc };
}