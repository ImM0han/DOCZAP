import React from "react";
import { View, Platform } from "react-native";
import StatusBar from "./StatusBar";
import BottomNav from "./BottomNav";

type Props = {
  children: React.ReactNode;
};

export default function PhoneShell({ children }: Props) {
  // Web: render iPhone-like frame
  if (Platform.OS === "web") {
    return (
      <View className="flex-1 bg-bg items-center justify-center p-6">
        <View className="w-[375px] h-[812px] rounded-[32px] bg-bg overflow-hidden border border-border shadow-lg">
          <StatusBar />
          <View className="flex-1">{children}</View>
          <BottomNav />
        </View>
      </View>
    );
  }

  // Native: full screen, safe-ish spacing; (we’ll polish safe areas in Phase 2)
  return (
    <View className="flex-1 bg-bg">
      <StatusBar />
      <View className="flex-1">{children}</View>
      <BottomNav />
    </View>
  );
}