import React from "react";
import { View, Text } from "react-native";
import type { FileType } from "../../types/document.types";
import { typeLabel, typeTileText } from "../../utils/colorHelpers";

export default function FileTypeBadge({ type }: { type: FileType }) {
  const color = typeTileText(type);
  return (
    <View className="px-2 py-1 rounded-sm bg-white/70 border border-border">
      <Text style={{ color }} className="text-[10px] font-black">
        {typeLabel(type)}
      </Text>
    </View>
  );
}