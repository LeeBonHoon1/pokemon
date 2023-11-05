import { useQuery } from "@tanstack/react-query";
import PokemonAPIs from "@/common/apis";

const useGetKoInfo = (url: string = "") => {
  const { data, isLoading, error } = useQuery(
    ["pokemon-ko", url],
    () => PokemonAPIs.getKoInfoPokemon(url),
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

export default useGetKoInfo;
