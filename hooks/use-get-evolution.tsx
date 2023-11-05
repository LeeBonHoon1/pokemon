import { useQuery } from "@tanstack/react-query";
import PokemonAPIs from "@/common/apis";

const useGetEvolution = (id: number) => {
  const { data, isLoading, error } = useQuery(
    ["pokemon-evol", id],
    () => PokemonAPIs.getEvolution(id),
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

export default useGetEvolution;
