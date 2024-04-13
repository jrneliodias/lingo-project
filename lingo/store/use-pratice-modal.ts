import { create } from "zustand";

type PraticeModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const usePraticesModal = create<PraticeModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
