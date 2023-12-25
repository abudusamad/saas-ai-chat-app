import { create } from "zustand";

interface MobileSidebarStore {
	isOpen: boolean;
	onClose: () => void;
	onOpen: () => void;
}

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
	isOpen: false,
	onClose: () => set({ isOpen: false }),
	onOpen: () => set({ isOpen: true }),
}));
