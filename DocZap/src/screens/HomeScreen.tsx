import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import QuickChips from "../components/Home/QuickChips";
import RecentCarousel from "../components/Home/RecentCarousel";
import FileList from "../components/Home/FileList";
import FAB from "../components/Home/FAB";

import { useAppStore } from "../store/appStore";
import { useDocumentStore } from "../store/documentStore";
import { ROUTES } from "../utils/constants";
import { getInitials } from "../utils/fileHelpers";

export default function HomeScreen() {
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const setHomeHasNewFiles = useAppStore((s) => s.setHomeHasNewFiles);

  const userName = useDocumentStore((s) => s.userName);
  const docs = useDocumentStore((s) => s.docs);
  const recentIds = useDocumentStore((s) => s.recentIds);
  const selectDoc = useDocumentStore((s) => s.selectDoc);
  const addMockDoc = useDocumentStore((s) => s.addMockDoc);

  const recentDocs = recentIds
    .map((id) => docs.find((d) => d.id === id))
    .filter(Boolean) as typeof docs;

  const openDoc = (id: string) => {
    selectDoc(id);
    setHomeHasNewFiles(false);
    setActiveTab(ROUTES.VIEW);
  };

  return (
    <View className="flex-1">
      {/* Scrollable content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 140, // space for BottomNav + FAB
        }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <Text className="text-[26px] font-black">
            <Text className="text-coral">D</Text>
            <Text className="text-sky">o</Text>
            <Text className="text-yellow">c</Text>
            <Text className="text-mint">Z</Text>
            <Text className="text-coral">a</Text>
            <Text className="text-mint">p</Text>
          </Text>

          <LinearGradient
            colors={["#A29BFE", "#FD79A8"]}
            className="w-[38px] h-[38px] rounded-full items-center justify-center"
          >
            <Text className="text-white font-black">{getInitials(userName)}</Text>
          </LinearGradient>
        </View>

        {/* Quick action chips */}
        <View className="mt-4">
          <QuickChips
            onScan={() => setActiveTab(ROUTES.SCAN)}
            onView={() => setActiveTab(ROUTES.VIEW)}
            onMerge={() => setActiveTab(ROUTES.MERGE)}
            onExport={() => {}}
          />
        </View>

        {/* Recent carousel */}
        <RecentCarousel docs={recentDocs} onOpenDoc={openDoc} />

        {/* All files */}
        <FileList docs={docs} onOpenDoc={openDoc} />
      </ScrollView>

      {/* FAB floats above content */}
      <FAB onAdd={addMockDoc} />
    </View>
  );
}