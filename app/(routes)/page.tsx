import { PrefetchQuery } from "@/hydrate/prefetch-query";
import PokemonList from "@/components/pokemon-list";

export default function Home() {
  return (
    /* @ts-expect-error Async Server Component */
    <PrefetchQuery>
      <PokemonList />
    </PrefetchQuery>
  );
}
