export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stat: PokemonStat[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonLoading = {
  type: typeof POKEMON_LOADING;
};

export type PokemonFail = {
  type: typeof POKEMON_FAIL;
};

export type PokemonSuccess = {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
};

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
