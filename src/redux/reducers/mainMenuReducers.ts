import { MainMenuAction, MainMenuActionTypes } from "../constants";

const initialGameId: string | null = null;

const initialState = {
    gameId: initialGameId,
}

export function mainMenuReducer(state: object = initialState, action: MainMenuAction) {
    switch (action.type) {
        case MainMenuActionTypes.SET_GAME_ID:
            return {...state, gameId: action.payload};

        case MainMenuActionTypes.UNSET_GAME_ID:
            return {...state, gameId: null };

        default:
            return {};
    }

}