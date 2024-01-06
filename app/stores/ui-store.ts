import { create } from "zustand";

export interface UiStore {
  expandSidebar: boolean;
  darkMode: boolean
}

export interface UseUiStore {
  ui: UiStore;
  toggleExpandSidebar: () => void;
  toggleDarkMode: () => void
}

const initialState: UiStore = {
  expandSidebar: true,
  darkMode: true
};

const useUiStore = create<UseUiStore>((set) => ({
  ui: initialState,
  toggleExpandSidebar: () => {
    set(({ ui }) => ({ ui: { ...ui, expandSidebar: !ui.expandSidebar } }));
  },
  toggleDarkMode: () => {
    const root = document.documentElement

    root.classList.toggle('dark')

    set(({ ui }) => ({ ui: { ...ui, darkMode: !ui.darkMode } }));
  }
}));

export default useUiStore;
