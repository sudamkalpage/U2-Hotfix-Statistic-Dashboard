import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  data: any;
  setData: (inputData: any) => void;
};

export const useDataStore = create(
  persist<State>(
    (set, get) => ({
      data: {},
      setData: (inputData: any) => set((state) => ({ data: inputData })),
    }),
    {
      name: "patch-data",
      getStorage: () => sessionStorage,
    }
  )
);
