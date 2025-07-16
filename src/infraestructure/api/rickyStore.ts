import { persist } from "zustand/middleware";
import type { Character } from "../../domain/Ricky/character";
import { create } from "zustand";
import { getCharacters } from "../../application/RickMorty/getCharater";

interface RickyStore {
  isLoading: boolean;
  dataList: Character[];
  fetchData: () => void;
}

export const useRickyStore = create<RickyStore>()(
  persist(
    (set) => ({
      isLoading: false,
      dataList: [],
      fetchData: async () => {
        set({ isLoading: true });
        try {
          const response = await getCharacters();
          set({ dataList: response });
        } catch (error) {
          console.log("Error: al solicitar la data");
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    { name: "ricky-store" }
  )
);
