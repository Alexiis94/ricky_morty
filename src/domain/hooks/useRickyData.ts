import { useEffect } from "react";
import { useRickyStore } from "../../infraestructure/api/rickyStore";

export const useRickyData = () => {
  const isLoading = useRickyStore((state) => state.isLoading);
  const dataRicky = useRickyStore((state) => state.dataList);

  useEffect(() => {
    useRickyStore.getState().fetchData();
  }, []);

  return { isLoading, dataRicky };
};
