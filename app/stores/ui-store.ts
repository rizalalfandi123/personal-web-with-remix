import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface UiStore {
  expandSidebar: boolean;
  darkMode: boolean;
  openMobileSidebar: boolean;
}

export interface UseUiStore {
  ui: UiStore;
  toggleExpandSidebar: () => void;
  toggleDarkMode: () => void;
  toggleMobileSidebar: (nextValue: boolean) => void;
}

const initialState: UiStore = {
  expandSidebar: true,
  darkMode: true,
  openMobileSidebar: false,
};

const useUiStore = create(
  persist<UseUiStore>(
    (set) => ({
      ui: initialState,
      toggleExpandSidebar: () => {
        set(({ ui }) => ({ ui: { ...ui, expandSidebar: !ui.expandSidebar } }));
      },
      toggleDarkMode: () => {
        const root = document.documentElement;

        root.classList.toggle("dark");

        set(({ ui }) => ({ ui: { ...ui, darkMode: !ui.darkMode } }));
      },
      toggleMobileSidebar: (openMobileSidebar) => {
        set(({ ui }) => ({ ui: { ...ui, openMobileSidebar } }));
      },
    }),
    {
      name: "rizal-alfandi",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUiStore;
