import React from "react";
import { View, Pressable, Text } from "react-native";
import type { ToolType } from "../../store/editorStore";

const tools: { key: ToolType; icon: string; label: string }[] = [
  { key: "highlight", icon: "🖊️", label: "Highlight" },
  { key: "comment", icon: "💬", label: "Comment" },
  { key: "underline", icon: "〰️", label: "Underline" },
  { key: "draw", icon: "✏️", label: "Draw" },
  { key: "text", icon: "T", label: "Text" },
];

export default function AnnotationToolbar({
  tool,
  setTool,
}: {
  tool: ToolType;
  setTool: (t: ToolType) => void;
}) {
  return (
    <View className="bg-card border-t border-border px-3 py-2">
      <View className="flex-row justify-between">
        {tools.map((t) => {
          const active = t.key === tool;
          return (
            <Pressable
              key={t.key}
              onPress={() => setTool(t.key)}
              className={`items-center justify-center px-2 py-2 rounded-pill ${active ? "bg-border" : "bg-transparent"}`}
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.96 : 1 }] }]}
            >
              <Text className="text-[16px]">{t.icon}</Text>
              <Text className="text-[9px] font-extrabold text-muted mt-1">{t.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}