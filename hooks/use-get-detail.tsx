import { useQuery } from "@tanstack/react-query";
import PokemonAPIs from "@/common/apis";

const useGetDetail = (name: string | object = "") => {
  const { data, isLoading, error } = useQuery(
    ["pokemon-detail", name],
    () => PokemonAPIs.getPokemonDetail(name ? name : {}),
    {
      staleTime: 1000 * 60 * 3,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetDetail;
