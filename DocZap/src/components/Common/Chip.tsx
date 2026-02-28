import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  icon: string;
  label: string;
  bgClass: string;
  textClass: string;
  onPress?: () => void;
};

export default function Chip({ icon, label, bgClass, textClass, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center px-4 py-2 rounded-pill ${bgClass}`}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }]}
    >
      <View className="mr-2">
        <Text className={`${textClass} text-[16px]`}>{icon}</Text>
      </View>
      <Text className={`${textClass} font-extrabold text-[12px]`}>{label}</Text>
    </Pressable>
  );
}