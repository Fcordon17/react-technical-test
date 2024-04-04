import { initialState } from "../store/GlobalStore";
import { ActionType, GlobalStateInterface } from "./GlobalStore";

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
    switch(action.type) {
        case 'POKEMON_DETAILS':
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case 'RESET_STATE':
            return initialState
        default:
            return initialState
    }
}

export default Reducer