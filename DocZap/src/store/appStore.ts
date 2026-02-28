import { create } from "zustand";
import type { RouteKey } from "../utils/constants";
import { ROUTES } from "../utils/constants";

type AppState = {
  activeTab: RouteKey;
  setActiveTab: (tab: RouteKey) => void;
  homeHasNewFiles: boolean;
  setHomeHasNewFiles: (v: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  activeTab: ROUTES.HOME,
  setActiveTab: (tab) => set({ activeTab: tab }),

  homeHasNewFiles: true, // demo badge (coral dot)
  setHomeHasNewFiles: (v) => set({ homeHasNewFiles: v }),
}));