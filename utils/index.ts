import { Chain, EvolvesTo } from "@/types/evolution";

export const convertBorderColor = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: "#6890f0",
    green: "#4db050",
    red: "#fe5722",
    white: "#FFFFFF",
    yellow: "#ffeb3c",
    brown: "#9c7a5f",
    purple: "#663ab3",
    pink: "#f766ae",
    gray: "#737373",
    black: "#2e3775",
  };

  return colorMap[color] || "";
};

export const getEvolutionId = (url: string) => {
  if (url) {
    const id = url.split('/').filter((segment) => segment !== "").pop()
    return id
  }
}

export const getSpeciesName = (data: Chain): string[] => {
  const urls: string[] = [];

  function extractNames(data: Chain) {
    if (data?.species && data?.species.name) {
      urls.push(data.species.name);
    }

    if (data?.evolves_to && data?.evolves_to.length > 0) {
      for (const evolutionData of data?.evolves_to) {
        extractNames(evolutionData);
      }
    }
  }

  extractNames(data);

  return urls;
}

