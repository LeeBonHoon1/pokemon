import { useQuery } from "@tanstack/react-query";
import PokemonAPIs from "@/common/apis";

const useGetEvolutionImage = (urls: string[]) => {
  const { data, isLoading, error, isFetching } = useQuery(
    ["pokemon-evol-image", urls],
    () => PokemonAPIs.getEvolImage(urls),
    {
      staleTime: 0,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};

export default useGetEvolutionImage;
