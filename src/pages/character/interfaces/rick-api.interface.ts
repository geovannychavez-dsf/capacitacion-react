export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Location {
  name: string;
  url: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface RickAndMortyResponse {
  info: Info;
  results: Character[];
}
