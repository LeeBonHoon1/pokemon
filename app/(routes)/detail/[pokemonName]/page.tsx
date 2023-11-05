"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import useGetDetail from "@/hooks/use-get-detail";

import Loading from "@/components/loading";
import useGetKoInfo from "@/hooks/use-get-koinfo";
import ErrorPage from "@/components/error";
import useGetEvolution from "@/hooks/use-get-evolution";

const PokemonDetailPage = () => {
  const params = useParams();
  const { pokemonName } = params || {};
  const {
    data: detailData,
    error: detailError,
    isLoading: detailLoading,
  } = useGetDetail(pokemonName || {});
  const {
    data: koInfoData,
    error: koInfoError,
    isLoading: koInfoLoading,
  } = useGetKoInfo(detailData?.species.url);
  const {
    data: evolutionData,
    error: evolutionError,
    isLoading: evolutionLoading,
  } = useGetEvolution(detailData?.id || 1);

  if (detailLoading || koInfoLoading || evolutionLoading) return <Loading />;
  if (detailError || koInfoError || evolutionError) return <ErrorPage />;

  const name = koInfoData?.names?.filter((item) => {
    return item.language.name === "ko";
  });

  const introduction = koInfoData?.flavor_text_entries?.filter(
    (item, index, self) =>
      self.findIndex(
        (t) => t.language.name === "ko" && t.flavor_text === item.flavor_text
      ) === index
  );

  console.log(evolutionData);

  return (
    <div className="pt-20 w-[80%] m-auto">
      <div className="space-y-5 md:space-y-0 md:flex md:justify-evenly mt-10">
        <div className="space-y-9">
          <h1 className="text-5xl font-bold">{name?.[0].name}</h1>
          <Image
            src={detailData?.sprites.front_default || ""}
            alt="pokemon"
            width={400}
            height={400}
            className="border-4 rounded-3xl"
          />
          <div></div>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <div className="text-3xl">포켓몬 소개</div>
          {introduction?.map((intro, index) => (
            <div key={index} className="text-lg">
              {intro.flavor_text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
