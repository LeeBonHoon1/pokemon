export interface Evolution {
  baby_trigger_item: object | null;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: Species3;
  evolution_details: EvolutionDetail[];
}

export interface EvolvesTo {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolvesTo2[];
  is_baby: boolean;
  species: Species2;
}

export interface EvolutionDetail {
  min_level: number;
  needs_overworld_rain: boolean;
  time_of_day: string;
  trigger: Trigger;
  turn_upside_down: boolean;
}

export interface Trigger {
  name: string;
  url: string;
}

export interface EvolvesTo2 {
  evolution_details: EvolutionDetail2[];
  evolves_to: any[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDetail2 {
  min_level: number;
  needs_overworld_rain: boolean;
  time_of_day: string;
  trigger: Trigger2;
  turn_upside_down: boolean;
}

export interface Trigger2 {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Species2 {
  name: string;
  url: string;
}

export interface Species3 {
  name: string;
  url: string;
}
