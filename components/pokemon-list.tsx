"use client";

import { useEffect } from "react";
import { PokemonDetailInfo } from "@/types";

import useGetPokemon from "@/hooks/use-get-pokemon";
import { searchStore } from "@/store/search";
import { useInView } from "react-intersection-observer";

import Loading from "@/components/loading";
import ErrorPage from "@/components/error";
import PokemonCard from "@/components/pokemon-card";
import SkeletonCard from "@/components/skeleton-card";

const PokemonList = () => {
  const { setTotalCount } = searchStore();
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetching } =
    useGetPokemon();
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  useEffect(() => {
    if (data) {
      const counts = data.pages.map((item) => item.count);
      setTotalCount(Number(counts));
    }
  }, [data, setTotalCount]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-3 justify-items-center py-10">
      {data?.pages?.map((pokemons) => {
        return pokemons.pokemonData.map((item: PokemonDetailInfo) => {
          return (
            <div key={item.id}>
              <PokemonCard pokemon={item} />
            </div>
          );
        });
      })}
      {isFetching &&
        Array.from({ length: 5 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      <div ref={ref} />
    </div>
  );
};

export default PokemonList;
