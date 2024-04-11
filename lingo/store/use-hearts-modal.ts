import { create } from "zustand";

type HeartModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useHeartsModal = create<HeartModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
