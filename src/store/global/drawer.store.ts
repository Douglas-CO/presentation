import { create } from 'zustand';

interface DrawerState {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  toggleDrawer: () => void;
}

export const useDrawerStore = create<DrawerState>()(set => ({
  openDrawer: false,
  setOpenDrawer: openDrawer => set({ openDrawer }),
  toggleDrawer: () =>
    set(state => ({ openDrawer: !state.openDrawer })),
}));