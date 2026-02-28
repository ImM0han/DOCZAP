import React, { useState } from "react";
import { View, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function FAB({ onAdd }: { onAdd: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View className="absolute right-5 bottom-24">
        <Pressable
          onPress={() => setOpen(true)}
          style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.93 : 1 }] })}
        >
          <LinearGradient
            colors={["#FF6B6B", "#FF8E8E"]}
            className="w-[50px] h-[50px] rounded-[18px] items-center justify-center"
          >
            <Text className="text-white text-[26px] font-black">+</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <Modal transparent visible={open} animationType="slide">
        <Pressable className="flex-1 bg-black/30" onPress={() => setOpen(false)} />
        <View className="bg-card rounded-t-xl px-5 pt-5 pb-8 border border-border">
          <Text className="text-text font-black text-[16px]">Add a file</Text>
          <Text className="text-muted text-[12px] mt-1">
            Mock action (real picker later)
          </Text>

          <Pressable
            onPress={() => {
              onAdd();
              setOpen(false);
            }}
            className="mt-5 bg-[#FFE8E8] rounded-lg px-4 py-4"
          >
            <Text className="text-coral font-black text-[14px]">
              ＋ Create Mock File
            </Text>
          </Pressable>

          <Pressable onPress={() => setOpen(false)} className="mt-3 py-3">
            <Text className="text-muted font-bold text-center">Cancel</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}