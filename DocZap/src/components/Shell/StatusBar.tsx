import React from "react";
import { View, Text, Platform } from "react-native";

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function StatusBar() {
  const now = new Date();
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  // Keep it simple: a fake iPhone-style status bar for web preview, and a subtle spacer on native
  if (Platform.OS !== "web") {
    return <View className="h-2" />;
  }

  return (
    <View className="h-11 px-4 flex-row items-center justify-between">
      <Text className="text-text font-semibold">{time}</Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-text">📶</Text>
        <Text className="text-text">📡</Text>
        <Text className="text-text">🔋</Text>
      </View>
    </View>
  );
}