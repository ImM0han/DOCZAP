import React from "react";
import { View, Text } from "react-native";

export default function PageCard({ pageNumber }: { pageNumber: number }) {
  return (
    <View
      className="bg-white rounded-[12px] overflow-hidden"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.14,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
        elevation: 6,
      }}
    >
      {/* Fake PDF content */}
      <View className="p-4">
        <View className="h-8 rounded-lg bg-violet/20 mb-4 justify-center px-3">
          <Text className="text-violet font-black">Section {pageNumber} — Heading</Text>
        </View>

        <View className="h-28 rounded-xl bg-sky/15 mb-4 items-center justify-center">
          <Text className="text-[26px]">📈</Text>
          <Text className="text-muted font-extrabold text-[10px] mt-1">IMAGE / CHART</Text>
        </View>

        <View className="gap-2 mb-4">
          <View className="h-3 rounded-full bg-border" />
          <View className="h-3 rounded-full bg-border w-[92%]" />
          <View className="h-3 rounded-full bg-border w-[88%]" />
          <View className="h-3 rounded-full bg-border w-[80%]" />
        </View>

        <View className="flex-row gap-2 mb-2">
          <View className="h-3 rounded-full flex-1" style={{ backgroundColor: "rgba(255,217,61,0.45)" }} />
          <View className="h-3 rounded-full flex-1" style={{ backgroundColor: "rgba(253,121,168,0.35)" }} />
        </View>

        <View className="gap-2">
          <View className="h-3 rounded-full bg-border w-[86%]" />
          <View className="h-3 rounded-full bg-border w-[75%]" />
        </View>
      </View>
    </View>
  );
}