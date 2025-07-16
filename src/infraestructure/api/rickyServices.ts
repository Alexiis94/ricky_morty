import { mapCharactersWithEpisodes } from "../../adapter/Ricky/FormatData";
import type { Character } from "../../domain/Ricky/character";
import axiosInstance from "./axiosIntance";

export const getCharactersServices = async (): Promise<Character[]> => {
  try {
    const characters = await axiosInstance.get("/character");
    const episodes = await axiosInstance.get("/episode");

    const resultsCharacters = characters.data.results;
    const resultsEpisodes = episodes.data.results;

    const newArrayfiltered = mapCharactersWithEpisodes(
      resultsCharacters,
      resultsEpisodes
    );

    return newArrayfiltered;
  } catch (error) {
    console.log("[Services]: Error al obtener datos de Charters");
    throw error;
  }
};

export const getEpisode = async () => {
  try {
    const response = await axiosInstance.get("/episode");
    const { results } = response.data;
    return results;
  } catch (error) {
    console.log("[Services]: Error al obtener datos de Charters");

    throw error;
  }
};
