import PokemonList from "@/components/pokemon-list";
import { PrefetchQuery } from "@/hydrate/prefetch-query";

export default function Home() {
  return (
    /* @ts-expect-error Async Server Component */
    <PrefetchQuery>
      <PokemonList />
    </PrefetchQuery>
  );
}
