import React from "react";
import { View, Text } from "react-native";

export default function ScannerScreen() {
  return (
    <View className="flex-1 bg-[#111] px-5 pt-4">
      <Text className="text-[20px] font-extrabold text-white">Scanner 📷</Text>
      <Text className="text-mint mt-2 font-semibold">Camera + OCR comes in Phase 5.</Text>
    </View>
  );
}