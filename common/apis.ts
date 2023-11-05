import axios from 'axios'
import { BASE_URL } from './constants'
import { PokemonDetailInfo, Pokemons } from '@/types'
import { KoInfoPokemon } from '@/types/ko-info'
import { Evolution } from '@/types/evolution';

const getPokemon = async (page: number) => {

  const res = await axios.get<Pokemons>(`${BASE_URL}/pokemon?limit=${20}&offset=${page}`)
  const pokemonDataPromises = res.data.results.map(async (pokemon) => {
    const url = pokemon.url
    const id = url.split('/').filter(segment => segment !== '').pop();
    const detailData = await getPokemonInfo(id || "", pokemon.url)
    return detailData
  });

  const pokemonData: PokemonDetailInfo[] = await Promise.all(pokemonDataPromises);

  return { pokemonData, count: res.data.count };
}

const getPokemonInfo = async (id: string, url: string) => {

  const res = await axios.get(`${BASE_URL}/pokemon-species/${id}`);
  const imageRes = await axios.get(url)
  return { ...res.data, ...imageRes.data }
}

const getPokemonDetail = async (name: string | object) => {
  const res = await axios.get<PokemonDetailInfo>(`${BASE_URL}/pokemon/${name}`)
  return res.data
}

const getKoInfoPokemon = async (url: string) => {
  const res = await axios.get<KoInfoPokemon>(url)
  return res.data
}

const getEvolution = async (id: string) => {
  const res = await axios.get<Evolution>(`${BASE_URL}/evolution-chain/${id}`)
  return res.data
}

const getEvolImage = async (array: string[]) => {
  const promises = array.map(async (item) => {
    const res = await axios.get(`${BASE_URL}/pokemon/${item}`);
    return res.data;
  });

  const results = await Promise.all(promises);
  return results;
}


const PokemonAPIs = {
  getPokemon,
  getPokemonInfo,
  getPokemonDetail,
  getKoInfoPokemon,
  getEvolution,
  getEvolImage
}

export default PokemonAPIs





