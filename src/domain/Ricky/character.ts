export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: CharterLocation;
  episode: string;
}

export interface CharterLocation {
  name: string;
}
