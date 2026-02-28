import { useAppStore } from "../store/appStore";

export function useNavigation() {
  const activeTab = useAppStore((s) => s.activeTab);
  const setActiveTab = useAppStore((s) => s.setActiveTab);

  return { activeTab, setActiveTab };
}