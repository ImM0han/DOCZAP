import React from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { DocItem } from "../../types/document.types";
import { typeEmoji, typeGradients } from "../../utils/colorHelpers";
import FileTypeBadge from "../Common/FileTypeBadge";
import { formatBytes, formatDate } from "../../utils/fileHelpers";

export default function DocCard({
  doc,
  onPress,
}: {
  doc: DocItem;
  onPress?: () => void;
}) {
  const gradients = typeGradients(doc.fileType);

  return (
    <Pressable
      onPress={onPress}
      className="w-[130px]"
      style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.96 : 1 }] })}
    >
      <View className="rounded-[18px] overflow-hidden bg-card border border-border">
        <LinearGradient colors={gradients} className="h-[100px] p-3 justify-between">
          <View className="flex-row justify-end">
            <FileTypeBadge type={doc.fileType} />
          </View>

          <View className="flex-1 items-center justify-center">
            <Text className="text-[28px]">{typeEmoji(doc.fileType)}</Text>
          </View>
        </LinearGradient>

        <View className="p-3">
          <Text className="text-text font-extrabold text-[12px]" numberOfLines={1}>
            {doc.filename}
          </Text>
          <Text className="text-muted font-semibold text-[10px] mt-1">
            {formatBytes(doc.sizeBytes)} · {formatDate(doc.uploadedAt)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}