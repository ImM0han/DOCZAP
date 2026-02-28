import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  icon: string;
  onPress?: () => void;
  variant?: "light" | "dark";
};

export default function IconButton({
  icon,
  onPress,
  variant = "light",
}: Props) {
  const isDark = variant === "dark";

  return (
    <Pressable
      onPress={onPress}
      className={`w-9 h-9 rounded-lg items-center justify-center ${
        isDark
          ? "bg-[#1a1a1a] border border-white/15"
          : "bg-white border border-border"
      }`}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.96 : 1 }],
      })}
    >
      <Text className={`${isDark ? "text-white" : "text-text"} text-[16px]`}>
        {icon}
      </Text>
    </Pressable>
  );
}