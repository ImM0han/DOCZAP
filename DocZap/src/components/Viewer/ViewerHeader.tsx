import React from "react";
import { View, Text } from "react-native";
import IconButton from "../Common/IconButton";

export default function ViewerHeader({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <View className="bg-card border-b border-border px-4 py-3 flex-row items-center">
      <View className="mr-3">
        <IconButton icon="←" onPress={onBack} />
      </View>

      <Text className="flex-1 text-text font-extrabold text-[14px]" numberOfLines={1}>
        {title}
      </Text>

      <View className="flex-row gap-2">
        <IconButton icon="🔍" onPress={() => {}} />
        <IconButton icon="⋯" onPress={() => {}} />
      </View>
    </View>
  );
}