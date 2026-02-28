import React from "react";
import { View, Text } from "react-native";
import type { DocItem } from "../../types/document.types";
import ListItem from "./ListItem";

export default function FileList({
  docs,
  onOpenDoc,
}: {
  docs: DocItem[];
  onOpenDoc: (id: string) => void;
}) {
  return (
    <View className="mt-5 pb-24">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-text font-black text-[14px]">All Files</Text>
        <Text className="text-muted font-bold text-[11px]">
          {docs.length} items
        </Text>
      </View>

      <View className="gap-3">
        {docs.map((doc) => (
          <ListItem key={doc.id} doc={doc} onPress={() => onOpenDoc(doc.id)} />
        ))}
      </View>
    </View>
  );
}