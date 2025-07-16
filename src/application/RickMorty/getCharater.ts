import type { Character } from "../../domain/Ricky/character";
import { getCharactersServices } from "../../infraestructure/api/rickyServices";

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await getCharactersServices();

    return response;
  } catch (error) {
    console.log("Error al solicita data");
    throw error;
  }
};
