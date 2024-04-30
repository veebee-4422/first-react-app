import { GameAction, GameActionTypes, mappings } from "../constants";

const initialState = {
    mapLocations: mappings
}

export function gameReducer(state: object = initialState, action: GameAction) {
    switch (action.type) {
        case GameActionTypes.GET_AVAILABLE_POINTS_AT:
            return { ...state, mapLocations: mappings };
            // const mappings = state.mapLocations;
            // if(!mappings) return null;

            // return mappings[action.payload];

        default:
            return null;
    }
}