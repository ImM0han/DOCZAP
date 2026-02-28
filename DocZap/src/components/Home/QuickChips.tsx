import React from "react";
import { ScrollView, View } from "react-native";
import Chip from "../Common/Chip";

type Props = {
  onScan?: () => void;
  onView?: () => void;
  onMerge?: () => void;
  onExport?: () => void;
};

export default function QuickChips({
  onScan,
  onView,
  onMerge,
  onExport,
}: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row gap-2 pr-4">
        <Chip icon="📷" label="Scan" bgClass="bg-[#E3F8E6]" textClass="text-mint" onPress={onScan} />
        <Chip icon="👁️" label="View" bgClass="bg-[#E0F7F6]" textClass="text-sky" onPress={onView} />
        <Chip icon="🔗" label="Merge" bgClass="bg-[#EDEAFF]" textClass="text-violet" onPress={onMerge} />
        <Chip icon="📤" label="Export" bgClass="bg-[#FFF8D6]" textClass="text-yellow" onPress={onExport} />
      </View>
    </ScrollView>
  );
}