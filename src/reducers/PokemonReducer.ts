import {
  PokemonType,
  PokemonDispatchTypes,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_LOADING,
} from '../actions/PokemonActionTypes';

type DefaultStateT = {
  loading: boolean;
  pokemon?: PokemonType;
};

const defaultState: DefaultStateT = {
  loading: false,
};

const pokemonReducer = (
  state: DefaultStateT = defaultState,
  action: PokemonDispatchTypes
): DefaultStateT => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
