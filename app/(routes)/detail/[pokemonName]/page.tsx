"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { convertBorderColor, getEvolutionId, getSpeciesName } from "@/utils";

import useGetDetail from "@/hooks/use-get-detail";
import useGetEvolution from "@/hooks/use-get-evolution";
import useGetEvolutionImage from "@/hooks/use-get-evol-image";
import useGetKoInfo from "@/hooks/use-get-koinfo";

import Loading from "@/components/loading";
import ErrorPage from "@/components/error";
import EvolImageSkeleton from "@/components/evol-image-skelecon";

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

  const evolutionId = getEvolutionId(koInfoData?.evolution_chain?.url || "");

  const {
    data: evolutionData,
    error: evolutionError,
    isLoading: evolutionLoading,
  } = useGetEvolution(evolutionId || "");

  const speciesNames = evolutionData ? getSpeciesName(evolutionData.chain) : [];

  const {
    data: evolImageData,
    isLoading: evolImageLoading,
    error: evolImageError,
    isFetching: evolImageFetching,
  } = useGetEvolutionImage(speciesNames);

  if (detailLoading || koInfoLoading || evolutionLoading || evolImageLoading)
    return <Loading />;
  if (detailError || koInfoError || evolutionError || evolImageError)
    return <ErrorPage />;

  const name = koInfoData?.names?.filter((item) => {
    return item.language.name === "ko";
  });

  const introduction = koInfoData?.flavor_text_entries?.filter(
    (item, index, self) =>
      self.findIndex(
        (t) => t.language.name === "ko" && t.flavor_text === item.flavor_text
      ) === index
  );

  const borderColor = convertBorderColor(koInfoData?.color?.name!);

  return (
    <div className="pt-20 w-[80%] m-auto">
      <div className="space-y-5 flex flex-col md:flex-row justify-evenly bg-transparent">
        <div className="space-y-9">
          <h1 className="text-5xl font-bold">{name?.[0].name}</h1>
          <Image
            style={{ borderColor: borderColor }}
            src={detailData?.sprites.front_default || ""}
            alt="pokemon"
            width={400}
            height={400}
            className="border-4 rounded-3xl m-auto"
          />
          <div className="flex gap-2">
            {evolImageFetching
              ? Array.from({ length: 3 }).map((_, index) => (
                  <EvolImageSkeleton key={index} />
                ))
              : evolImageData?.map((item) => (
                  <Link href={`/detail/${item.name}`} key={item.name}>
                    <div
                      className="border rounded-2xl"
                      style={{ borderColor: borderColor }}
                    >
                      <Image
                        style={{ borderColor: borderColor }}
                        src={item.sprites.front_default}
                        width={100}
                        height={100}
                        alt="EvolutionImage"
                      />
                    </div>
                  </Link>
                ))}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <div className="text-3xl">포켓몬 소개</div>
          {introduction?.map((intro) => (
            <div key={intro.language.name} className="text-lg">
              {intro.flavor_text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
