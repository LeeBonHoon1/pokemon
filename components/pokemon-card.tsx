"use client";

import Link from "next/link";
import Image from "next/image";

import { PokemonDetailInfo } from "@/types";

interface PokemonCardProps {
  pokemon: PokemonDetailInfo;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const koName = pokemon.names.filter((item) => {
    return item.language.name === "ko";
  });

  return (
    <Link href={`/detail/${pokemon.name}`}>
      <div
        className="flex flex-col items-center space-y-3 p-3 border rounded-2xl"
        key={pokemon.name}
      >
        <div className="text-[20px]">{koName[0].name}</div>
        <Image
          src={pokemon.sprites.front_default}
          width={200}
          height={200}
          alt="Image"
        />
      </div>
    </Link>
  );
};

export default PokemonCard;
