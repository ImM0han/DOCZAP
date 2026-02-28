import React from "react";
import { View, Text } from "react-native";
import IconButton from "../Common/IconButton";

export default function PageNavBar({
  pageIndex,
  pageCount,
  onPrev,
  onNext,
}: {
  pageIndex: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <View className="bg-card border-t border-border px-4 py-3 flex-row items-center justify-between">
      <IconButton icon="‹" onPress={onPrev} />
      <Text className="text-muted font-extrabold">
        Page {pageIndex + 1} of {pageCount}
      </Text>
      <IconButton icon="›" onPress={onNext} />
    </View>
  );
}