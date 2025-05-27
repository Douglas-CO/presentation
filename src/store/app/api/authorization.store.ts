import { getProfiles } from "@/actions";
import { Profile } from "@/shared";
import { create } from "zustand";

type AuthState = {
  systemParametersArray: Profile[];
  isLoadin: boolean;
  setSystemParametersArray: (value: Profile[]) => void;
  fetchAllSystemParameters: () => Promise<void>;

  frontEndVersion?: string;
  setFrontEndVersion: (value: string) => void;
};

export const useAuthenticateStore = create<AuthState>()((set) => ({
  systemParametersArray: [],
  isLoadin: false,

  setSystemParametersArray: (value) => set({ systemParametersArray: value }),

  fetchAllSystemParameters: async () => {
    set({ isLoadin: true });
    await getProfiles({
      page_size: 2000,
    });

    set({
      systemParametersArray: [],
      isLoadin: false,
      frontEndVersion: "",
    });
  },

  // ----------------------
  frontEndVersion: undefined,
  setFrontEndVersion: (value) => set({ frontEndVersion: value }),
}));
