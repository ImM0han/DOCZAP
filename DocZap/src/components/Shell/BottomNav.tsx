import React from "react";
import { View, Pressable, Text } from "react-native";
import { useNavigation } from "../../hooks/useNavigation";
import { ROUTES, type RouteKey } from "../../utils/constants";
import { useAppStore } from "../../store/appStore";

type Tab = {
  key: RouteKey;
  label: string;
  icon: string;
  activeColor: "text-violet" | "text-mint";
  chipBg: string;
};

const tabs: Tab[] = [
  { key: ROUTES.HOME,  label: "Home",  icon: "🏠", activeColor: "text-violet", chipBg: "bg-[#F5F3FF]" },
  { key: ROUTES.VIEW,  label: "View",  icon: "📄", activeColor: "text-violet", chipBg: "bg-[#F5F3FF]" },
  { key: ROUTES.MERGE, label: "Merge", icon: "🔗", activeColor: "text-violet", chipBg: "bg-[#F5F3FF]" },
  { key: ROUTES.SCAN,  label: "Scan",  icon: "📷", activeColor: "text-mint",   chipBg: "bg-[#E3F8E6]" },
];

export default function BottomNav() {
  const { activeTab, setActiveTab } = useNavigation();
  const homeHasNewFiles = useAppStore((s) => s.homeHasNewFiles);

  return (
    <View className="bg-card border-t border-border px-4 pt-2 pb-6">
      <View className="flex-row items-end justify-between">
        {tabs.map((t) => {
          const active = t.key === activeTab;

          return (
            <Pressable
              key={t.key}
              onPress={() => setActiveTab(t.key)}
              className="items-center justify-center w-[22%]"
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.96 : 1 }] }]}
            >
              <View className={`px-4 py-2 rounded-pill ${active ? t.chipBg : "bg-transparent"}`}>
                <View className="relative">
                  <Text
                    className={`${active ? t.activeColor : "text-muted"} text-[18px]`}
                    style={{ transform: [{ translateY: active ? -2 : 0 }] }}
                  >
                    {t.icon}
                  </Text>

                  {t.key === ROUTES.HOME && homeHasNewFiles ? (
                    <View className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-coral" />
                  ) : null}
                </View>

                <Text className={`${active ? t.activeColor : "text-muted"} text-[10px] font-extrabold mt-1 text-center`}>
                  {t.label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}