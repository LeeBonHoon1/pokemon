import PoketmonAPIs from "@/common/apis";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetPokemon = () => {
  const { data, isLoading, isFetching, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemons"],
      queryFn: ({ pageParam = 0 }) => PoketmonAPIs.getPokemon(pageParam),
      staleTime: 1000 * 60 * 3,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      keepPreviousData: false,
      getNextPageParam: (lastPage, pages) => {
        const { count } = lastPage || {};
        if (pages.length * 20 < count) {
          return pages.length * 20;
        } else {
          return false;
        }
      },
    });

  return {
    data,
    isLoading,
    isFetching,
    error,
    hasNextPage,
    fetchNextPage,
  };
};

export default useGetPokemon;
