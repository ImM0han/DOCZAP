import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { DocItem } from "../../types/document.types";
import DocCard from "./DocCard";

export default function RecentCarousel({
  docs,
  onOpenDoc,
}: {
  docs: DocItem[];
  onOpenDoc: (id: string) => void;
}) {
  if (!docs.length) return null;

  return (
    <View className="mt-5">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-text font-black text-[14px]">Recent Files</Text>
        <Text className="text-muted font-bold text-[11px]">See all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-3 pr-4">
          {docs.map((doc) => (
            <DocCard key={doc.id} doc={doc} onPress={() => onOpenDoc(doc.id)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}