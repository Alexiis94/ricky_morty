import type { Character } from "../../domain/Ricky/character";

export const mapCharactersWithEpisodes = (
  characters: Character[],
  episodes: any[]
) => {
  return characters.map((character: Character): Character => {
    const episodeId =
      character.episode[0].split("/")[
        character.episode[0].split("/").length - 1
      ];

    const episodeFind = episodes.find((re) => re.id === Number(episodeId));

    return {
      ...character,
      episode: episodeFind?.name ?? "Episodio desconocido",
    };
  });
};
