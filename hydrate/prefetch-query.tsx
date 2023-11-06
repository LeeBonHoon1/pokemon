import { PropsWithChildren } from "react";
import { Hydrate, dehydrate } from "@tanstack/react-query";

import getHydrateQueryClient from "@/hydrate/get-hydrate-query-client";
import PokemonAPIs from "@/common/apis";

export const PrefetchQuery = async ({ children }: PropsWithChildren) => {
  const queryClient = getHydrateQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) => PokemonAPIs.getPokemon(pageParam),
  });

  const dehydrateState = dehydrate(queryClient);
  return <Hydrate state={dehydrateState}>{children}</Hydrate>;
};
