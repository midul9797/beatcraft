import { create } from "zustand";

export const useStore = create((set) => ({
  ready: false,
  colors: {
    headband: "#000000",
    cushions: "#CCCCCC",
    speakerCups: "#333333",
    slider: "#666666",
    innerCushions: "#FFFFFF",
    headpad: "#FFFFFF",
  },
  tempColors: {
    headband: "#000000",
    cushions: "#CCCCCC",
    speakerCups: "#333333",
    slider: "#666666",
    innerCushions: "#FFFFFF",
    headpad: "#FFFFFF",
  },
  activePart: null,
  isReady: () => set({ ready: true }),
  changeColor: (color, part) =>
    set((state) => ({ colors: { ...state.colors, [part]: color } })),
  changeTempColor: (color, part) =>
    set((state) => ({ tempColors: { ...state.tempColors, [part]: color } })),
  setActivePart: (part) => set({ activePart: part }),
}));
