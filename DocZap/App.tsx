import "./global.css";
import React from "react";
import { View } from "react-native";
import PhoneShell from "./src/components/Shell/PhoneShell";
import HomeScreen from "./src/screens/HomeScreen";
import ViewerScreen from "./src/screens/ViewerScreen";
import MergeScreen from "./src/screens/MergeScreen";
import ScannerScreen from "./src/screens/ScannerScreen";
import { useAppStore } from "./src/store/appStore";
import { ROUTES } from "./src/utils/constants";

export default function App() {
  const activeTab = useAppStore((s) => s.activeTab);

  return (
    <PhoneShell>
      <View className="flex-1">
        {activeTab === ROUTES.HOME && <HomeScreen />}
        {activeTab === ROUTES.VIEW && <ViewerScreen />}
        {activeTab === ROUTES.MERGE && <MergeScreen />}
        {activeTab === ROUTES.SCAN && <ScannerScreen />}
      </View>
    </PhoneShell>
  );
}