import React from "react";
import { View, ScrollView } from "react-native";
import PageCard from "./PageCard";

export default function PDFCanvas({
  pageCount = 5,
  activePageIndex = 0,
  onVisiblePageChange,
}: {
  pageCount?: number;
  activePageIndex?: number;
  onVisiblePageChange?: (index: number) => void;
}) {
  // For now: mock pages. In Phase 3.5 we’ll swap to real PDF rendering.
  const pages = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <View className="flex-1 bg-[#E8E4DC]">
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          // super simple “page detection” estimate
          const y = e.nativeEvent.contentOffset.y;
          const approxIndex = Math.max(0, Math.min(pageCount - 1, Math.round(y / 560)));
          onVisiblePageChange?.(approxIndex);
        }}
        scrollEventThrottle={120}
      >
        <View className="gap-5">
          {pages.map((i) => {
            const dim = i === activePageIndex ? 1 : 0.55;
            return (
              <View key={i} style={{ opacity: dim }}>
                <PageCard pageNumber={i + 1} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}