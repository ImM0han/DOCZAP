import React from "react";
import { Pressable, Text, View } from "react-native";
import type { DocItem } from "../../types/document.types";
import { typeEmoji, typeTileBg, typeTileText } from "../../utils/colorHelpers";
import { formatBytes, formatDate } from "../../utils/fileHelpers";

export default function ListItem({
  doc,
  onPress,
}: {
  doc: DocItem;
  onPress?: () => void;
}) {
  const bg = typeTileBg(doc.fileType);
  const fg = typeTileText(doc.fileType);

  return (
    <Pressable
      onPress={onPress}
      className="bg-card border border-border rounded-md px-4 py-3"
      style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.98 : 1 }] })}
    >
      <View className="flex-row items-center">
        <View
          className="w-11 h-11 rounded-[12px] items-center justify-center mr-3"
          style={{ backgroundColor: bg }}
        >
          <Text style={{ color: fg }} className="text-[20px]">
            {typeEmoji(doc.fileType)}
          </Text>
        </View>

        <View className="flex-1">
          <Text className="text-text font-extrabold text-[13px]" numberOfLines={1}>
            {doc.filename}
          </Text>
          <Text className="text-muted font-semibold text-[10px] mt-1">
            {doc.fileType.toUpperCase()} · {formatBytes(doc.sizeBytes)} · {formatDate(doc.uploadedAt)}
          </Text>
        </View>

        <Text className="text-muted text-[18px] ml-2">›</Text>
      </View>
    </Pressable>
  );
}