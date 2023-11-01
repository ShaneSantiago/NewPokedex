type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};
type PokemonStat = {
  stat: {
    name: string;
  };
  base_stat: number;
};

type PokemonAbility = {
  ability: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  order: number;
  url: string;
};
