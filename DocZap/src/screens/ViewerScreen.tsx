import React, { useEffect, useMemo } from "react";
import { View, Text } from "react-native";

import ViewerHeader from "../components/Viewer/ViewerHeader";
import PDFCanvas from "../components/Viewer/PDFCanvas";
import AnnotationToolbar from "../components/Viewer/AnnotationToolbar";
import PageNavBar from "../components/Viewer/PageNavBar";

import { useAppStore } from "../store/appStore";
import { ROUTES } from "../utils/constants";
import { useDocument } from "../hooks/useDocument";
import { useAnnotations } from "../hooks/useAnnotations";

export default function ViewerScreen() {
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const { selectedDoc } = useDocument();

  const { tool, setTool, pageIndex, setPageIndex } = useAnnotations();

  // mock pageCount based on type for now
  const pageCount = useMemo(() => {
    if (!selectedDoc) return 5;
    if (selectedDoc.fileType === "pptx") return 7;
    if (selectedDoc.fileType === "docx") return 4;
    return 5;
  }, [selectedDoc]);

  useEffect(() => {
    // reset page when switching docs
    setPageIndex(0);
  }, [selectedDoc?.id]);

  const title = selectedDoc?.filename ?? "No file selected";

  const goBack = () => setActiveTab(ROUTES.HOME);

  const prev = () => setPageIndex(Math.max(0, pageIndex - 1));
  const next = () => setPageIndex(Math.min(pageCount - 1, pageIndex + 1));

  if (!selectedDoc) {
    return (
      <View className="flex-1">
        <ViewerHeader title={title} onBack={goBack} />
        <View className="flex-1 items-center justify-center bg-bg px-6">
          <Text className="text-text font-black text-[16px]">No file opened</Text>
          <Text className="text-muted font-semibold text-[12px] mt-2 text-center">
            Go to Home and tap any file card to open it here.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ViewerHeader title={title} onBack={goBack} />

      <PDFCanvas
        pageCount={pageCount}
        activePageIndex={pageIndex}
        onVisiblePageChange={(i) => setPageIndex(i)}
      />

      <AnnotationToolbar tool={tool} setTool={setTool} />

      <PageNavBar pageIndex={pageIndex} pageCount={pageCount} onPrev={prev} onNext={next} />
    </View>
  );
}